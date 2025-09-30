import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'
import type {
  ApiMethod,
  ApiType,
  Description,
  FieldOrParam,
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
} from '../src'
import assert from 'node:assert'
import { join } from 'node:path'
import { load } from 'cheerio'
import Turndown from 'turndown'
import { returnTypes } from './data/return-types.gen.ts'

const PASCAL_CASE_REGEX = /^[A-Z][a-zA-Z\d]+$/
const CAMEL_CASE_REGEX = /^[a-z][a-zA-Z]+$/
const SNAKE_CASE_REGEX = /^[a-z][a-z_\d]+$/
export const UNKOWN_VALUE_TYPE = { type: 'unknown' } as unknown as ValueType
const IGNORED_API_TYPES = new Set(['InputFile'])

let $: CheerioAPI
const turndown = new Turndown({
  headingStyle: 'atx',
  hr: '- - -',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  fence: '```',
  emDelimiter: '_',
  strongDelimiter: '**',
  linkStyle: 'inlined',
})

async function main() {
  const { types, methods } = await parseBotApi('https://core.telegram.org/bots/api')
  const typesModule = genTypesModule(types)
  const methodsModule = genMethodsModule(methods)
  await Bun.file(join(import.meta.dir, '../src/bot-api/types.gen.ts')).write(typesModule)
  await Bun.file(join(import.meta.dir, '../src/bot-api/methods.gen.ts')).write(methodsModule)
}

async function parseBotApi(url: string): Promise<{
  types: Array<ApiType>
  methods: Array<ApiMethod>
}> {
  const docs = await fetch(url).then(resp => resp.text())
  $ = load(docs)
  $('a').attr('href', (_, val) => new URL(val, url).href)
  assert($('h4 > a.anchor').length === $('h4').length, `(# of 'h4 > a.anchor') != (# of 'h4')`)
  assert($('h4 > a.anchor').length > 10, `too few <h4>`)
  return $('h4 > a.anchor')
    .toArray()
    .map((anchor) => {
      const $heading = $(anchor).parent()
      const name = $heading.text()
      const nameAttr = anchor.attributes.find(({ name }) => name === 'name')?.value
      assert(nameAttr, 'heading w/o name attribute')
      return { $heading, name, nameAttr }
    })
    .reduce((prev, { $heading, name, nameAttr }) => {
      if (PASCAL_CASE_REGEX.test(name) && !IGNORED_API_TYPES.has(name)) {
        assert(nameAttr === name.toLowerCase(), 'nameAttr != lower(name)')
        prev.types.push(parseApiType(name, $heading))
      }
      else if (CAMEL_CASE_REGEX.test(name)) {
        assert(nameAttr === name.toLowerCase(), 'nameAttr != lower(name)')
        prev.methods.push(parseApiMethod(name, $heading))
      }
      else {
        // skip
      }
      return prev
    }, { types: [], methods: [] } as { types: Array<ApiType>, methods: Array<ApiMethod> })
}

function parseApiType(name: string, $heading: Cheerio<Element>): ApiType {
  const { table, rest } = sectionElements($heading)
  const description: Description = { markdown: toMarkdown($(rest)) }
  if (table) {
    return {
      name,
      description,
      fields: fieldsFromTable($(table)),
    }
  }
  if (isOneOfApiType(name, description)) {
    const $ul = $(rest).filter('ul')
    assert($ul.length === 1)
    const $li = $ul.find('li')
    assert($li.length > 1)
    return {
      name,
      description,
      oneOf: $li
        .toArray()
        .map((el) => {
          const text = $(el).text().trim()
          assert(PASCAL_CASE_REGEX.test(text), `expected one of type name to be in PascalCase, got ${text}`)
          return T_apiType(text)
        }),
    }
  }
  if (isEmptyApiType(name, description)) {
    return {
      name,
      description,
      fields: [],
    }
  }
  throw new Error(`cannot parse API type: ${name}`)
}

function parseApiMethod(name: string, $heading: Cheerio<Element>): ApiMethod {
  const { table, rest } = sectionElements($heading)
  const description: Description = { markdown: toMarkdown($(rest)) }
  const returnTypes_ = returnTypes as Record<string, Record<string, ValueType>>
  const returnType = returnTypes_[name]?.[description.markdown] ?? UNKOWN_VALUE_TYPE
  if (table) {
    return {
      name,
      description,
      parameters: paramsFromTable($(table)),
      returnType,
    }
  }
  if (isMethodWithoutParams(name, description)) {
    return {
      name,
      description,
      parameters: [],
      returnType,
    }
  }
  throw new Error(`cannot parse API method: ${name}`)
}

function sectionElements($h4: Cheerio<Element>): {
  table: Element | null
  rest: Array<Element>
} {
  assert(one($h4).tagName === 'h4')
  const rest: Array<Element> = []
  let table = null
  let end = false
  for (let $el = $h4.next(); !end; $el = $el.next()) {
    const el = one($el)
    switch (el.tagName) {
      case 'table':
        assert(table == null)
        table = el
        break
      case 'p':
      case 'ul':
      case 'div':
      case 'blockquote':
        rest.push(el)
        break
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'hr':
        end = true
        break
      default:
        throw new Error(`cannot handle <${el.tagName}>`)
    }
  }
  return { table, rest }
}

function fieldsFromTable($table: Cheerio<Element>): Array<FieldOrParam> {
  assert(one($table).tagName === 'table')
  const $th = $table.find('thead > tr > th')
  assert($th.length === 3, `expected 3 head cells, got ${$th.length}`)
  assert($th.eq(0).text() === 'Field')
  assert($th.eq(1).text() === 'Type')
  assert($th.eq(2).text() === 'Description')
  return $table
    .find('tbody > tr')
    .toArray()
    .map((el) => {
      const $td = $(el).children('td')
      assert($td.length === 3)
      return fieldFromTableRow($td.eq(0), $td.eq(1), $td.eq(2))
    })
}

function paramsFromTable($table: Cheerio<Element>): Array<FieldOrParam> {
  assert(one($table).tagName === 'table')
  const $th = $table.find('thead > tr > th')
  assert($th.length === 4, `expected 4 head cells, got ${$th.length}`)
  assert($th.eq(0).text() === 'Parameter')
  assert($th.eq(1).text() === 'Type')
  assert($th.eq(2).text() === 'Required')
  assert($th.eq(3).text() === 'Description')
  return $table
    .find('tbody > tr')
    .toArray()
    .map((el) => {
      const $td = $(el).children('td')
      assert($td.length === 4)
      return paramFromTableRow($td.eq(0), $td.eq(1), $td.eq(2), $td.eq(3))
    })
}

function fieldFromTableRow(
  $field: Cheerio<Element>,
  $type: Cheerio<Element>,
  $description: Cheerio<Element>,
): FieldOrParam {
  const name = $field.text()
  assert(SNAKE_CASE_REGEX.test(name), `expected field name to be in snake_case, got ${name}`)
  let type = parseValueType($type.text())
  const {
    description,
    isOptional,
    isJsonSerialized,
    isInt52,
  } = paramOrFieldDescriptionFromTd($description, name, type)
  if (isInt52) {
    assert(type.type === 'int32')
    type = T_int52()
  }
  return {
    name,
    type,
    description,
    required: !isOptional,
    jsonSerialized: isJsonSerialized,
  }
}

function paramFromTableRow(
  $param: Cheerio<Element>,
  $type: Cheerio<Element>,
  $required: Cheerio<Element>,
  $description: Cheerio<Element>,
): FieldOrParam {
  const name = $param.text()
  assert(SNAKE_CASE_REGEX.test(name), `expected param name to be in snake_case, got ${name}`)
  let type = parseValueType($type.text())
  const required = (() => {
    switch ($required.text().trim()) {
      case 'Yes':
        return true
      case 'Optional':
        return false
    }
    throw new Error(`cannot parse "Required": ${$required.text()}`)
  })()
  const {
    description,
    isOptional,
    isJsonSerialized,
    isInt52,
  } = paramOrFieldDescriptionFromTd($description, name, type)
  assert(!isOptional) // params have separate "Required" column and should not have "_Optional._" prefix
  if (isInt52) {
    assert(type.type === 'int32')
    type = T_int52()
  }
  return {
    name,
    type,
    description,
    required,
    jsonSerialized: isJsonSerialized,
  }
}

function parseValueType(text: string): ValueType {
  // EXCEPTION
  if (text === 'Array of InputMediaAudio, InputMediaDocument, InputMediaPhoto and InputMediaVideo') {
    return T_arrayOf(
      T_unionOf([
        T_apiType('InputMediaAudio'),
        T_apiType('InputMediaDocument'),
        T_apiType('InputMediaPhoto'),
        T_apiType('InputMediaVideo'),
      ]),
    )
  }
  return parseValueTypeParts(text.trim().split(/\s+/).filter(Boolean))
}

function parseValueTypeParts(parts: string[]): ValueType {
  if (parts[0] === 'Array' && parts[1] === 'of') {
    return T_arrayOf(parseValueTypeParts(parts.slice(2)))
  }
  if (
    parts.length >= 3
    && parts.every((val, i) => ((i % 2 === 1 && val === 'or') || i % 2 === 0))
  ) {
    const types = parts
      .filter((_, i) => i % 2 === 0)
      .map(val => parseValueTypeParts([val]))
    return T_unionOf(types)
  }
  if (parts.length === 1) {
    const part = parts[0]!
    switch (part) {
      case 'Boolean': return T_bool()
      case 'True': return T_bool(true)
      case 'String': return T_str()
      case 'Integer': return T_int32()
      case 'Float': return T_float()
      case 'InputFile': return T_inputFile()
      default:
        assert(PASCAL_CASE_REGEX.test(part))
        return T_apiType(part)
    }
  }
  throw new Error(`cannot parse value type: "${parts.join(' ')}"`)
}

function isOneOfApiType(name: string, description: Description): boolean {
  if ([
    'MaybeInaccessibleMessage',
    'ChatMember',
    'BotCommandScope',
    'InlineQueryResult',
    'InputMessageContent',
  ].includes(name)) {
    return true
  }
  if (/one of/i.test(description.markdown)) {
    return true
  }
  return false
}

function isEmptyApiType(_name: string, description: Description): boolean {
  return /currently holds no information/i.test(description.markdown)
}

function isMethodWithoutParams(_name: string, description: Description): boolean {
  return /requires no parameters/i.test(description.markdown)
}

function paramOrFieldDescriptionFromTd($td: Cheerio<Element>, name: string, type: ValueType): {
  description: Description
  isOptional: boolean
  isJsonSerialized: boolean
  isInt52: boolean
} {
  assert(one($td).tagName === 'td')
  let markdown = toMarkdown($td)
  let isOptional = false
  let isJsonSerialized = false
  let isInt52 = false

  if (markdown.startsWith('_Optional_.')) {
    isOptional = true
    markdown = markdown.slice('_Optional_.'.length).trim()
  }

  // EXCEPTION
  if (
    name === 'provider_data'
    && (
      markdown.includes('JSON-serialized object for data about the invoice')
      || markdown.includes('JSON-serialized data about the invoice')
    )
  ) {
    assert(type.type === 'str')
  }
  // EXCEPTION
  else if (
    name === 'data'
    && markdown.includes('Base64-encoded encrypted JSON-serialized data')
  ) {
    assert(type.type === 'str')
  }
  else if (/JSON-serialized/i.test(markdown)) {
    if (markdown.includes('A JSON-serialized list')) {
      assert(type.type === 'array')
      markdown = markdown.replace('A JSON-serialized list', 'An array')
      isJsonSerialized = true
    }
    else if (markdown.includes('Price breakdown, a JSON-serialized list')) {
      assert(type.type === 'array')
      markdown = markdown.replace('Price breakdown, a JSON-serialized list', 'Price breakdown, an array')
      isJsonSerialized = true
    }
    else if (markdown.includes('A JSON-serialized array')) {
      assert(type.type === 'array')
      markdown = markdown.replace('A JSON-serialized array', 'An array')
      isJsonSerialized = true
    }
    else if (markdown.includes('A JSON-serialized object')) {
      assert(type.type === 'api-type' || type.type === 'union', `expected object type, got ${type.type}`)
      markdown = markdown.replace('A JSON-serialized object', 'An object')
      isJsonSerialized = true
    }
    assert(!(/JSON-serialized/i.test(markdown)), `JSON-serialized in description: ${markdown}`)
  }

  if (/some programming languages may have difficulty/i.test(markdown)) {
    assert(type.type === 'int32')
    for (const variant of [
      'This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.',
      'This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers.',
      'This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.',
      'This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.',
      'It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.',
    ]) {
      if (markdown.includes(variant)) {
        markdown = markdown.replace(variant, '').trim()
        isInt52 = true
        break
      }
    }
  }
  assert(!(/some programming languages may have difficulty/i.test(markdown)), `some programming languages may have difficulty in description: ${markdown}`)
  assert(!(/64[- ]bit/i.test(markdown)), `64-bit in description: ${markdown}`)

  return {
    description: { markdown },
    isOptional,
    isJsonSerialized,
    isInt52,
  }
}

function T_str(literal?: string): ValueTypeString {
  return { type: 'str', literal }
}

function T_bool(literal?: boolean): ValueTypeBoolean {
  return { type: 'bool', literal }
}

function T_int32(): ValueTypeInteger32 {
  return { type: 'int32' }
}

function T_int52(): ValueTypeInteger52 {
  return { type: 'int52' }
}

function T_float(): ValueTypeFloat {
  return { type: 'float' }
}

function T_inputFile(): ValueTypeInputFile {
  return { type: 'input-file' }
}

function T_apiType(name: string): ValueTypeApiType {
  return { type: 'api-type', name: name as any }
}

function T_arrayOf(of: ValueType): ValueTypeArray {
  return { type: 'array', of }
}

function T_unionOf(types: Array<ValueType>): ValueTypeUnion {
  return { type: 'union', types }
}

function genTypesModule(types: Array<ApiType>): string {
  return [
    '/**',
    ' * This module contains all types specified in the Bot API.',
    ' *',
    ' * @module',
    ' */',
    '',
    'import type { ApiType } from "../types.ts"',
    '',
    '// No-op identity function to fix "circular dependency" type error.',
    '// See: https://github.com/grom-dev/bot-api-spec/pull/7',
    'const t = (apiType: ApiType): ApiType => apiType',
    '',
    ...types.map(type => `const ${type.name} = t(${JSON.stringify(type, null, 2)})\n`),
    '',
    '/**',
    ' * Definition of all Bot API types as an object.',
    ' * Properties are created in the same order as they appear in the docs.',
    ' */',
    'export const types = {',
    ...types.map(({ name }) => `${name},`),
    '}',
  ].join('\n')
}

function genMethodsModule(methods: Array<ApiMethod>): string {
  return [
    '/**',
    ' * This module contains all methods specified in the Bot API.',
    ' *',
    ' * @module',
    ' */',
    '',
    'import type { ApiMethod } from "../types.ts"',
    '',
    ...methods.map(method => `const ${method.name}: ApiMethod = ${JSON.stringify(method, null, 2)}\n`),
    '',
    '/**',
    ' * Definition of all Bot API methods as an object.',
    ' * Properties are created in the same order as they appear in the docs.',
    ' */',
    'export const methods = {',
    ...methods.map(({ name }) => `${name},`),
    '}',
  ].join('\n')
}

function toMarkdown($match: Cheerio<Element>): string {
  return turndown.turndown($.html($match)).trim()
}

function one<T>($el: Cheerio<T>): T {
  const els = $el.get()
  assert(els.length === 1)
  return els[0]!
}

if (import.meta.main) {
  await main()
}
