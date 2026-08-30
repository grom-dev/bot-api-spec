/**
 * Reading and validating `spec/overrides/` — the hand-written corrections
 * applied on top of the upstream snapshot.
 *
 * One file per entity, named after it: `spec/overrides/types/Chat.json`
 * overrides the type `Chat`. Files exist only for entities that need them.
 *
 * @module
 */

import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import process from 'node:process'
import { z } from 'zod'
import { SPEC_DIR } from './paths.ts'
import { valueTypeSchema } from './value-type.ts'

export const OVERRIDES_DIR = path.join(SPEC_DIR, 'overrides')

const memberSchema = z.strictObject({
  /** Replaces the documented type. */
  type: valueTypeSchema.optional(),
  /** Replaces the documented description, as Markdown. */
  description: z.string().optional(),
}).refine(
  value => value.type !== undefined || value.description !== undefined,
  'must override at least one of "type", "description"',
)

const methodSchema = z.strictObject({
  description: z.string().optional(),
  /**
   * Type of the value the method returns. Required for every method: it is
   * documented in prose, which is not parsed.
   */
  returnType: valueTypeSchema.optional(),
  parameters: z.record(z.string(), memberSchema).optional(),
})

const typeSchema = z.strictObject({
  description: z.string().optional(),
  /** Marks the type as a union, replacing its (absent) fields. */
  oneOf: z.array(valueTypeSchema).optional(),
  /**
   * Marks a type documented without a fields table as an object that has no
   * fields ("Currently holds no information"), as opposed to a union.
   */
  emptyObject: z.literal(true).optional(),
  fields: z.record(z.string(), memberSchema).optional(),
})

export type MethodOverride = z.infer<typeof methodSchema>
export type TypeOverride = z.infer<typeof typeSchema>

export interface Overrides {
  methods: Map<string, MethodOverride>
  types: Map<string, TypeOverride>
}

async function readDir<T>(dir: string, schema: z.ZodType<T>): Promise<Map<string, T>> {
  const result = new Map<string, T>()
  let entries: Array<string>
  try {
    entries = await fs.readdir(dir)
  }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT')
      return result
    throw error
  }
  for (const entry of entries.sort()) {
    const file = path.join(dir, entry)
    const relative = path.relative(process.cwd(), file)
    if (!entry.endsWith('.json'))
      throw new Error(`${relative}: expected a .json file`)
    const parsed = schema.safeParse(JSON.parse(await fs.readFile(file, 'utf-8')))
    if (!parsed.success)
      throw new Error(`Invalid ${relative}:\n${z.prettifyError(parsed.error)}`)
    result.set(entry.slice(0, -'.json'.length), parsed.data)
  }
  return result
}

export async function readOverrides(): Promise<Overrides> {
  return {
    methods: await readDir(path.join(OVERRIDES_DIR, 'methods'), methodSchema),
    types: await readDir(path.join(OVERRIDES_DIR, 'types'), typeSchema),
  }
}
