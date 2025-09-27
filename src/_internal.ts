import type { typesMap } from './bot-api'
import type {
  ApiMethod,
  ApiType,
  Description,
  ValueType,
  ValueTypeApiType,
  ValueTypeArray,
  ValueTypeBoolean,
  ValueTypeFloat,
  ValueTypeInputFile,
  ValueTypeInteger32,
  ValueTypeInteger52,
  ValueTypeString,
  ValueTypeUnion,
  ValueTypeUnixTimestamp,
} from './types'

export function defineMethod(definition: ApiMethod): ApiMethod {
  return definition
}

export function defineType(definition: ApiType): ApiType {
  return definition
}

export function $descriptionMd(markdown: string): Description {
  return { markdown }
}

export function $str(literal?: string): ValueTypeString {
  return { kind: 'str', literal }
}

export function $bool(literal?: boolean): ValueTypeBoolean {
  return { kind: 'bool', literal }
}

export function $int32(): ValueTypeInteger32 {
  return { kind: 'int32' }
}

export function $int52(): ValueTypeInteger52 {
  return { kind: 'int52' }
}

export function $unixTimestamp(): ValueTypeUnixTimestamp {
  return { kind: 'unix-timestamp' }
}

export function $float(): ValueTypeFloat {
  return { kind: 'float' }
}

export function $inputFile(): ValueTypeInputFile {
  return { kind: 'input-file' }
}

export function $apiType<T extends keyof typeof typesMap>(name: T): ValueTypeApiType {
  return { kind: 'api-type', name }
}

export function $arrayOf(of: ValueType): ValueTypeArray {
  return { kind: 'array', of }
}

export function $unionOf(types: Array<ValueType>): ValueTypeUnion {
  return { kind: 'union', types }
}

// @ts-expect-error It's a todo.
export function $todo(_label?: string): never {}
