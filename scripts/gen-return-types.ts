import type { ValueType, ValueTypeApiType } from '../src/format.ts'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import * as process from 'node:process'
import * as url from 'node:url'
import { z } from 'zod'
import { methods } from '../src/index.ts'
import { UNKOWN_VALUE_TYPE } from './gen.ts'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  const methodList = Object.values(methods)
  const llm = new Llm(env('OPENAI_API_KEY'), env('OPENAI_MODEL'))
  console.log(`Generating return types for ${methodList.length} methods...`)
  const returnTypes = {} as Record<string, Record<string, ValueType>>
  for (const { name, description, returnType } of methodList) {
    if (!isUnknownValueType(returnType)) {
      console.log(`${name}:\tAlready has return type defined. Skipping.`)
      returnTypes[name] = { [description.markdown]: returnType }
      continue
    }
    try {
      const generated = await llm.askForType(description.markdown)
      returnTypes[name] = { [description.markdown]: generated }
      console.log(`${name}:\tGenerated type: ${JSON.stringify(generated)}.`)
    }
    catch (err) {
      console.error(`${name}:\tFailed to generate type.`, err)
      returnTypes[name] = { [description.markdown]: UNKOWN_VALUE_TYPE }
    }
  }
  const code = [
    'import type { ValueType } from "../../src/format.ts"',
    'import type { methods } from "../../src/index.ts"',
    '',
    'export const returnTypes: {',
    '  [TMethodName in keyof typeof methods]: {',
    '    [TDescription in string]?: ValueType',
    '  }',
    `} = ${JSON.stringify(returnTypes, null, 2)}`,
  ].join('\n')
  await fs.writeFile(path.join(__dirname, './data/return-types.gen.ts'), code, 'utf-8')
}

function isUnknownValueType(value: ValueType) {
  return JSON.stringify(value) === JSON.stringify(UNKOWN_VALUE_TYPE)
}

const ZValueType: z.ZodType<ValueType> = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('str'),
    literal: z.string().optional(),
  }),
  z.object({
    type: z.literal('bool'),
    literal: z.boolean().optional(),
  }),
  z.object({
    type: z.literal('int32'),
    literal: z.number().optional(),
  }),
  z.object({
    type: z.literal('int53'),
  }),
  z.object({
    type: z.literal('float'),
  }),
  z.object({
    type: z.literal('input-file'),
  }),
  z.object({
    type: z.literal('api-type'),
    name: z.custom<ValueTypeApiType['name']>(),
  }),
  z.object({
    type: z.literal('array'),
    of: z.lazy(() => ZValueType),
  }),
  z.object({
    type: z.literal('union'),
    types: z.array(z.lazy(() => ZValueType)),
  }),
])

const INSTRUCTIONS = `
You help to parse API specification from natural language to a machine-readable specification.
You will be given a description of an API method, and you must answer with the return value type.

Here are the TypeScript definition of the ValueType:

\`\`\`
type ValueType = /* union of the types below */
interface TString { type: 'str', literal?: string }
interface TBoolean { type: 'bool', literal?: boolean }
interface TInteger { type: 'int32', literal?: number }
interface TFloat { type: 'float' }
interface TInputFile { type: 'input-file' }
interface TApiType { type: 'api-type', name: string }
interface TArray { type: 'array', of: ValueType }
interface TUnion { type: 'union', types: Array<ValueType> }
\`\`\`

Value type can be on of the following:
- String (maybe a literal)
- Boolean (maybe a literal)
- Integer (maybe a literal)
- Float
- InputFile, if link to the "InputFile" type is provided
- API Type, if link to any other type in PascalCase is provided
- Array of value types
- Union of value types

Set precise type when possible, i.e. if description says "returns True" — set {"type":"bool",literal:true}, not just {"type":"bool"}.

Your answer will provided directly to "JSON.parse" function.
ANSWER ONLY WITH A VALID JSON for value of type ValueType.
Like this: {"type":"str"}
`.trim()

class Llm {
  apiKey: string
  model: string

  constructor(
    apiKey: string,
    model: string,
  ) {
    this.apiKey = apiKey
    this.model = model
  }

  async askForType(description: string): Promise<ValueType> {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.model,
        n: 1,
        temperature: 0.2,
        messages: [
          { role: 'system', content: INSTRUCTIONS },
          { role: 'user', content: description },
        ],
      }),
    }).then(r => r.json()) as any
    return ZValueType.parse(JSON.parse(response.choices[0].message.content))
  }
}

function env(name: string): string {
  const val = process.env[name]
  if (!val) {
    throw new Error(`"${name}" env is not set`)
  }
  return val
}

if (import.meta.main) {
  await main()
}
