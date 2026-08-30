/**
 * Zod schema and parser for {@link ValueType}.
 *
 * The schema mirrors `src/format.ts` structurally. It is kept separate because
 * overrides are validated at runtime, while `src/format.ts` only describes the
 * shape at the type level.
 *
 * @module
 */

import type { ValueType } from '../../src/format.ts'
import { z } from 'zod'

/**
 * Same shape as {@link ValueType}, except `api-type` names are plain strings
 * (they are validated against the upstream snapshot instead of against the
 * generated `types` object, which does not exist yet while generating).
 */
export type RawValueType
  = | { type: 'str', literal?: string }
    | { type: 'bool', literal?: boolean }
    | { type: 'int32', literal?: number }
    | { type: 'int53' }
    | { type: 'float' }
    | { type: 'input-file' }
    | { type: 'api-type', name: string }
    | { type: 'array', of: RawValueType }
    | { type: 'union', types: Array<RawValueType> }

export const valueTypeSchema: z.ZodType<RawValueType> = z.lazy(() => z.discriminatedUnion('type', [
  z.strictObject({ type: z.literal('str'), literal: z.string().optional() }),
  z.strictObject({ type: z.literal('bool'), literal: z.boolean().optional() }),
  z.strictObject({ type: z.literal('int32'), literal: z.number().int().optional() }),
  z.strictObject({ type: z.literal('int53') }),
  z.strictObject({ type: z.literal('float') }),
  z.strictObject({ type: z.literal('input-file') }),
  z.strictObject({ type: z.literal('api-type'), name: z.string() }),
  z.strictObject({ type: z.literal('array'), of: valueTypeSchema }),
  z.strictObject({ type: z.literal('union'), types: z.array(valueTypeSchema) }),
]))

const WHITESPACE = /\s+/
const PASCAL_CASE = /^[A-Z][a-zA-Z\d]+$/

/**
 * Casts a validated {@link RawValueType} to a {@link ValueType}.
 *
 * `api-type` names are checked against the upstream snapshot by the `check`
 * stage, and by `tsc` once the generated modules are compiled.
 */
export function asValueType(raw: RawValueType): ValueType {
  return raw as ValueType
}

/**
 * Parses the contents of a "Type" table cell, e.g. `Array of MessageEntity`.
 *
 * Returns `null` when the text does not follow any known shape. Such cases
 * must be resolved by an override, and are reported by the `check` stage.
 */
export function parseRawType(text: string): RawValueType | null {
  return parseParts(text.trim().split(WHITESPACE).filter(Boolean))
}

function parseParts(parts: Array<string>): RawValueType | null {
  if (parts[0] === 'Array' && parts[1] === 'of') {
    const of = parseParts(parts.slice(2))
    return of && { type: 'array', of }
  }
  if (
    parts.length >= 3
    && parts.every((val, i) => ((i % 2 === 1 && val === 'or') || i % 2 === 0))
  ) {
    const types: Array<RawValueType> = []
    for (const part of parts.filter((_, i) => i % 2 === 0)) {
      const type = parseParts([part])
      if (type == null)
        return null
      types.push(type)
    }
    return { type: 'union', types }
  }
  if (parts.length === 1) {
    const part = parts[0]!
    switch (part) {
      case 'Boolean': return { type: 'bool' }
      case 'True': return { type: 'bool', literal: true }
      case 'String': return { type: 'str' }
      case 'Integer': return { type: 'int32' }
      case 'Float': return { type: 'float' }
      case 'InputFile': return { type: 'input-file' }
      default:
        return PASCAL_CASE.test(part) ? { type: 'api-type', name: part } : null
    }
  }
  return null
}
