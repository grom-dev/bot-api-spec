import type { ValueType, ValueTypeApiType } from '../src/index.ts'
import { join } from 'node:path'
import { z } from 'zod'
import { methodList } from '../src/bot-api/index.ts'
import { UNKOWN_VALUE_TYPE } from './gen.ts'

async function main() {
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
    'import type { ValueType } from "../../src"',
    'import type { methods } from "../../src/bot-api"',
    '',
    'export const returnTypes: {',
    '  [TMethodName in keyof typeof methods]: {',
    '    [TDescription in string]?: ValueType',
    '  }',
    `} = ${JSON.stringify(returnTypes, null, 2)}`,
  ].join('\n')
  await Bun.file(join(import.meta.dir, './data/return-types.gen.ts')).write(code)
}

function isUnknownValueType(value: ValueType) {
  return JSON.stringify(value) === JSON.stringify(UNKOWN_VALUE_TYPE)
}

const ZValueType: z.ZodType<ValueType> = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('str'),
    literal: z.string().optional(),
  }),
  z.object({
    kind: z.literal('bool'),
    literal: z.boolean().optional(),
  }),
  z.object({
    kind: z.literal('int32'),
    literal: z.number().optional(),
  }),
  z.object({
    kind: z.literal('int52'),
  }),
  z.object({
    kind: z.literal('float'),
  }),
  z.object({
    kind: z.literal('input-file'),
  }),
  z.object({
    kind: z.literal('api-type'),
    name: z.custom<ValueTypeApiType['name']>(),
  }),
  z.object({
    kind: z.literal('array'),
    of: z.lazy(() => ZValueType),
  }),
  z.object({
    kind: z.literal('union'),
    types: z.array(z.lazy(() => ZValueType)),
  }),
])

const INSTRUCTIONS = `
You help to parse API specification from natural language to a machine-readable specification.
You will be given a description of an API method, and you must answer with the return value type.

Here are the TypeScript definition of the ValueType:

\`\`\`
type ValueType = /* union of the types below */
interface TString { kind: 'str', literal?: string }
interface TBoolean { kind: 'bool', literal?: boolean }
interface TInteger { kind: 'int32', literal?: number }
interface TFloat { kind: 'float' }
interface TInputFile { kind: 'input-file' }
interface TApiType { kind: 'api-type', name: string }
interface TArray { kind: 'array', of: ValueType }
interface TUnion { kind: 'union', types: Array<ValueType> }
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

Set precise type when possible, i.e. if description says "returns True" — set {"kind":"bool",literal:true}, not just {"kind":"bool"}.

Your answer will provided directly to "JSON.parse" function.
ANSWER ONLY WITH A VALID JSON for value of type ValueType.
Like this: {"kind":"str"}
`.trim()

class Llm {
  constructor(
    private apiKey: string,
    private model: string,
  ) {}

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
  const val = Bun.env[name]
  if (!val) {
    throw new Error(`"${name}" env is not set`)
  }
  return val
}

if (import.meta.main) {
  await main()
}
