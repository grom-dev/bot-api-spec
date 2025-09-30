[Telegram Bot API](https://core.telegram.org/bots/api) specification as a collection of JavaScript objects in a [custom format](#format).

## Motivation

Automatically generate tools, libraries, MCP servers, custom documentations, etc.

## Usage

```ts
import { types, methods } from '@grom.js/bot-api-spec'

console.log(types)   // { Update: <definition of Update>, ... }
console.log(methods) // { getUpdates: <definition of getUpdates>, ... }
```

## Format

See [./src/types.ts](./src/types.ts)

### Value Types

We define custom value types to represent types of the fields and parameters, to allow generating more flexible and user-friendly code.

Below are the rules how we map type of a field/parameter to the `ValueType`:

- _Type_ is _String_ — `{ type: 'str' }`
- _Type_ is _Integer_ — `{ type: 'int32' }`
- _Type_ is _Integer_ and _Description_ says "...may have more than 32 significant bits...but it has at most 52 significant bits..." — `{ type: 'int52' }`
- _Type_ is _Boolean_ — `{ type: 'bool' }`
- _Type_ is _True_ — `{ type: 'bool', literal: true }`
- _Type_ is _Float_ — `{ type: 'float' }`
- _Type_ is _InputFile_ — `{ type: 'input-file' }`
- _Type_ is _X_, where X is any API type — `{ type: 'api-type', name: X }`
- _Type_ is _Array of X_ — `{ type: 'array', of: X }`
- _Type_ is _X or Y or ..._ — `{ type: 'union', types: [X, Y, ...] }`

### Descriptions

Objects also include descriptions of the API types, methods, fields, and parameters, with the following remarks:

- Description is an object with a single `markdown` property, a string containing the description in Markdown format with formatting (**bold**, _italic_, etc.) and links preserved.
- "_Optional._" prefix in field descriptions is omitted; instead, the `required` property is set to `false` for such fields.
- "JSON-serialized..." in field/parameter descriptions is omitted; instead, the `jsonSerialized` property is set to `true` for such fields/parameters.
- "...may have more than 32 significant bits...but it has at most 52 significant bits..." in _Integer_ field/parameter descriptions is omitted; instead, `type` is set to `int52` for such fields/parameters.
