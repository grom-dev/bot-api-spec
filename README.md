[![bot-api](https://img.shields.io/badge/v9.4-000?style=flat&logo=telegram&logoColor=%2325A3E1&label=Bot%20API&labelColor=%23000&color=%2325A3E1)][bot-api]
[![npm](https://img.shields.io/npm/v/%40grom.js%2Fbot-api-spec?style=flat&logo=npm&logoColor=%23BB443E&logoSize=auto&label=%C2%A0&labelColor=%23fff&color=%23BB443E)](https://www.npmjs.com/package/@grom.js/bot-api-spec)
[![jsr](https://img.shields.io/jsr/v/%40grom/bot-api-spec?style=flat&logo=jsr&logoColor=%231B3646&logoSize=auto&label=%C2%A0&labelColor=%23F3E051&color=%231B3646)](https://jsr.io/@grom/bot-api-spec)

[Telegram Bot API][bot-api] specification as a collection of JavaScript objects in a [custom format](#format).

## Motivation

Automatically generate tools, libraries, MCP servers, custom documentations, etc.

## Installation

```sh
# Using npm
npm install @grom.js/bot-api-spec

# Using JSR
deno add jsr:@grom/bot-api-spec
```

## Usage

Root module exports two objects: `types` and `methods`, containing definitions of all Bot API types and methods respectively.

```ts
import { types, methods } from '@grom.js/bot-api-spec' // '@grom/bot-api-spec' for JSR

console.log(types)
// {
//   Update: {
//     name: 'Update',
//     description: { markdown: '...' },
//     fields: [
//       {
//         name: 'update_id',
//         type: { type: 'int32' },
//         description: { markdown: '...' },
//         required: true,
//       },
//       ...
//     ],
//   },
//   ...
// }

console.log(methods)
// {
//   getUpdates: {
//     name: 'getUpdates',
//     description: { markdown: '...' },
//     parameters: [
//       {
//        name: 'offset',
//        type: { type: 'int32' },
//        description: { markdown: '...' },
//        required: false,
//      },
//      ...
//     ],
//     returnType: {
//       type: 'array',
//       of: {
//         type: 'api-type',
//         name: 'Update',
//       },
//     },
//   },
//   ...
// }
```

## Format

Refer to the [./src/format.ts](./src/format.ts) module for reference.

You can also import types in your code:

```ts
import type { ValueType } from '@grom.js/bot-api-spec/format' // '@grom/bot-api-spec/format' for JSR

function generateCode(valueType: ValueType): string {
  if (valueType.type === 'str') {
    return 'string'
  }
  // ...
}
```

### Value Types

We define custom value types to represent types of the fields and parameters, to allow generating more flexible and user-friendly code.

Below are the rules how we map type of a field/parameter to the `ValueType`:

- _Type_ is _String_ — `{ type: 'str' }`
- _Type_ is _Integer_ — `{ type: 'int32' }`
- _Type_ is _Integer_ and _Description_ says "...may have more than 32 significant bits...but it has at most 52 significant bits..." — `{ type: 'int53' }`
- _Type_ is _Boolean_ — `{ type: 'bool' }`
- _Type_ is _True_ — `{ type: 'bool', literal: true }`
- _Type_ is _Float_ — `{ type: 'float' }`
- _Type_ is _InputFile_ — `{ type: 'input-file' }`
- _Type_ is _X_, where X is any API type — `{ type: 'api-type', name: X }`
- _Type_ is _Array of X_ — `{ type: 'array', of: X }`
- _Type_ is _X or Y or ..._ — `{ type: 'union', types: [X, Y, ...] }`

### Descriptions

All definitions of types, methods, fields, and parameters include their descriptions.

Descriptions are copied verbatim from the official [Bot API documentation][bot-api], with the following modifications:

- Description HTML is parsed and converted to Markdown.
- The "_Optional._" prefix is omitted from field descriptions. Instead, the `required` property is set to `false` for such fields.
- "JSON-serialized..." portions are omitted from field/parameter descriptions.
- "...may have more than 32 significant bits...but it has at most 52 significant bits..." portions are omitted from _Integer_ field/parameter descriptions. Instead, the `type` is set to `int53` for such fields/parameters (as per [TDLib](https://core.telegram.org/tdlib/docs/td__api_8h.html#a6f57ab89c6371535f0fb7fec2d770126)).

[bot-api]: https://core.telegram.org/bots/api
