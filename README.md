[Telegram Bot API](https://core.telegram.org/bots/api) specification as a collection of JavaScript objects in a custom format.

> ⚠️ Work in progress.

## Motivation

Automatically generate client libraries, MCP servers, custom documentation, etc.

## Usage

```ts
import { BotApiSpec } from '@grom.js/bot-api-spec'

BotApiSpec.methods    // { getUpdates: <definition of getUpdates>, ... }
BotApiSpec.methodList // [ <definition of getUpdates>, ... ]
BotApiSpec.types      // { Update: <definition of Update>, ... }
BotApiSpec.typeList   // [ <definition of Update>, ... }
```

## Format

See [./src/types.ts](./src/types.ts).

### Value Types

We define custom value types to represent types of the fields and parameters, to allow generating more flexible and user-friendly code.

Below are the rules how we map type of a field/parameter to the `ValueType`:

- _Type_ is _String_ — `{ kind: 'str' }`
- _Type_ is _String_ and _Description_ says "always X" — `{ kind: 'str', literal: X }`
- _Type_ is _Boolean_ — `{ kind: 'bool' }`
- _Type_ is _True_ — `{ kind: 'bool', literal: true }`
- _Type_ is _Integer_ — `{ kind: 'int32' }`
- _Type_ is _Integer_ and _Description_ says "always X" — `{ kind: 'int32', literal: X }`
- _Type_ is _Integer_ and _Description_ says "This number may have more than 32 significant bits..." — `{ kind: 'int52' }`
- _Type_ is _Float_ — `{ kind: 'float' }`
- _Type_ is _Integer_ and _Description_ says "Unix time..." — `{ kind: 'unix-timestamp' }`
- _Type_ is _String_ and _Description_ says "Base64-encoded..." — `{ kind: 'base64' }`
- _Type_ is _InputFile_ — `{ kind: 'input-file' }`
- _Type_ is _X_, where X is any API type — `{ kind: 'api-type', name: X }`
- _Type_ is _Array of X_ — `{ kind: 'array', of: X }`
- _Type_ is _X or Y_ — `{ kind: 'union', types: [X, Y] }`

### Descriptions

Specification also includes descriptions of the all API types and their fields, as well as API methods and their parameters, with the following remarks:

1. Description is an object with the single `markdown` property, which is a string that contains the description in the Markdown format, with the formatting (**bold**, _italic_, etc.) and all links preserved.
2. All sentences end with a period.
3. "_Optional._" prefix in the description of a field is omitted. Instead, the `required` property is set to `false` for such fields.
4. "A JSON-serialized" prefix is omitted. Instead, the `jsonSerialized` property is set to `true` for such fields and parameters.
5. "This number may have more than 32 significant bits..." part is omitted. Instead, such fields and parameters of a value type `Integer` have type of kind `int52`.
