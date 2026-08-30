/**
 * Parsing of the Bot API documentation page into an upstream snapshot.
 *
 * Nothing here applies overrides or interprets prose: the result is a verbatim
 * transcription of the documented sections and tables.
 *
 * @module
 */

import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'
import type { Snapshot, UpstreamMember, UpstreamMethod, UpstreamType } from './snapshot.ts'
import * as assert from 'node:assert'
import { load } from 'cheerio'
import Turndown from 'turndown'

const turndown = new Turndown({
  headingStyle: 'atx',
  hr: '- - -',
  br: '\n',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  fence: '```',
  emDelimiter: '_',
  strongDelimiter: '**',
  linkStyle: 'inlined',
})

interface RawDefinition {
  kind: 'method' | 'type'
  name: string
  table: Element | null
  rest: Array<Element>
}

const PASCAL_CASE = /^[A-Z][a-zA-Z\d]+$/
const CAMEL_CASE = /^[a-z][a-zA-Z]+$/
const SNAKE_CASE = /^[a-z][a-z_\d]+$/
const NON_ALPHANUMERIC = /[^a-z0-9\s]/g
const WHITESPACE = /\s+/g
const OPTIONAL = /optional/i

function isPascalCase(name: string): boolean {
  return PASCAL_CASE.test(name)
}

function isCamelCase(name: string): boolean {
  return CAMEL_CASE.test(name)
}

function isSnakeCase(name: string): boolean {
  return SNAKE_CASE.test(name)
}

function toMarkdown($: CheerioAPI, $match: Cheerio<Element>): string {
  return turndown.turndown($.html($match)).trim()
}

function one<T>($el: Cheerio<T>): T {
  const els = $el.get()
  assert.ok(els.length === 1)
  return els[0]!
}

export async function fetchBotApi(url: string): Promise<CheerioAPI> {
  const response = await fetch(url)
  const docs = await response.text()
  return loadBotApi(docs, url)
}

export function loadBotApi(html: string, url: string): CheerioAPI {
  const $ = load(html)
  // Resolve relative URLs to absolute
  $('a').attr('href', (_, val) => new URL(val, url).href)
  return $
}

/**
 * Parses a loaded documentation page into a snapshot.
 *
 * `version` is carried over from the previous snapshot rather than parsed:
 * see {@link UpstreamMeta.version}.
 */
export function parseSnapshot($: CheerioAPI, url: string, version: string): Snapshot {
  const definitions = parseDefinitions($)
  const methods: Array<UpstreamMethod> = []
  const types: Array<UpstreamType> = []

  for (const { kind, name, table, rest } of definitions) {
    const description = toMarkdown($, $(rest))
    if (kind === 'method') {
      methods.push({
        name,
        description,
        parameters: table ? membersFromTable($, $(table), 'method', name) : null,
      })
    }
    else {
      types.push({
        name,
        description,
        fields: table ? membersFromTable($, $(table), 'type', name) : null,
      })
    }
  }

  return {
    meta: {
      version,
      url,
      methods: methods.map(({ name }) => name),
      types: types.map(({ name }) => name),
    },
    methods,
    types,
  }
}

function parseDefinitions($: CheerioAPI): Array<RawDefinition> {
  const anchors = $('h4 > a.anchor')
  assert.ok(anchors.length === $('h4').length, `(# of 'h4 > a.anchor') != (# of 'h4')`)
  const definitions: Array<RawDefinition> = []
  let inputFileCount = 0
  for (const anchor of anchors.toArray()) {
    const $heading = $(anchor).parent()
    const name = $heading.text()
    const nameAttr = anchor.attributes.find(({ name }) => name === 'name')?.value
    assert.ok(nameAttr, 'heading w/o name attribute')
    let kind: RawDefinition['kind']
    // InputFile has a section, but is not a type: it is a value type of its own.
    if (name === 'InputFile') {
      inputFileCount++
      continue
    }
    if (isPascalCase(name)) {
      kind = 'type'
    }
    else if (isCamelCase(name)) {
      kind = 'method'
    }
    else {
      continue
    }
    assert.ok(nameAttr === name.toLowerCase(), 'nameAttr != lower(name)')
    const { table, rest } = sectionElements($heading)
    definitions.push({ kind, name, table, rest })
  }
  assert.ok(inputFileCount === 1, `expected 1 definition of InputFile, got ${inputFileCount}`)
  return definitions
}

function sectionElements($h4: Cheerio<Element>): {
  table: Element | null
  rest: Array<Element>
} {
  assert.ok(one($h4).tagName === 'h4')
  const rest: Array<Element> = []
  let table = null
  let end = false
  for (let $el = $h4.next(); !end; $el = $el.next()) {
    const el = one($el)
    switch (el.tagName) {
      case 'table':
        assert.ok(table == null)
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

/**
 * Reads a fields table (3 columns) or a parameters table (4 columns).
 *
 * Fields carry their optionality in an "_Optional._" description prefix, which
 * is stripped here; parameters carry it in a dedicated column.
 */
function membersFromTable(
  $: CheerioAPI,
  $table: Cheerio<Element>,
  kind: 'method' | 'type',
  owner: string,
): Array<UpstreamMember> {
  assert.ok(one($table).tagName === 'table')
  const $th = $table.find('thead > tr > th')
  const columns = kind === 'method'
    ? ['Parameter', 'Type', 'Required', 'Description']
    : ['Field', 'Type', 'Description']
  assert.ok(
    $th.length === columns.length,
    `${owner}: expected ${columns.length} head cells, got ${$th.length}`,
  )
  columns.forEach((column, i) => {
    assert.ok($th.eq(i).text() === column, `${owner}: expected column ${i} to be "${column}"`)
  })

  return $table
    .find('tbody > tr')
    .toArray()
    .map((el) => {
      const $td = $(el).children('td')
      assert.ok($td.length === columns.length)
      const name = $td.eq(0).text()
      assert.ok(isSnakeCase(name), `expected name to be in snake_case, got ${name}`)
      const rawType = $td.eq(1).text()

      if (kind === 'method') {
        const required = (() => {
          switch ($td.eq(2).text().trim()) {
            case 'Yes': return true
            case 'Optional': return false
          }
          throw new Error(`cannot parse "Required": ${$td.eq(2).text()}`)
        })()
        return { name, rawType, required, description: toMarkdown($, $td.eq(3)) }
      }

      let description = toMarkdown($, $td.eq(2))
      let required = true
      for (const prefix of ['_Optional._', '_Optional_.']) {
        if (description.startsWith(prefix)) {
          description = description.slice(prefix.length).trim()
          required = false
          break
        }
      }
      const plain = description
        .toLowerCase()
        .replace(NON_ALPHANUMERIC, '')
        .replace(WHITESPACE, ' ')
        .trim()
      assert.ok(!OPTIONAL.test(plain), `optional in description: ${description}`)
      return { name, rawType, required, description }
    })
}
