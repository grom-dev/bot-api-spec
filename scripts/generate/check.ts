/**
 * The `check` stage: reports everything that needs a human (or agent)
 * decision before the spec can be generated.
 *
 * Checks are deliberately structural. Nothing here interprets the prose of the
 * documentation: the generator only detects *that* a decision is needed, and
 * the description in the upstream snapshot is what the decision is made from.
 *
 * @module
 */

import type { Overrides } from './overrides.ts'
import type { Snapshot, UpstreamMember } from './snapshot.ts'
import type { RawValueType } from './value-type.ts'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { ROOT_DIR } from './paths.ts'
import { parseRawType } from './value-type.ts'

const exec = promisify(execFile)

const UPSTREAM_FILE = /spec\/upstream\/(methods|types)\/(.+)\.json$/
const SURROUNDING_QUOTES = /^"|"$/g

export type IssueLevel
  /** Generation cannot proceed until this is resolved. */
  = | 'blocker'
    /** Upstream changed underneath an override: confirm the override still applies. */
    | 'review'
    /** Upstream changed, but nothing overrides it. */
    | 'info'

export interface Issue {
  level: IssueLevel
  /** Entity the issue belongs to, e.g. `types/Chat`. */
  entity: string
  message: string
  /** Shell command that shows what changed, when applicable. */
  hint?: string
}

/**
 * Checks the snapshot against the overrides. Pure: no git, no network.
 */
export function analyzeSpec(snapshot: Snapshot, overrides: Overrides): Array<Issue> {
  const issues: Array<Issue> = []
  const blocker = (entity: string, message: string) => issues.push({ level: 'blocker', entity, message })

  const typeNames = new Set(snapshot.types.map(({ name }) => name))
  const methodNames = new Set(snapshot.methods.map(({ name }) => name))

  /** Reports `api-type` references that no longer exist upstream. */
  const checkRefs = (entity: string, where: string, value: RawValueType): void => {
    switch (value.type) {
      case 'api-type':
        if (!typeNames.has(value.name))
          blocker(entity, `${where} references unknown type "${value.name}"`)
        break
      case 'array':
        checkRefs(entity, where, value.of)
        break
      case 'union':
        value.types.forEach(inner => checkRefs(entity, where, inner))
        break
    }
  }

  const checkMembers = (
    entity: string,
    kind: 'parameter' | 'field',
    members: Array<UpstreamMember> | null,
    memberOverrides: Record<string, { type?: RawValueType, description?: string }> | undefined,
  ): void => {
    const documented = new Map((members ?? []).map(member => [member.name, member]))
    for (const member of members ?? []) {
      const override = memberOverrides?.[member.name]
      if (override?.type !== undefined) {
        checkRefs(entity, `${kind} "${member.name}"`, override.type)
        continue
      }
      if (parseRawType(member.rawType) == null) {
        blocker(entity, `${kind} "${member.name}": cannot parse type "${member.rawType}", override it`)
      }
    }
    for (const name of Object.keys(memberOverrides ?? {})) {
      if (!documented.has(name))
        blocker(entity, `overrides ${kind} "${name}", which is not documented`)
    }
  }

  for (const method of snapshot.methods) {
    const entity = `methods/${method.name}`
    const override = overrides.methods.get(method.name)
    if (override?.returnType === undefined)
      blocker(entity, 'no returnType override (the return type is documented in prose, so it must be set by hand)')
    else
      checkRefs(entity, 'returnType', override.returnType)
    checkMembers(entity, 'parameter', method.parameters, override?.parameters)
  }

  for (const type of snapshot.types) {
    const entity = `types/${type.name}`
    const override = overrides.types.get(type.name)
    if (override?.oneOf !== undefined && override.emptyObject !== undefined)
      blocker(entity, 'cannot override both "oneOf" and "emptyObject"')
    if (override?.oneOf !== undefined) {
      if (type.fields != null)
        blocker(entity, 'has a fields table, so it cannot be a union (remove "oneOf")')
      if (override.fields !== undefined)
        blocker(entity, 'cannot override both "oneOf" and "fields"')
      override.oneOf.forEach(value => checkRefs(entity, 'oneOf', value))
    }
    else if (override?.emptyObject !== undefined) {
      if (type.fields != null)
        blocker(entity, 'now has a fields table, so it is no longer an empty object (remove "emptyObject")')
    }
    else if (type.fields == null) {
      blocker(entity, 'documented without a fields table: set "oneOf" if it is a union, or "emptyObject": true if it holds no information')
    }
    checkMembers(entity, 'field', type.fields, override?.fields)
  }

  for (const name of overrides.methods.keys()) {
    if (!methodNames.has(name))
      issues.push({ level: 'blocker', entity: `methods/${name}`, message: 'override for a method that is no longer documented' })
  }
  for (const name of overrides.types.keys()) {
    if (!typeNames.has(name))
      issues.push({ level: 'blocker', entity: `types/${name}`, message: 'override for a type that is no longer documented' })
  }

  return issues
}

/**
 * Reports upstream files that differ from `HEAD`, split by whether an override
 * is attached to them. This is what replaces the old per-entry hashes: the
 * change itself is in the working tree, so it can simply be read.
 */
export async function analyzeChanges(overrides: Overrides): Promise<Array<Issue>> {
  let status: string
  try {
    const { stdout } = await exec('git', ['status', '--porcelain', '--', 'spec/upstream'], { cwd: ROOT_DIR })
    status = stdout
  }
  catch {
    return []
  }

  const issues: Array<Issue> = []
  for (const line of status.split('\n')) {
    if (line.trim() === '')
      continue
    const [index, worktree] = [line[0], line[1]]
    const file = line.slice(3).trim().replace(SURROUNDING_QUOTES, '')
    const parsed = UPSTREAM_FILE.exec(file)
    if (parsed == null)
      continue
    const [, dir, name] = parsed as unknown as [string, 'methods' | 'types', string]
    const entity = `${dir}/${name}`
    const hasOverride = dir === 'methods' ? overrides.methods.has(name) : overrides.types.has(name)

    if (index === 'D' || worktree === 'D') {
      issues.push({ level: 'review', entity, message: 'no longer documented upstream' })
    }
    else if (index === 'A' || index === '?') {
      issues.push({ level: 'review', entity, message: 'new upstream entity' })
    }
    else if (hasOverride) {
      issues.push({
        level: 'review',
        entity,
        message: 'upstream changed and this entity has overrides — confirm they still apply',
        hint: `git diff --word-diff -- ${file}`,
      })
    }
    else {
      issues.push({ level: 'info', entity, message: 'upstream changed' })
    }
  }
  return issues
}

export function formatReport(issues: Array<Issue>): string {
  const lines: Array<string> = []
  const groups: Array<[IssueLevel, string]> = [
    ['blocker', 'BLOCKERS — generation cannot proceed'],
    ['review', 'REVIEW — needs a decision'],
    ['info', 'INFO — upstream changed, nothing overrides it'],
  ]

  for (const [level, title] of groups) {
    const group = issues.filter(issue => issue.level === level)
    if (group.length === 0)
      continue
    lines.push('', `${title} (${group.length})`)
    if (level === 'info') {
      lines.push(`  ${group.map(({ entity }) => entity).join(', ')}`)
      continue
    }
    const width = Math.max(...group.map(({ entity }) => entity.length))
    for (const issue of group) {
      lines.push(`  ${issue.entity.padEnd(width)}  ${issue.message}`)
      if (issue.hint !== undefined)
        lines.push(`  ${' '.repeat(width)}  $ ${issue.hint}`)
    }
  }

  if (lines.length === 0)
    return 'Nothing to review.'
  return lines.join('\n').trimStart()
}
