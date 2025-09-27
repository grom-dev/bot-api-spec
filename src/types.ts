/**
 * Type defined in the API. It can either be an {@link ApiTypeObject object}
 * or a {@link ApiTypeOneOf union}.
 */
export type ApiType
  = | ApiTypeObject
    | ApiTypeOneOf

export interface ApiTypeObject {
  /**
   * Name of the type.
   */
  name: string

  /**
   * Description of the type.
   */
  description: Description

  /**
   * Fields of the object representing this type.
   */
  fields: Array<FieldOrParam>
}

export interface ApiTypeOneOf {
  /**
   * Name of the type.
   */
  name: string

  /**
   * Description of the type.
   */
  description: Description

  /**
   * Array of possible types this type can be.
   */
  oneOf: Array<ApiType>
}

export interface ApiMethod {
  /**
   * Name of the method.
   */
  name: string

  /**
   * Description of the method.
   */
  description: Description

  /**
   * Parameters this method takes.
   */
  parameters: Array<FieldOrParam>

  /**
   * Type of the value this method returns.
   */
  returns: ValueType
}

export interface FieldOrParam {
  /**
   * Name of the field/parameter.
   */
  name: string

  /**
   * Type of the value this field/parameter can be assigned.
   */
  type: ValueType

  /**
   * Whether this is a required field/parameter.
   */
  required: boolean

  /**
   * Description of the field/parameter.
   */
  description: Description

  /**
   * Whether this field/parameter should be JSON-serialized.
   */
  jsonSerialized: boolean
}

/**
 * Description of a type/method/field/parameter.
 */
export interface Description {
  markdown: string
}

/**
 * Type of a value.
 */
export type ValueType
  = | ValueTypeString
    | ValueTypeBoolean
    | ValueTypeInteger32
    | ValueTypeInteger52
    | ValueTypeFloat
    | ValueTypeUnixTimestamp
    | ValueTypeBase64
    | ValueTypeInputFile
    | ValueTypeApiType
    | ValueTypeArray
    | ValueTypeUnion

/**
 * `String` value type.
 */
export interface ValueTypeString {
  kind: 'str'
  literal?: string
}

/**
 * `String` value type, with base64 encoded data.
 */
export interface ValueTypeBase64 {
  kind: 'base64'
  literal?: string
}

/**
 * `Boolean` value type.
 */
export interface ValueTypeBoolean {
  kind: 'bool'
  literal?: boolean
}

/**
 * `Integer` value type, which fits in a 32-bit integer.
 */
export interface ValueTypeInteger32 {
  kind: 'int32'
  literal?: number
}

/**
 * `Integer` value type, which may have more than 32 significant bits, but has
 * at most 52 significant bits, so a 64-bit integer or double-precision float
 * type are safe for storing values of this type.
 */
export interface ValueTypeInteger52 {
  kind: 'int52'
}

/**
 * `Integer` value type, which represents the Unix time.
 */
export interface ValueTypeUnixTimestamp {
  kind: 'unix-timestamp'
}

/**
 * `Float` value type.
 */
export interface ValueTypeFloat {
  kind: 'float'
}

/**
 * [`InputFile`](https://core.telegram.org/bots/api#inputfile) value type.
 */
export interface ValueTypeInputFile {
  kind: 'input-file'
}

/**
 * Any {@link ApiType} value type.
 */
export interface ValueTypeApiType {
  kind: 'api-type'
  name: string
}

/**
 * Array of any value type.
 */
export interface ValueTypeArray {
  kind: 'array'
  of: ValueType
}

/**
 * Union of any value types.
 */
export interface ValueTypeUnion {
  kind: 'union'
  types: Array<ValueType>
}
