/**
 * The `build` stage: resolves the upstream snapshot against the overrides and
 * emits `src/types.gen.ts` and `src/methods.gen.ts`.
 *
 * @module
 */

import type { ApiMethod, ApiType, FieldOrParam } from '../../src/format.ts'
import type { Overrides } from './overrides.ts'
import type { Snapshot, UpstreamMember } from './snapshot.ts'
import type { RawValueType } from './value-type.ts'
import { asValueType, parseRawType } from './value-type.ts'

function resolveMember(
  member: UpstreamMember,
  override: { type?: RawValueType, description?: string } | undefined,
): FieldOrParam {
  const type = override?.type ?? parseRawType(member.rawType)
  if (type == null)
    throw new Error(`cannot parse type "${member.rawType}" of "${member.name}"`)
  return {
    name: member.name,
    type: asValueType(type),
    description: { markdown: override?.description ?? member.description },
    required: member.required,
  }
}

export function resolveMethods(snapshot: Snapshot, overrides: Overrides): Array<ApiMethod> {
  return snapshot.methods.map((method) => {
    const override = overrides.methods.get(method.name)
    if (override?.returnType === undefined)
      throw new Error(`no returnType override for method "${method.name}"`)
    return {
      name: method.name,
      description: { markdown: override.description ?? method.description },
      parameters: (method.parameters ?? []).map(
        parameter => resolveMember(parameter, override.parameters?.[parameter.name]),
      ),
      returnType: asValueType(override.returnType),
    }
  })
}

export function resolveTypes(snapshot: Snapshot, overrides: Overrides): Array<ApiType> {
  return snapshot.types.map((type) => {
    const override = overrides.types.get(type.name)
    const description = { markdown: override?.description ?? type.description }
    if (override?.oneOf !== undefined)
      return { name: type.name, description, oneOf: override.oneOf.map(asValueType) }
    return {
      name: type.name,
      description,
      fields: (type.fields ?? []).map(field => resolveMember(field, override?.fields?.[field.name])),
    }
  })
}

export function codegenTypesModule(types: Array<ApiType>): string {
  return [
    '/**',
    ' * This module contains all types specified in the Bot API.',
    ' *',
    ' * @module',
    ' */',
    '',
    'import type { ApiType } from "./format.ts"',
    '',
    '// No-op identity function to fix "circular dependency" type error.',
    '// See: https://github.com/grom-dev/bot-api-spec/pull/7',
    'const t = (apiType: ApiType): ApiType => apiType',
    '',
    ...types.map(type => `const ${type.name} = t(${JSON.stringify(type, null, 2)})\n`),
    '',
    '/**',
    ' * Definition of all Bot API types as an object.',
    ' *',
    ' * Properties are defined in the same order as they appear in the',
    ' * {@link https://core.telegram.org/bots/api Telegram Bot API documentation}.',
    ' */',
    'export const types = {',
    ...types.map(({ name }) => `${name},`),
    '}',
  ].join('\n')
}

export function codegenMethodsModule(methods: Array<ApiMethod>): string {
  return [
    '/**',
    ' * This module contains all methods specified in the Bot API.',
    ' *',
    ' * @module',
    ' */',
    '',
    'import type { ApiMethod } from "./format.ts"',
    '',
    ...methods.map(method => `const ${method.name}: ApiMethod = ${JSON.stringify(method, null, 2)}\n`),
    '',
    '/**',
    ' * Definition of all Bot API methods as an object.',
    ' *',
    ' * Properties are defined in the same order as they appear in the',
    ' * {@link https://core.telegram.org/bots/api Telegram Bot API documentation}.',
    ' */',
    'export const methods = {',
    ...methods.map(({ name }) => `${name},`),
    '}',
  ].join('\n')
}
