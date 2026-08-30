---
name: update-bot-api
description: Update the spec to a new Telegram Bot API release — fetch the docs, work the gen:check queue, regenerate src/*.gen.ts, and verify. Use when a new Bot API version is out, or when asked to refresh, re-fetch, or bump the Bot API spec.
---

# Updating the Bot API spec

Read `AGENTS.md` first — it defines the layout, the invariants, and the
override format. Do not edit `src/*.gen.ts` or `spec/upstream/`.

## Procedure

1. **Branch.** `git switch -c feat/bot-api-<version>` from an up-to-date `main`.
   Stop if the working tree is dirty.

2. **Fetch.** `pnpm gen:fetch`. This rewrites `spec/upstream/` only.

3. **Set the version.** Read the "Recent changes" section of
   <https://core.telegram.org/bots/api> and set `version` in
   `spec/upstream/meta.json` to the newest release listed. The generator does
   not parse it, so nothing else will catch a mistake here.

4. **Survey.** `pnpm gen:check`, then skim `pnpm gen:diff --stat`. The check
   report is your work queue — work it top to bottom. Do not go browsing
   `spec/overrides/`; the report names every file that needs attention.

5. **Resolve blockers.** Generation cannot run until the queue has none. See
   _Blockers_ below.

6. **Resolve reviews.** Each is an entity whose upstream text changed while
   carrying an override. See _Reviews_ below.

7. **Build.** `pnpm gen:build`, then `pnpm typecheck` and `pnpm lint`.
   Re-run `pnpm gen:check` — it should be clean apart from `INFO` lines.

8. **Finish.** Update the Bot API version in the README badge URL. Commit
   `spec/`, `src/`, and the README together, one commit:
   `feat: Bot API <version>`. Report what you decided and anything you were
   unsure about — especially new types whose kind you had to infer.

## Blockers

**`no returnType override`** — a new method. Read its description in
`spec/upstream/methods/<name>.json`; the return type is stated in the last
sentence or two ("On success, the sent Message is returned", "Returns True on
success", "an Array of MessageId ... is returned"). Write the override.
Beware of methods that return one of two things depending on the arguments —
those are a union, e.g. `Message or True`.

**`documented without a fields table`** — a new type that is either a union or
an empty object. Its description says which: a union lists its variants
("Currently, it can be one of ..."), an empty object says it "currently holds
no information". Write `oneOf` (in the order the variants are listed) or
`emptyObject`.

**`cannot parse type`** — the "Type" cell uses prose the parser does not
handle, e.g. `InputMediaAudio, InputMediaDocument and InputMediaVideo`.
Override the member's `type` with the union it describes.

**`overrides <field> which is not documented`** / **`override for a ... no
longer documented`** — the entity or member was renamed or removed. Delete the
override entry, or move it to the new name after confirming in the diff that it
is the same thing.

**`references unknown type`** — an override names a type that no longer exists.
Same treatment.

## Reviews

An upstream entity changed and something overrides it. Run the `git diff
--word-diff` command the report prints, and decide:

- **The change does not affect the override** (a comma, an unrelated clause) —
  nothing to do. There is no hash to bump.
- **The change is inside the text the override replaces** — re-apply the same
  edit on top of the new upstream text, so the override keeps the upstream
  wording plus your correction. Do not drop clauses Telegram added: that is the
  most common way these silently rot.
- **The change invalidates the override** — a narrowed type gained a new
  variant, a union gained a member. Update it.

## What to override in new entities

New methods and types arrive without overrides, and the generator does not read
prose, so applying these conventions is your job. Check each new entity for all
of them.

| Documentation says                                                                       | Override                                                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Type: String`, description "always “x”" or "must be _x_"                                | `{ "type": { "type": "str", "literal": "x" } }`                                                        |
| "must be one of “a”, “b”, “c”"                                                           | a `union` of `str` literals                                                                            |
| `parse_mode` and `*_parse_mode` parameters                                               | a `union` of `"HTML"`, `"MarkdownV2"`, `"Markdown"` literals                                           |
| `Type: Integer`, description mentions "at most 52 significant bits" / "bigger than 2^31" | `{ "type": { "type": "int53" } }`, **and** a `description` override dropping that boilerplate sentence |
| "A JSON-serialized object for ..."                                                       | `description` override: "An object for ..."                                                            |
| "A JSON-serialized list/array of ..."                                                    | `description` override: "An array of ..."                                                              |
| "JSON-serialized" anywhere else in a description                                         | `description` override without it                                                                      |

The last three exist because "JSON-serialized" describes the wire encoding, not
the value: consumers of this spec pass an array, and the transport serializes
it. Keep the rest of the sentence verbatim — override the phrasing, not the
meaning.

If a convention above is genuinely ambiguous for an entity, leave it out and
say so in your report rather than guessing.
