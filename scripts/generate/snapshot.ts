/**
 * Reading and writing `spec/upstream/` — the verbatim snapshot of the Bot API
 * documentation.
 *
 * Files in `spec/upstream/` are written by the `fetch` stage and must never be
 * edited by hand: reviewing their diff is how upstream changes are reviewed.
 *
 * @module
 */

import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import process from 'node:process'
import { z } from 'zod'
import { SPEC_DIR } from './paths.ts'

export const UPSTREAM_DIR = path.join(SPEC_DIR, 'upstream')

/** Field of a type, or parameter of a method, exactly as documented. */
export interface UpstreamMember {
  /** Name as it appears in the first table column. */
  name: string
  /** Contents of the "Type" table cell, e.g. `Array of MessageEntity`. */
  rawType: string
  /** Whether the member is required. */
  required: boolean
  /** Description as Markdown, with the "_Optional._" prefix removed. */
  description: string
}

export interface UpstreamMethod {
  name: string
  description: string
  /** `null` when the section has no parameters table. */
  parameters: Array<UpstreamMember> | null
}

export interface UpstreamType {
  name: string
  description: string
  /** `null` when the section has no fields table. */
  fields: Array<UpstreamMember> | null
}

export interface UpstreamMeta {
  /**
   * Bot API version this snapshot was taken from.
   *
   * Not parsed from the documentation: it is set by hand (or by the
   * `update-bot-api` skill) from the "Recent changes" section, and preserved
   * across `fetch` runs.
   */
  version: string
  /** Documentation URL the snapshot was fetched from. */
  url: string
  /** Method names, in documentation order. */
  methods: Array<string>
  /** Type names, in documentation order. */
  types: Array<string>
}

export interface Snapshot {
  meta: UpstreamMeta
  methods: Array<UpstreamMethod>
  types: Array<UpstreamType>
}

const memberSchema = z.strictObject({
  name: z.string(),
  rawType: z.string(),
  required: z.boolean(),
  description: z.string(),
})

const methodSchema = z.strictObject({
  name: z.string(),
  description: z.string(),
  parameters: z.array(memberSchema).nullable(),
})

const typeSchema = z.strictObject({
  name: z.string(),
  description: z.string(),
  fields: z.array(memberSchema).nullable(),
})

const metaSchema = z.strictObject({
  version: z.string(),
  url: z.string(),
  methods: z.array(z.string()),
  types: z.array(z.string()),
})

/**
 * Serializes to canonical JSON.
 *
 * Object keys are emitted in construction order, so the shape of a written
 * file is fully determined by the code that builds it — never by iteration
 * order over a parsed object.
 */
function canonical(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`
}

export async function writeSnapshot(snapshot: Snapshot): Promise<void> {
  const methodsDir = path.join(UPSTREAM_DIR, 'methods')
  const typesDir = path.join(UPSTREAM_DIR, 'types')

  // Remove entities that no longer exist upstream, so the directory always
  // matches `meta.json` exactly.
  await fs.rm(methodsDir, { recursive: true, force: true })
  await fs.rm(typesDir, { recursive: true, force: true })
  await fs.mkdir(methodsDir, { recursive: true })
  await fs.mkdir(typesDir, { recursive: true })

  for (const method of snapshot.methods) {
    await fs.writeFile(path.join(methodsDir, `${method.name}.json`), canonical({
      name: method.name,
      description: method.description,
      parameters: method.parameters?.map(member => ({
        name: member.name,
        rawType: member.rawType,
        required: member.required,
        description: member.description,
      })) ?? null,
    }), 'utf-8')
  }

  for (const type of snapshot.types) {
    await fs.writeFile(path.join(typesDir, `${type.name}.json`), canonical({
      name: type.name,
      description: type.description,
      fields: type.fields?.map(member => ({
        name: member.name,
        rawType: member.rawType,
        required: member.required,
        description: member.description,
      })) ?? null,
    }), 'utf-8')
  }

  await fs.writeFile(path.join(UPSTREAM_DIR, 'meta.json'), canonical({
    version: snapshot.meta.version,
    url: snapshot.meta.url,
    methods: snapshot.meta.methods,
    types: snapshot.meta.types,
  }), 'utf-8')
}

export async function readMeta(): Promise<UpstreamMeta> {
  const file = path.join(UPSTREAM_DIR, 'meta.json')
  const parsed = metaSchema.safeParse(JSON.parse(await fs.readFile(file, 'utf-8')))
  if (!parsed.success)
    throw new Error(`Invalid ${path.relative(process.cwd(), file)}:\n${z.prettifyError(parsed.error)}`)
  return parsed.data
}

/**
 * Asserts that a directory holds exactly the entities `meta.json` lists.
 *
 * `meta.json` is the only record of documentation order, so it is what the
 * snapshot is read through. This guards against it drifting from the files
 * next to it.
 */
async function assertDirMatches(dir: string, expected: Array<string>): Promise<void> {
  const found = (await fs.readdir(dir)).filter(entry => entry.endsWith('.json'))
  const missing = expected.filter(name => !found.includes(`${name}.json`))
  const unlisted = found.filter(entry => !expected.includes(entry.slice(0, -'.json'.length)))
  const relative = path.relative(process.cwd(), dir)
  if (missing.length > 0)
    throw new Error(`${relative}: listed in meta.json but missing: ${missing.join(', ')}`)
  if (unlisted.length > 0)
    throw new Error(`${relative}: present but not listed in meta.json: ${unlisted.join(', ')}`)
}

/**
 * Reads the snapshot in documentation order, as recorded in `meta.json`.
 */
export async function readSnapshot(): Promise<Snapshot> {
  const meta = await readMeta()
  await assertDirMatches(path.join(UPSTREAM_DIR, 'methods'), meta.methods)
  await assertDirMatches(path.join(UPSTREAM_DIR, 'types'), meta.types)
  const methods: Array<UpstreamMethod> = []
  const types: Array<UpstreamType> = []

  for (const name of meta.methods) {
    const file = path.join(UPSTREAM_DIR, 'methods', `${name}.json`)
    const parsed = methodSchema.safeParse(JSON.parse(await fs.readFile(file, 'utf-8')))
    if (!parsed.success)
      throw new Error(`Invalid ${path.relative(process.cwd(), file)}:\n${z.prettifyError(parsed.error)}`)
    if (parsed.data.name !== name)
      throw new Error(`${path.relative(process.cwd(), file)}: name is "${parsed.data.name}", expected "${name}"`)
    methods.push(parsed.data)
  }

  for (const name of meta.types) {
    const file = path.join(UPSTREAM_DIR, 'types', `${name}.json`)
    const parsed = typeSchema.safeParse(JSON.parse(await fs.readFile(file, 'utf-8')))
    if (!parsed.success)
      throw new Error(`Invalid ${path.relative(process.cwd(), file)}:\n${z.prettifyError(parsed.error)}`)
    if (parsed.data.name !== name)
      throw new Error(`${path.relative(process.cwd(), file)}: name is "${parsed.data.name}", expected "${name}"`)
    types.push(parsed.data)
  }

  return { meta, methods, types }
}
