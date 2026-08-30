/**
 * Generator for the Bot API specification.
 *
 * ```
 * node ./scripts/generate/main.ts fetch   # refresh spec/upstream/ from the docs
 * node ./scripts/generate/main.ts check   # report what needs a decision
 * node ./scripts/generate/main.ts build   # spec/ -> src/*.gen.ts
 * node ./scripts/generate/main.ts all     # fetch, check, build
 * ```
 *
 * @module
 */

import { execFile } from 'node:child_process'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import process from 'node:process'
import { promisify } from 'node:util'
import { analyzeChanges, analyzeSpec, formatReport } from './check.ts'
import { codegenMethodsModule, codegenTypesModule, resolveMethods, resolveTypes } from './codegen.ts'
import { readOverrides } from './overrides.ts'
import { fetchBotApi, parseSnapshot } from './parse.ts'
import { MODULE_METHODS_PATH, MODULE_TYPES_PATH, ROOT_DIR } from './paths.ts'
import { readMeta, readSnapshot, writeSnapshot } from './snapshot.ts'

const exec = promisify(execFile)

const relative = (file: string) => path.relative(process.cwd(), file)

async function fetch(): Promise<void> {
  const previous = await readMeta()
  console.info(`Fetching Bot API from ${previous.url}`)
  const $ = await fetchBotApi(previous.url)

  console.info('Parsing Bot API')
  // The version is not parsed from the page: it is carried over, and updated
  // by hand when a release is picked up. See UpstreamMeta.version.
  const snapshot = parseSnapshot($, previous.url, previous.version)

  console.info(`Writing snapshot of ${snapshot.methods.length} methods and ${snapshot.types.length} types`)
  await writeSnapshot(snapshot)
}

async function check(): Promise<number> {
  const [snapshot, overrides] = [await readSnapshot(), await readOverrides()]
  const issues = [...analyzeSpec(snapshot, overrides), ...await analyzeChanges(overrides)]
  console.info(formatReport(issues))
  return issues.some(({ level }) => level === 'blocker') ? 1 : 0
}

async function build({ format = true }: { format?: boolean } = {}): Promise<void> {
  const [snapshot, overrides] = [await readSnapshot(), await readOverrides()]

  const blockers = analyzeSpec(snapshot, overrides).filter(({ level }) => level === 'blocker')
  if (blockers.length > 0) {
    console.error(formatReport(blockers))
    throw new Error(`${blockers.length} blocker(s); run "pnpm gen:check" for the full report`)
  }

  console.info(`Generating types to ${relative(MODULE_TYPES_PATH)}`)
  await fs.writeFile(MODULE_TYPES_PATH, codegenTypesModule(resolveTypes(snapshot, overrides)), 'utf-8')

  console.info(`Generating methods to ${relative(MODULE_METHODS_PATH)}`)
  await fs.writeFile(MODULE_METHODS_PATH, codegenMethodsModule(resolveMethods(snapshot, overrides)), 'utf-8')

  if (format) {
    // Generated modules are emitted as JSON literals; ESLint is what gives
    // them their final, stable formatting. Running it here keeps the committed
    // output a pure function of spec/.
    console.info('Formatting generated modules')
    await exec('pnpm', ['exec', 'eslint', '--fix', '--no-warn-ignored', MODULE_TYPES_PATH, MODULE_METHODS_PATH], {
      cwd: ROOT_DIR,
      maxBuffer: 64 * 1024 * 1024,
    })
  }
}

const command = process.argv[2] ?? 'all'
switch (command) {
  case 'fetch':
    await fetch()
    break
  case 'check':
    process.exitCode = await check()
    break
  case 'build':
    await build({ format: !process.argv.includes('--no-format') })
    break
  case 'all':
    await fetch()
    process.exitCode = await check()
    if (process.exitCode === 0)
      await build()
    break
  default:
    console.error(`Unknown command: ${command}`)
    process.exitCode = 2
}
