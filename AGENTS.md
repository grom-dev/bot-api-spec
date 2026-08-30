# AGENTS.md

Telegram Bot API specification, published as JavaScript objects. The spec is
generated from the official documentation page; the generated modules are
committed.

## Layout

```
src/format.ts        Hand-written. The format the spec is expressed in.
src/types.gen.ts     Generated. Do not edit.
src/methods.gen.ts   Generated. Do not edit.

spec/upstream/       Verbatim snapshot of the documentation. Do not edit.
  meta.json            Bot API version, source URL, entity order.
  methods/<name>.json  One file per documented method.
  types/<Name>.json    One file per documented type.

spec/overrides/      Hand-written corrections. The only editable spec surface.
  methods/<name>.json
  types/<Name>.json

scripts/generate/    The generator: fetch -> check -> build.
```

## Invariants

- **`src/*.gen.ts` is never edited by hand.** It is a pure function of
  `spec/`, and CI enforces that by regenerating it and failing on any diff.
- **`spec/upstream/` is never edited by hand.** It is written by `gen:fetch`.
  Reviewing its diff is how upstream changes are reviewed — editing it would
  destroy the only record of what Telegram actually changed.
- **Overrides never invent facts.** They correct phrasing and narrow types the
  documentation states in prose. If the documentation does not support an
  override, it does not belong in `spec/overrides/`.
- An override file exists only if it overrides something. There are no empty
  files and no placeholder entries.

## Commands

| Command          | Effect                                                    |
| ---------------- | --------------------------------------------------------- |
| `pnpm gen:fetch` | Refresh `spec/upstream/` from the documentation. Network. |
| `pnpm gen:check` | Report what needs a decision. Exits non-zero on blockers. |
| `pnpm gen:build` | `spec/` → `src/*.gen.ts`, formatted. No network.          |
| `pnpm gen`       | All three, in order.                                      |
| `pnpm gen:diff`  | Word-level diff of the upstream snapshot.                 |
| `pnpm typecheck` | `tsc --build --noEmit`.                                   |
| `pnpm lint`      | ESLint.                                                   |

To update the spec to a new Bot API release, use the `update-bot-api` skill.

## Override format

Every override file is JSON, validated against a strict schema — unknown keys
are an error. Types are written as literal `ValueType` values, exactly as
defined in `src/format.ts`.

Method (`spec/overrides/methods/sendMessage.json`):

```json
{
  "description": "Replaces the documented description (Markdown).",
  "returnType": { "type": "api-type", "name": "Message" },
  "parameters": {
    "parse_mode": { "type": { "type": "str", "literal": "HTML" } },
    "entities": { "description": "Replaces the documented description." }
  }
}
```

`returnType` is required for every method: the documentation states it in prose,
which the generator does not parse.

Type (`spec/overrides/types/Chat.json`):

```json
{
  "description": "Replaces the documented description (Markdown).",
  "fields": {
    "id": { "type": { "type": "int53" } }
  }
}
```

A type documented without a fields table must declare which kind it is:

```json
{ "oneOf": [{ "type": "api-type", "name": "BotCommandScopeDefault" }] }
```

```json
{ "emptyObject": true }
```

Members are ordered as they are documented.
