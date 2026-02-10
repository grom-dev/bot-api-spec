import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'
import type {
  ApiMethod,
  ApiType,
  FieldOrParam,
  ValueType,
  ValueTypeApiType,
  ValueTypeArray,
  ValueTypeBoolean,
  ValueTypeFloat,
  ValueTypeInputFile,
  ValueTypeInteger32,
  ValueTypeInteger53,
  ValueTypeString,
  ValueTypeUnion,
} from '../src/format.ts'
import * as assert from 'node:assert'
import * as crypto from 'node:crypto'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import process from 'node:process'
import * as url from 'node:url'
import { load } from 'cheerio'
import Turndown from 'turndown'

// =============================================================================
// Configuration
// =============================================================================

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BOT_API_URL = 'https://core.telegram.org/bots/api'
const MODULE_METHODS_PATH = path.join(__dirname, '../src/methods.gen.ts')
const MODULE_TYPES_PATH = path.join(__dirname, '../src/types.gen.ts')

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

// =============================================================================
// Types
// =============================================================================

interface RawDefinition {
  kind: 'method' | 'type'
  name: string
  table: Element | null
  rest: Array<Element>
}

// =============================================================================
// Utilities
// =============================================================================

function isPascalCase(name: string): boolean {
  return /^[A-Z][a-zA-Z\d]+$/.test(name)
}

function isCamelCase(name: string): boolean {
  return /^[a-z][a-zA-Z]+$/.test(name)
}

function isSnakeCase(name: string): boolean {
  return /^[a-z][a-z_\d]+$/.test(name)
}

function toMarkdown($: CheerioAPI, $match: Cheerio<Element>): string {
  return turndown.turndown($.html($match)).trim()
}

function one<T>($el: Cheerio<T>): T {
  const els = $el.get()
  assert.ok(els.length === 1)
  return els[0]!
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

function T_int53(): ValueTypeInteger53 {
  return { type: 'int53' }
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

// =============================================================================
// Overrides
// =============================================================================

interface ParamOverrides {
  hash: string
  type?: ValueType
  description?: { markdown: string }
}

interface FieldOverrides {
  hash: string
  type?: ValueType
  description?: { markdown: string }
}

interface MethodOverrides {
  hash: string
  returnType?: ValueType
  description?: { markdown: string }
  parameters?: Record<string, ParamOverrides>
}

interface TypeOverrides {
  hash: string
  oneOf?: ValueTypeApiType[]
  description?: { markdown: string }
  fields?: Record<string, FieldOverrides>
}

interface OverridesConfig {
  methods: Record<string, MethodOverrides>
  types: Record<string, TypeOverrides>
}

const OVERRIDES: OverridesConfig = {
  methods: {
    getUpdates: {
      hash: '86d14b94',
      returnType: T_arrayOf(T_apiType('Update')),
      parameters: {
        allowed_updates: {
          hash: '87acd892',
          description: { markdown: 'An array of the update types you want your bot to receive. For example, specify `["message", "edited_channel_post", "callback_query"]` to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all update types except _chat\\_member_, _message\\_reaction_, and _message\\_reaction\\_count_ (default). If not specified, the previous setting will be used.\n\nPlease note that this parameter doesn\'t affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.' },
        },
      },
    },
    setWebhook: {
      hash: 'f0d97ba0',
      returnType: T_bool(true),
      parameters: {
        allowed_updates: {
          hash: 'b1a8e97e',
          description: { markdown: 'An array of the update types you want your bot to receive. For example, specify `["message", "edited_channel_post", "callback_query"]` to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all update types except _chat\\_member_, _message\\_reaction_, and _message\\_reaction\\_count_ (default). If not specified, the previous setting will be used.\n\nPlease note that this parameter doesn\'t affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.' },
        },
      },
    },
    deleteWebhook: {
      hash: '46cef515',
      returnType: T_bool(true),
    },
    getWebhookInfo: {
      hash: '674baab0',
      returnType: T_apiType('WebhookInfo'),
    },
    getMe: {
      hash: 'f426df62',
      returnType: T_apiType('User'),
    },
    logOut: {
      hash: '0fbe14a7',
      returnType: T_bool(true),
    },
    close: {
      hash: 'ea2ec567',
      returnType: T_bool(true),
    },
    sendMessage: {
      hash: '7a8c8acc',
      returnType: T_apiType('Message'),
      parameters: {
        entities: {
          hash: 'ea0ec752',
          description: { markdown: 'An array of special entities that appear in message text, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    forwardMessage: {
      hash: 'b9e7e931',
      returnType: T_apiType('Message'),
      parameters: {
        suggested_post_parameters: {
          hash: '62f46edc',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only' },
        },
      },
    },
    forwardMessages: {
      hash: '91bda3f6',
      returnType: T_arrayOf(T_apiType('MessageId')),
      parameters: {
        message_ids: {
          hash: 'f7fba4c4',
          description: { markdown: 'An array of 1-100 identifiers of messages in the chat _from\\_chat\\_id_ to forward. The identifiers must be specified in a strictly increasing order.' },
        },
      },
    },
    copyMessage: {
      hash: 'dd057489',
      returnType: T_apiType('MessageId'),
      parameters: {
        caption_entities: {
          hash: 'c4fbbc13',
          description: { markdown: 'An array of special entities that appear in the new caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    copyMessages: {
      hash: '0719950f',
      returnType: T_arrayOf(T_apiType('MessageId')),
      parameters: {
        message_ids: {
          hash: '37d6c8c2',
          description: { markdown: 'An array of 1-100 identifiers of messages in the chat _from\\_chat\\_id_ to copy. The identifiers must be specified in a strictly increasing order.' },
        },
      },
    },
    sendPhoto: {
      hash: '8f8b7b9c',
      returnType: T_apiType('Message'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendAudio: {
      hash: '6a8f2a96',
      returnType: T_apiType('Message'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendDocument: {
      hash: 'e0c76b6b',
      returnType: T_apiType('Message'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendVideo: {
      hash: '46aa5d07',
      returnType: T_apiType('Message'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendAnimation: {
      hash: 'af3b9916',
      returnType: T_apiType('Message'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendVoice: {
      hash: 'a629dbe4',
      returnType: T_apiType('Message'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendVideoNote: {
      hash: '7ee9d0f7',
      returnType: T_apiType('Message'),
      parameters: {
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendPaidMedia: {
      hash: '231540cd',
      returnType: T_apiType('Message'),
      parameters: {
        media: {
          hash: '0f4232b8',
          description: { markdown: 'An array describing the media to be sent; up to 10 items' },
        },
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendMediaGroup: {
      hash: '7c32a1af',
      returnType: T_arrayOf(T_apiType('Message')),
      parameters: {
        media: {
          hash: '9e0fd41c',
          type: T_arrayOf(
            T_unionOf([
              T_apiType('InputMediaAudio'),
              T_apiType('InputMediaDocument'),
              T_apiType('InputMediaPhoto'),
              T_apiType('InputMediaVideo'),
            ]),
          ),
          description: { markdown: 'An array describing messages to be sent, must include 2-10 items' },
        },
      },
    },
    sendLocation: {
      hash: '608f97a1',
      returnType: T_apiType('Message'),
      parameters: {
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendVenue: {
      hash: '8cacd7e6',
      returnType: T_apiType('Message'),
      parameters: {
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendContact: {
      hash: 'a4b3adc2',
      returnType: T_apiType('Message'),
      parameters: {
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendPoll: {
      hash: '73ae14fc',
      returnType: T_apiType('Message'),
      parameters: {
        question_entities: {
          hash: 'e70fcd3d',
          description: { markdown: 'An array of special entities that appear in the poll question. It can be specified instead of _question\\_parse\\_mode_' },
        },
        options: {
          hash: '4e190952',
          description: { markdown: 'An array of 2-12 answer options' },
        },
        explanation_entities: {
          hash: '8f63fa73',
          description: { markdown: 'An array of special entities that appear in the poll explanation. It can be specified instead of _explanation\\_parse\\_mode_' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendChecklist: {
      hash: '0d7a1b28',
      returnType: T_apiType('Message'),
      parameters: {
        checklist: {
          hash: 'e3a732c1',
          description: { markdown: 'An object for the checklist to send' },
        },
        reply_parameters: {
          hash: '94e2bf31',
          description: { markdown: 'An object for description of the message to reply to' },
        },
        reply_markup: {
          hash: '4c4ef597',
          description: { markdown: 'An object for an inline keyboard' },
        },
      },
    },
    sendDice: {
      hash: '89146b88',
      returnType: T_apiType('Message'),
      parameters: {
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    sendMessageDraft: {
      hash: '6c498693',
      returnType: T_bool(true),
      parameters: {
        entities: {
          hash: 'ea0ec752',
          description: { markdown: 'An array of special entities that appear in message text, which can be specified instead of _parse\\_mode_' },
        },
      },
    },
    sendChatAction: {
      hash: 'cc246789',
      returnType: T_bool(true),
    },
    setMessageReaction: {
      hash: '855ec48d',
      returnType: T_bool(true),
      parameters: {
        reaction: {
          hash: 'd6c4c1c0',
          description: { markdown: 'An array of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can\'t be used by bots.' },
        },
      },
    },
    getUserProfilePhotos: {
      hash: '82c8e31c',
      returnType: T_apiType('UserProfilePhotos'),
    },
    getUserProfileAudios: {
      hash: '05a246e8',
      returnType: T_apiType('UserProfileAudios'),
    },
    setUserEmojiStatus: {
      hash: 'acdcd899',
      returnType: T_bool(true),
    },
    getFile: {
      hash: '660c20a8',
      returnType: T_apiType('File'),
    },
    banChatMember: {
      hash: '859b116e',
      returnType: T_bool(true),
    },
    unbanChatMember: {
      hash: '558c1fe2',
      returnType: T_bool(true),
    },
    restrictChatMember: {
      hash: '88497358',
      returnType: T_bool(true),
      parameters: {
        permissions: {
          hash: '2d35185c',
          description: { markdown: 'An object for new user permissions' },
        },
      },
    },
    promoteChatMember: {
      hash: '021a2d1b',
      returnType: T_bool(true),
    },
    setChatAdministratorCustomTitle: {
      hash: '9cfe82c8',
      returnType: T_bool(true),
    },
    banChatSenderChat: {
      hash: '177eedad',
      returnType: T_bool(true),
    },
    unbanChatSenderChat: {
      hash: 'f5ee22e4',
      returnType: T_bool(true),
    },
    setChatPermissions: {
      hash: '10ab96c4',
      returnType: T_bool(true),
      parameters: {
        permissions: {
          hash: 'ff014452',
          description: { markdown: 'An object for new default chat permissions' },
        },
      },
    },
    exportChatInviteLink: {
      hash: '86163b51',
      returnType: T_str(),
    },
    createChatInviteLink: {
      hash: 'bce61de3',
      returnType: T_apiType('ChatInviteLink'),
    },
    editChatInviteLink: {
      hash: 'ef24f38f',
      returnType: T_apiType('ChatInviteLink'),
    },
    createChatSubscriptionInviteLink: {
      hash: 'da83809d',
      returnType: T_apiType('ChatInviteLink'),
    },
    editChatSubscriptionInviteLink: {
      hash: 'e872365d',
      returnType: T_apiType('ChatInviteLink'),
    },
    revokeChatInviteLink: {
      hash: '596de952',
      returnType: T_apiType('ChatInviteLink'),
    },
    approveChatJoinRequest: {
      hash: '7882875b',
      returnType: T_bool(true),
    },
    declineChatJoinRequest: {
      hash: '67b731ed',
      returnType: T_bool(true),
    },
    setChatPhoto: {
      hash: '88eb3fee',
      returnType: T_bool(true),
    },
    deleteChatPhoto: {
      hash: 'f53a9cf3',
      returnType: T_bool(true),
    },
    setChatTitle: {
      hash: '9e2a1c25',
      returnType: T_bool(true),
    },
    setChatDescription: {
      hash: '21f6918c',
      returnType: T_bool(true),
    },
    pinChatMessage: {
      hash: 'db7ddaf6',
      returnType: T_bool(true),
    },
    unpinChatMessage: {
      hash: '0d1abe69',
      returnType: T_bool(true),
    },
    unpinAllChatMessages: {
      hash: 'fc1ca938',
      returnType: T_bool(true),
    },
    leaveChat: {
      hash: '5f1750b7',
      returnType: T_bool(true),
    },
    getChat: {
      hash: '591a128c',
      returnType: T_apiType('ChatFullInfo'),
    },
    getChatAdministrators: {
      hash: '21a60fcb',
      returnType: T_arrayOf(T_apiType('ChatMember')),
    },
    getChatMemberCount: {
      hash: '0ed6017a',
      returnType: T_int32(),
    },
    getChatMember: {
      hash: 'cfed9730',
      returnType: T_apiType('ChatMember'),
    },
    setChatStickerSet: {
      hash: '1e27cfef',
      returnType: T_bool(true),
    },
    deleteChatStickerSet: {
      hash: '671a6646',
      returnType: T_bool(true),
    },
    getForumTopicIconStickers: {
      hash: 'c20c4671',
      returnType: T_arrayOf(T_apiType('Sticker')),
    },
    createForumTopic: {
      hash: '7cdc466c',
      returnType: T_apiType('ForumTopic'),
    },
    editForumTopic: {
      hash: '9bec2c3f',
      returnType: T_bool(true),
    },
    closeForumTopic: {
      hash: '57d57764',
      returnType: T_bool(true),
    },
    reopenForumTopic: {
      hash: '2efc362d',
      returnType: T_bool(true),
    },
    deleteForumTopic: {
      hash: 'a4982229',
      returnType: T_bool(true),
    },
    unpinAllForumTopicMessages: {
      hash: '72137680',
      returnType: T_bool(true),
    },
    editGeneralForumTopic: {
      hash: 'd886699e',
      returnType: T_bool(true),
    },
    closeGeneralForumTopic: {
      hash: 'dcec4ef9',
      returnType: T_bool(true),
    },
    reopenGeneralForumTopic: {
      hash: '7071ceaa',
      returnType: T_bool(true),
    },
    hideGeneralForumTopic: {
      hash: '96707365',
      returnType: T_bool(true),
    },
    unhideGeneralForumTopic: {
      hash: '29465596',
      returnType: T_bool(true),
    },
    unpinAllGeneralForumTopicMessages: {
      hash: 'dbd07805',
      returnType: T_bool(true),
    },
    answerCallbackQuery: {
      hash: 'af1981be',
      returnType: T_bool(true),
    },
    getUserChatBoosts: {
      hash: '5b18ae52',
      returnType: T_apiType('UserChatBoosts'),
    },
    getBusinessConnection: {
      hash: '29acf5f0',
      returnType: T_apiType('BusinessConnection'),
    },
    setMyCommands: {
      hash: '62c2a7f0',
      returnType: T_bool(true),
      parameters: {
        commands: {
          hash: '0124ce44',
          description: { markdown: 'An array of bot commands to be set as the list of the bot\'s commands. At most 100 commands can be specified.' },
        },
        scope: {
          hash: '195d511b',
          description: { markdown: 'An object, describing scope of users for which the commands are relevant. Defaults to [BotCommandScopeDefault](https://core.telegram.org/bots/api#botcommandscopedefault).' },
        },
      },
    },
    deleteMyCommands: {
      hash: '2d9de023',
      returnType: T_bool(true),
      parameters: {
        scope: {
          hash: '195d511b',
          description: { markdown: 'An object, describing scope of users for which the commands are relevant. Defaults to [BotCommandScopeDefault](https://core.telegram.org/bots/api#botcommandscopedefault).' },
        },
      },
    },
    getMyCommands: {
      hash: '9eefc4a6',
      returnType: T_arrayOf(T_apiType('BotCommand')),
      parameters: {
        scope: {
          hash: 'e5d15084',
          description: { markdown: 'An object, describing scope of users. Defaults to [BotCommandScopeDefault](https://core.telegram.org/bots/api#botcommandscopedefault).' },
        },
      },
    },
    setMyName: {
      hash: 'e358cfb9',
      returnType: T_bool(true),
    },
    getMyName: {
      hash: 'f59edc1f',
      returnType: T_apiType('BotName'),
    },
    setMyDescription: {
      hash: 'eb84131e',
      returnType: T_bool(true),
    },
    getMyDescription: {
      hash: '56c9142b',
      returnType: T_apiType('BotDescription'),
    },
    setMyShortDescription: {
      hash: 'dd7ddbdd',
      returnType: T_bool(true),
    },
    getMyShortDescription: {
      hash: 'e02b8f0b',
      returnType: T_apiType('BotShortDescription'),
    },
    setMyProfilePhoto: {
      hash: 'a4fdc19b',
      returnType: T_bool(true),
    },
    removeMyProfilePhoto: {
      hash: '3f692b0d',
      returnType: T_bool(true),
    },
    setChatMenuButton: {
      hash: '8ecc5b99',
      returnType: T_bool(true),
      parameters: {
        menu_button: {
          hash: '9ddb5441',
          description: { markdown: 'An object for the bot\'s new menu button. Defaults to [MenuButtonDefault](https://core.telegram.org/bots/api#menubuttondefault)' },
        },
      },
    },
    getChatMenuButton: {
      hash: '0c66ba1d',
      returnType: T_apiType('MenuButton'),
    },
    setMyDefaultAdministratorRights: {
      hash: 'b08a7c4f',
      returnType: T_bool(true),
      parameters: {
        rights: {
          hash: 'ad60ae5a',
          description: { markdown: 'An object describing new default administrator rights. If not specified, the default administrator rights will be cleared.' },
        },
      },
    },
    getMyDefaultAdministratorRights: {
      hash: 'ee570639',
      returnType: T_apiType('ChatAdministratorRights'),
    },
    getAvailableGifts: {
      hash: '6863812a',
      returnType: T_apiType('Gifts'),
    },
    sendGift: {
      hash: '8cbca0bd',
      returnType: T_bool(true),
      parameters: {
        text_entities: {
          hash: 'b14ecbfe',
          description: { markdown: 'An array of special entities that appear in the gift text. It can be specified instead of _text\\_parse\\_mode_. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\\_emoji” are ignored.' },
        },
      },
    },
    giftPremiumSubscription: {
      hash: '9fd0fa4d',
      returnType: T_bool(true),
      parameters: {
        text_entities: {
          hash: 'b14ecbfe',
          description: { markdown: 'An array of special entities that appear in the gift text. It can be specified instead of _text\\_parse\\_mode_. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\\_emoji” are ignored.' },
        },
      },
    },
    verifyUser: {
      hash: 'f64895e0',
      returnType: T_bool(true),
    },
    verifyChat: {
      hash: 'fb707ff3',
      returnType: T_bool(true),
    },
    removeUserVerification: {
      hash: 'da0c240b',
      returnType: T_bool(true),
    },
    removeChatVerification: {
      hash: 'f196a3db',
      returnType: T_bool(true),
    },
    readBusinessMessage: {
      hash: '0619fdca',
      returnType: T_bool(true),
    },
    deleteBusinessMessages: {
      hash: 'f92a187f',
      returnType: T_bool(true),
      parameters: {
        message_ids: {
          hash: 'afc00fa0',
          description: { markdown: 'An array of 1-100 identifiers of messages to delete. All messages must be from the same chat. See [deleteMessage](https://core.telegram.org/bots/api#deletemessage) for limitations on which messages can be deleted' },
        },
      },
    },
    setBusinessAccountName: {
      hash: '4b7523d5',
      returnType: T_bool(true),
    },
    setBusinessAccountUsername: {
      hash: 'ff80f3ba',
      returnType: T_bool(true),
    },
    setBusinessAccountBio: {
      hash: '3f3c5047',
      returnType: T_bool(true),
    },
    setBusinessAccountProfilePhoto: {
      hash: 'd86fd9d8',
      returnType: T_bool(true),
    },
    removeBusinessAccountProfilePhoto: {
      hash: 'e23970a4',
      returnType: T_bool(true),
    },
    setBusinessAccountGiftSettings: {
      hash: 'a2a8048c',
      returnType: T_bool(true),
    },
    getBusinessAccountStarBalance: {
      hash: '054af74f',
      returnType: T_apiType('StarAmount'),
    },
    transferBusinessAccountStars: {
      hash: '7c1a94ba',
      returnType: T_bool(true),
    },
    getBusinessAccountGifts: {
      hash: 'bed83db5',
      returnType: T_apiType('OwnedGifts'),
    },
    getUserGifts: {
      hash: '794879c3',
      returnType: T_apiType('OwnedGifts'),
    },
    getChatGifts: {
      hash: 'e39eb970',
      returnType: T_apiType('OwnedGifts'),
    },
    convertGiftToStars: {
      hash: '5841f93b',
      returnType: T_bool(true),
    },
    upgradeGift: {
      hash: 'f9a01916',
      returnType: T_bool(true),
    },
    transferGift: {
      hash: '4f5aedf2',
      returnType: T_bool(true),
    },
    postStory: {
      hash: '4b66d0b7',
      returnType: T_apiType('Story'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        areas: {
          hash: '8a53593e',
          description: { markdown: 'An array of clickable areas to be shown on the story' },
        },
      },
    },
    repostStory: {
      hash: '6b29acde',
      returnType: T_apiType('Story'),
    },
    editStory: {
      hash: '52e53f42',
      returnType: T_apiType('Story'),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        areas: {
          hash: '8a53593e',
          description: { markdown: 'An array of clickable areas to be shown on the story' },
        },
      },
    },
    deleteStory: {
      hash: '20d0cbf4',
      returnType: T_bool(true),
    },
    editMessageText: {
      hash: 'c4d7c1f3',
      returnType: T_unionOf([T_apiType('Message'), T_bool(true)]),
      parameters: {
        entities: {
          hash: 'ea0ec752',
          description: { markdown: 'An array of special entities that appear in message text, which can be specified instead of _parse\\_mode_' },
        },
        reply_markup: {
          hash: '81fd1e69',
          description: { markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).' },
        },
      },
    },
    editMessageCaption: {
      hash: 'af19e298',
      returnType: T_unionOf([T_apiType('Message'), T_bool(true)]),
      parameters: {
        caption_entities: {
          hash: '9b64af4f',
          description: { markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_' },
        },
        reply_markup: {
          hash: '81fd1e69',
          description: { markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).' },
        },
      },
    },
    editMessageMedia: {
      hash: '4a77dd88',
      returnType: T_unionOf([T_apiType('Message'), T_bool(true)]),
      parameters: {
        media: {
          hash: '9711b735',
          description: { markdown: 'An object for a new media content of the message' },
        },
        reply_markup: {
          hash: '69619b96',
          description: { markdown: 'An object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).' },
        },
      },
    },
    editMessageLiveLocation: {
      hash: 'b75e238b',
      returnType: T_unionOf([T_apiType('Message'), T_bool(true)]),
      parameters: {
        reply_markup: {
          hash: '69619b96',
          description: { markdown: 'An object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).' },
        },
      },
    },
    stopMessageLiveLocation: {
      hash: '7d2006b9',
      returnType: T_unionOf([T_apiType('Message'), T_bool(true)]),
      parameters: {
        reply_markup: {
          hash: '69619b96',
          description: { markdown: 'An object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).' },
        },
      },
    },
    editMessageChecklist: {
      hash: '724bd063',
      returnType: T_apiType('Message'),
      parameters: {
        checklist: {
          hash: '360d6f65',
          description: { markdown: 'An object for the new checklist' },
        },
        reply_markup: {
          hash: '267f4d12',
          description: { markdown: 'An object for the new inline keyboard for the message' },
        },
      },
    },
    editMessageReplyMarkup: {
      hash: '958d2fef',
      returnType: T_unionOf([T_apiType('Message'), T_bool(true)]),
      parameters: {
        reply_markup: {
          hash: '81fd1e69',
          description: { markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).' },
        },
      },
    },
    stopPoll: {
      hash: 'ff2a5623',
      returnType: T_apiType('Poll'),
      parameters: {
        reply_markup: {
          hash: 'd9be8bd4',
          description: { markdown: 'An object for a new message [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).' },
        },
      },
    },
    approveSuggestedPost: {
      hash: '178415c1',
      returnType: T_bool(true),
    },
    declineSuggestedPost: {
      hash: '1d5d2cb9',
      returnType: T_bool(true),
    },
    deleteMessage: {
      hash: '1e51248a',
      returnType: T_bool(true),
    },
    deleteMessages: {
      hash: '9a5fb40f',
      returnType: T_bool(true),
      parameters: {
        message_ids: {
          hash: '0cd6d47a',
          description: { markdown: 'An array of 1-100 identifiers of messages to delete. See [deleteMessage](https://core.telegram.org/bots/api#deletemessage) for limitations on which messages can be deleted' },
        },
      },
    },
    sendSticker: {
      hash: '50d36d0d',
      returnType: T_apiType('Message'),
      parameters: {
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: 'c5f0f787',
          description: { markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user' },
        },
      },
    },
    getStickerSet: {
      hash: '29038d9b',
      returnType: T_apiType('StickerSet'),
    },
    getCustomEmojiStickers: {
      hash: '9d5255d2',
      returnType: T_arrayOf(T_apiType('Sticker')),
      parameters: {
        custom_emoji_ids: {
          hash: '3a8bf44b',
          description: { markdown: 'An array of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.' },
        },
      },
    },
    uploadStickerFile: {
      hash: '48222657',
      returnType: T_apiType('File'),
    },
    createNewStickerSet: {
      hash: '2d45b10f',
      returnType: T_bool(true),
      parameters: {
        stickers: {
          hash: '252cbf19',
          description: { markdown: 'An array of 1-50 initial stickers to be added to the sticker set' },
        },
      },
    },
    addStickerToSet: {
      hash: '317252e9',
      returnType: T_bool(true),
      parameters: {
        sticker: {
          hash: '95be64a4',
          description: { markdown: 'An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn\'t changed.' },
        },
      },
    },
    setStickerPositionInSet: {
      hash: 'e0417159',
      returnType: T_bool(true),
    },
    deleteStickerFromSet: {
      hash: 'b6359e7b',
      returnType: T_bool(true),
    },
    replaceStickerInSet: {
      hash: '6abf53e6',
      returnType: T_bool(true),
      parameters: {
        sticker: {
          hash: '9f27e183',
          description: { markdown: 'An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.' },
        },
      },
    },
    setStickerEmojiList: {
      hash: 'd108f2fa',
      returnType: T_bool(true),
      parameters: {
        emoji_list: {
          hash: 'adf8cb48',
          description: { markdown: 'An array of 1-20 emoji associated with the sticker' },
        },
      },
    },
    setStickerKeywords: {
      hash: '3ebb53b4',
      returnType: T_bool(true),
      parameters: {
        keywords: {
          hash: 'dcc81849',
          description: { markdown: 'An array of 0-20 search keywords for the sticker with total length of up to 64 characters' },
        },
      },
    },
    setStickerMaskPosition: {
      hash: 'b2ca5a96',
      returnType: T_bool(true),
      parameters: {
        mask_position: {
          hash: 'e1873b99',
          description: { markdown: 'An object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.' },
        },
      },
    },
    setStickerSetTitle: {
      hash: '09c13de9',
      returnType: T_bool(true),
    },
    setStickerSetThumbnail: {
      hash: '0fac1747',
      returnType: T_bool(true),
    },
    setCustomEmojiStickerSetThumbnail: {
      hash: '05b1dc15',
      returnType: T_bool(true),
    },
    deleteStickerSet: {
      hash: '3b160ae7',
      returnType: T_bool(true),
    },
    answerInlineQuery: {
      hash: '7720383a',
      returnType: T_bool(true),
      parameters: {
        results: {
          hash: '7d6a9e14',
          description: { markdown: 'An array of results for the inline query' },
        },
        button: {
          hash: 'db7d9928',
          description: { markdown: 'An object describing a button to be shown above inline query results' },
        },
      },
    },
    answerWebAppQuery: {
      hash: '4ecc44f4',
      returnType: T_apiType('SentWebAppMessage'),
      parameters: {
        result: {
          hash: 'e90936bb',
          description: { markdown: 'An object describing the message to be sent' },
        },
      },
    },
    savePreparedInlineMessage: {
      hash: 'b2f3b5d8',
      returnType: T_apiType('PreparedInlineMessage'),
      parameters: {
        result: {
          hash: 'e90936bb',
          description: { markdown: 'An object describing the message to be sent' },
        },
      },
    },
    sendInvoice: {
      hash: '5f4d4133',
      returnType: T_apiType('Message'),
      parameters: {
        prices: {
          hash: 'c8f3d569',
          description: { markdown: 'Price breakdown, an array of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).' },
        },
        suggested_tip_amounts: {
          hash: '87805619',
          description: { markdown: 'An array of suggested amounts of tips in the _smallest units_ of the currency (integer, **not** float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed _max\\_tip\\_amount_.' },
        },
        suggested_post_parameters: {
          hash: 'b99d9f3c',
          description: { markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.' },
        },
        reply_markup: {
          hash: '2faa77ed',
          description: { markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards). If empty, one \'Pay `total price`\' button will be shown. If not empty, the first button must be a Pay button.' },
        },
      },
    },
    createInvoiceLink: {
      hash: 'bf6aa9a2',
      returnType: T_str(),
      parameters: {
        prices: {
          hash: 'c8f3d569',
          description: { markdown: 'Price breakdown, an array of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).' },
        },
        suggested_tip_amounts: {
          hash: '87805619',
          description: { markdown: 'An array of suggested amounts of tips in the _smallest units_ of the currency (integer, **not** float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed _max\\_tip\\_amount_.' },
        },
      },
    },
    answerShippingQuery: {
      hash: 'dac3a2e9',
      returnType: T_bool(true),
      parameters: {
        shipping_options: {
          hash: '8c6f53a1',
          description: { markdown: 'Required if _ok_ is _True_. An array of available shipping options.' },
        },
      },
    },
    answerPreCheckoutQuery: {
      hash: 'ff18965b',
      returnType: T_bool(true),
    },
    getMyStarBalance: {
      hash: '04cb6d7b',
      returnType: T_apiType('StarAmount'),
    },
    getStarTransactions: {
      hash: 'd96af66b',
      returnType: T_apiType('StarTransactions'),
    },
    refundStarPayment: {
      hash: '01e2afd3',
      returnType: T_bool(true),
    },
    editUserStarSubscription: {
      hash: '14e8ad93',
      returnType: T_bool(true),
    },
    setPassportDataErrors: {
      hash: '81492d6b',
      returnType: T_bool(true),
      parameters: {
        errors: {
          hash: 'cd984e2d',
          description: { markdown: 'An array describing the errors' },
        },
      },
    },
    sendGame: {
      hash: '598ef408',
      returnType: T_apiType('Message'),
      parameters: {
        reply_markup: {
          hash: '76400b50',
          description: { markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards). If empty, one \'Play game\\_title\' button will be shown. If not empty, the first button must launch the game.' },
        },
      },
    },
    setGameScore: {
      hash: '1905ebc0',
      returnType: T_unionOf([T_apiType('Message'), T_bool(true)]),
    },
    getGameHighScores: {
      hash: '35e5525d',
      returnType: T_arrayOf(T_apiType('GameHighScore')),
    },
  },
  types: {
    MaybeInaccessibleMessage: {
      hash: 'e7844b30',
      oneOf: [
        T_apiType('Message'),
        T_apiType('InaccessibleMessage'),
      ],
    },
    MessageOrigin: {
      hash: '9089f1bd',
      oneOf: [
        T_apiType('MessageOriginUser'),
        T_apiType('MessageOriginHiddenUser'),
        T_apiType('MessageOriginChat'),
        T_apiType('MessageOriginChannel'),
      ],
    },
    PaidMedia: {
      hash: 'd21845c7',
      oneOf: [
        T_apiType('PaidMediaPreview'),
        T_apiType('PaidMediaPhoto'),
        T_apiType('PaidMediaVideo'),
      ],
    },
    BackgroundFill: {
      hash: '07e6d5e1',
      oneOf: [
        T_apiType('BackgroundFillSolid'),
        T_apiType('BackgroundFillGradient'),
        T_apiType('BackgroundFillFreeformGradient'),
      ],
    },
    BackgroundType: {
      hash: 'be87c9c0',
      oneOf: [
        T_apiType('BackgroundTypeFill'),
        T_apiType('BackgroundTypeWallpaper'),
        T_apiType('BackgroundTypePattern'),
        T_apiType('BackgroundTypeChatTheme'),
      ],
    },
    ChatMember: {
      hash: '8a22b00e',
      oneOf: [
        T_apiType('ChatMemberOwner'),
        T_apiType('ChatMemberAdministrator'),
        T_apiType('ChatMemberMember'),
        T_apiType('ChatMemberRestricted'),
        T_apiType('ChatMemberLeft'),
        T_apiType('ChatMemberBanned'),
      ],
    },
    StoryAreaType: {
      hash: 'f8e9963f',
      oneOf: [
        T_apiType('StoryAreaTypeLocation'),
        T_apiType('StoryAreaTypeSuggestedReaction'),
        T_apiType('StoryAreaTypeLink'),
        T_apiType('StoryAreaTypeWeather'),
        T_apiType('StoryAreaTypeUniqueGift'),
      ],
    },
    ReactionType: {
      hash: 'a7b4e16a',
      oneOf: [
        T_apiType('ReactionTypeEmoji'),
        T_apiType('ReactionTypeCustomEmoji'),
        T_apiType('ReactionTypePaid'),
      ],
    },
    OwnedGift: {
      hash: '08ea8a59',
      oneOf: [
        T_apiType('OwnedGiftRegular'),
        T_apiType('OwnedGiftUnique'),
      ],
    },
    BotCommandScope: {
      hash: '9aa83240',
      oneOf: [
        T_apiType('BotCommandScopeDefault'),
        T_apiType('BotCommandScopeAllPrivateChats'),
        T_apiType('BotCommandScopeAllGroupChats'),
        T_apiType('BotCommandScopeAllChatAdministrators'),
        T_apiType('BotCommandScopeChat'),
        T_apiType('BotCommandScopeChatAdministrators'),
        T_apiType('BotCommandScopeChatMember'),
      ],
    },
    MenuButton: {
      hash: '5d985e82',
      oneOf: [
        T_apiType('MenuButtonCommands'),
        T_apiType('MenuButtonWebApp'),
        T_apiType('MenuButtonDefault'),
      ],
    },
    ChatBoostSource: {
      hash: '693403dd',
      oneOf: [
        T_apiType('ChatBoostSourcePremium'),
        T_apiType('ChatBoostSourceGiftCode'),
        T_apiType('ChatBoostSourceGiveaway'),
      ],
    },
    InputMedia: {
      hash: '1fa5533d',
      oneOf: [
        T_apiType('InputMediaAnimation'),
        T_apiType('InputMediaDocument'),
        T_apiType('InputMediaAudio'),
        T_apiType('InputMediaPhoto'),
        T_apiType('InputMediaVideo'),
      ],
    },
    InputPaidMedia: {
      hash: 'f5e33e74',
      oneOf: [
        T_apiType('InputPaidMediaPhoto'),
        T_apiType('InputPaidMediaVideo'),
      ],
    },
    InputProfilePhoto: {
      hash: 'a172c841',
      oneOf: [
        T_apiType('InputProfilePhotoStatic'),
        T_apiType('InputProfilePhotoAnimated'),
      ],
    },
    InputStoryContent: {
      hash: 'e1a70579',
      oneOf: [
        T_apiType('InputStoryContentPhoto'),
        T_apiType('InputStoryContentVideo'),
      ],
    },
    InlineQueryResult: {
      hash: '3b90a61d',
      oneOf: [
        T_apiType('InlineQueryResultCachedAudio'),
        T_apiType('InlineQueryResultCachedDocument'),
        T_apiType('InlineQueryResultCachedGif'),
        T_apiType('InlineQueryResultCachedMpeg4Gif'),
        T_apiType('InlineQueryResultCachedPhoto'),
        T_apiType('InlineQueryResultCachedSticker'),
        T_apiType('InlineQueryResultCachedVideo'),
        T_apiType('InlineQueryResultCachedVoice'),
        T_apiType('InlineQueryResultArticle'),
        T_apiType('InlineQueryResultAudio'),
        T_apiType('InlineQueryResultContact'),
        T_apiType('InlineQueryResultGame'),
        T_apiType('InlineQueryResultDocument'),
        T_apiType('InlineQueryResultGif'),
        T_apiType('InlineQueryResultLocation'),
        T_apiType('InlineQueryResultMpeg4Gif'),
        T_apiType('InlineQueryResultPhoto'),
        T_apiType('InlineQueryResultVenue'),
        T_apiType('InlineQueryResultVideo'),
        T_apiType('InlineQueryResultVoice'),
      ],
    },
    InputMessageContent: {
      hash: '5b4ab747',
      oneOf: [
        T_apiType('InputTextMessageContent'),
        T_apiType('InputLocationMessageContent'),
        T_apiType('InputVenueMessageContent'),
        T_apiType('InputContactMessageContent'),
        T_apiType('InputInvoiceMessageContent'),
      ],
    },
    RevenueWithdrawalState: {
      hash: 'cbed3f5a',
      oneOf: [
        T_apiType('RevenueWithdrawalStatePending'),
        T_apiType('RevenueWithdrawalStateSucceeded'),
        T_apiType('RevenueWithdrawalStateFailed'),
      ],
    },
    TransactionPartner: {
      hash: 'cef43c10',
      oneOf: [
        T_apiType('TransactionPartnerUser'),
        T_apiType('TransactionPartnerChat'),
        T_apiType('TransactionPartnerAffiliateProgram'),
        T_apiType('TransactionPartnerFragment'),
        T_apiType('TransactionPartnerTelegramAds'),
        T_apiType('TransactionPartnerTelegramApi'),
        T_apiType('TransactionPartnerOther'),
      ],
    },
    PassportElementError: {
      hash: '966e812f',
      oneOf: [
        T_apiType('PassportElementErrorDataField'),
        T_apiType('PassportElementErrorFrontSide'),
        T_apiType('PassportElementErrorReverseSide'),
        T_apiType('PassportElementErrorSelfie'),
        T_apiType('PassportElementErrorFile'),
        T_apiType('PassportElementErrorFiles'),
        T_apiType('PassportElementErrorTranslationFile'),
        T_apiType('PassportElementErrorTranslationFiles'),
        T_apiType('PassportElementErrorUnspecified'),
      ],
    },
    User: {
      hash: 'e3b42f1a',
      fields: {
        id: {
          hash: '162c8310',
          type: T_int53(),
          description: { markdown: 'Unique identifier for this user or bot.' },
        },
      },
    },
    Chat: {
      hash: '45f2e5e9',
      fields: {
        id: {
          hash: 'b31c26c8',
          type: T_int53(),
          description: { markdown: 'Unique identifier for this chat.' },
        },
      },
    },
    ChatFullInfo: {
      hash: '3e1f1e5a',
      fields: {
        id: {
          hash: 'b31c26c8',
          type: T_int53(),
          description: { markdown: 'Unique identifier for this chat.' },
        },
        linked_chat_id: {
          hash: 'f5b8aec5',
          type: T_int53(),
          description: { markdown: 'Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats.' },
        },
      },
    },
    Message: {
      hash: 'd7e5e2f1',
      fields: {
        migrate_to_chat_id: {
          hash: '5597aacb',
          type: T_int53(),
          description: { markdown: 'The group has been migrated to a supergroup with the specified identifier.' },
        },
        migrate_from_chat_id: {
          hash: '938d3d18',
          type: T_int53(),
          description: { markdown: 'The supergroup has been migrated from a group with the specified identifier.' },
        },
      },
    },
    ReplyParameters: {
      hash: '8e61f920',
      fields: {
        quote_entities: {
          hash: 'b333aaa9',
          description: { markdown: 'An array of special entities that appear in the quote. It can be specified instead of _quote\\_parse\\_mode_.' },
        },
      },
    },
    Animation: {
      hash: '60b2e4a4',
      fields: {
        file_size: {
          hash: '4ae400fe',
          type: T_int53(),
          description: { markdown: 'File size in bytes.' },
        },
      },
    },
    Audio: {
      hash: '8f7dc968',
      fields: {
        file_size: {
          hash: '4ae400fe',
          type: T_int53(),
          description: { markdown: 'File size in bytes.' },
        },
      },
    },
    Document: {
      hash: 'd94dbdf1',
      fields: {
        file_size: {
          hash: '4ae400fe',
          type: T_int53(),
          description: { markdown: 'File size in bytes.' },
        },
      },
    },
    VideoQuality: {
      hash: 'b033116e',
      fields: {
        file_size: {
          hash: '4ae400fe',
          type: T_int53(),
          description: { markdown: 'File size in bytes.' },
        },
      },
    },
    Video: {
      hash: 'c1361c83',
      fields: {
        file_size: {
          hash: '4ae400fe',
          type: T_int53(),
          description: { markdown: 'File size in bytes.' },
        },
      },
    },
    Voice: {
      hash: '93f8ac93',
      fields: {
        file_size: {
          hash: '4ae400fe',
          type: T_int53(),
          description: { markdown: 'File size in bytes.' },
        },
      },
    },
    Contact: {
      hash: '5dde7d29',
      fields: {
        user_id: {
          hash: '5ae8c23f',
          type: T_int53(),
          description: { markdown: 'Contact\'s user identifier in Telegram.' },
        },
      },
    },
    InputPollOption: {
      hash: '03faac22',
      fields: {
        text_entities: {
          hash: '40bd087f',
          description: { markdown: 'An array of special entities that appear in the poll option text. It can be specified instead of _text\\_parse\\_mode_' },
        },
      },
    },
    SharedUser: {
      hash: '61a8b34a',
      fields: {
        user_id: {
          hash: '6bc21b1d',
          type: T_int53(),
          description: { markdown: 'Identifier of the shared user.  The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.' },
        },
      },
    },
    ChatShared: {
      hash: '1820a3e6',
      fields: {
        chat_id: {
          hash: 'f4597053',
          type: T_int53(),
          description: { markdown: 'Identifier of the shared chat.  The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.' },
        },
      },
    },
    DirectMessagesTopic: {
      hash: '39e6fda4',
      fields: {
        topic_id: {
          hash: 'a9d9f084',
          type: T_int53(),
          description: { markdown: 'Unique identifier of the topic.' },
        },
      },
    },
    File: {
      hash: '72f3b45b',
      fields: {
        file_size: {
          hash: '4ae400fe',
          type: T_int53(),
          description: { markdown: 'File size in bytes.' },
        },
      },
    },
    ReplyKeyboardMarkup: {
      hash: '',
      fields: {
        keyboard: {
          hash: '7e6f80e1',
          type: T_arrayOf(
            T_arrayOf(
              T_unionOf([
                T_str(),
                T_apiType('KeyboardButton'),
              ]),
            ),
          ),
        },
      },
    },
    KeyboardButtonRequestChat: {
      hash: '0f5a2f91',
      fields: {
        user_administrator_rights: {
          hash: 'f062daff',
          description: { markdown: 'An object listing the required administrator rights of the user in the chat. The rights must be a superset of _bot\\_administrator\\_rights_. If not specified, no additional restrictions are applied.' },
        },
        bot_administrator_rights: {
          hash: '35377e91',
          description: { markdown: 'An object listing the required administrator rights of the bot in the chat. The rights must be a subset of _user\\_administrator\\_rights_. If not specified, no additional restrictions are applied.' },
        },
      },
    },
    ChatJoinRequest: {
      hash: '16b4b5a8',
      fields: {
        user_chat_id: {
          hash: '674e5a10',
          type: T_int53(),
          description: { markdown: 'Identifier of a private chat with the user who sent the join request.  The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.' },
        },
      },
    },
    BusinessConnection: {
      hash: '8e6a7a68',
      fields: {
        user_chat_id: {
          hash: 'b320a23e',
          type: T_int53(),
          description: { markdown: 'Identifier of a private chat with the user who created the business connection.' },
        },
      },
    },
    ResponseParameters: {
      hash: '7b4ee51e',
      fields: {
        migrate_to_chat_id: {
          hash: '5597aacb',
          type: T_int53(),
          description: { markdown: 'The group has been migrated to a supergroup with the specified identifier.' },
        },
      },
    },
    InputInvoiceMessageContent: {
      hash: '51eae12e',
      fields: {
        prices: {
          hash: 'c8f3d569',
          description: { markdown: 'Price breakdown, an array of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).' },
        },
        suggested_tip_amounts: {
          hash: 'f78b47ac',
          description: { markdown: 'An array of suggested amounts of tip in the _smallest units_ of the currency (integer, **not** float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed _max\\_tip\\_amount_.' },
        },
      },
    },

  },
}

function computeHash(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex').slice(0, 8)
}

interface ParamOriginal {
  rawType: string
  required: boolean
  descriptionMd: string
}

interface FieldOriginal {
  rawType: string
  required: boolean
  descriptionMd: string
}

class OverrideManager {
  private config: OverridesConfig
  private used = new Set<string>()
  private checkedHashes = new Set<string>()

  constructor(config: OverridesConfig) {
    this.config = config
  }

  methodReturnType(method: string, original: { descriptionMd: string }): ValueType | undefined {
    const entry = this.config.methods[method]
    if (entry?.returnType === undefined)
      return undefined
    this.checkEntityHash(`methods.${method}`, entry.hash, original.descriptionMd)
    this.used.add(`methods.${method}.returnType`)
    return entry.returnType
  }

  methodDescription(method: string, original: { descriptionMd: string }): { markdown: string } | undefined {
    const entry = this.config.methods[method]
    if (entry?.description === undefined)
      return undefined
    this.checkEntityHash(`methods.${method}`, entry.hash, original.descriptionMd)
    this.used.add(`methods.${method}.description`)
    return entry.description
  }

  paramType(method: string, param: string, original: ParamOriginal): ValueType | undefined {
    const entry = this.config.methods[method]?.parameters?.[param]
    if (entry?.type === undefined)
      return undefined
    this.checkSubEntityHash(`methods.${method}.parameters.${param}`, entry.hash, original)
    this.used.add(`methods.${method}.parameters.${param}.type`)
    return entry.type
  }

  paramDescription(method: string, param: string, original: ParamOriginal): { markdown: string } | undefined {
    const entry = this.config.methods[method]?.parameters?.[param]
    if (entry?.description === undefined)
      return undefined
    this.checkSubEntityHash(`methods.${method}.parameters.${param}`, entry.hash, original)
    this.used.add(`methods.${method}.parameters.${param}.description`)
    return entry.description
  }

  typeOneOf(type: string, original: { descriptionMd: string }): ValueTypeApiType[] | undefined {
    const entry = this.config.types[type]
    if (entry?.oneOf === undefined)
      return undefined
    this.checkEntityHash(`types.${type}`, entry.hash, original.descriptionMd)
    this.used.add(`types.${type}.oneOf`)
    return entry.oneOf
  }

  typeDescription(type: string, original: { descriptionMd: string }): { markdown: string } | undefined {
    const entry = this.config.types[type]
    if (entry?.description === undefined)
      return undefined
    this.checkEntityHash(`types.${type}`, entry.hash, original.descriptionMd)
    this.used.add(`types.${type}.description`)
    return entry.description
  }

  fieldType(type: string, field: string, original: FieldOriginal): ValueType | undefined {
    const entry = this.config.types[type]?.fields?.[field]
    if (entry?.type === undefined)
      return undefined
    this.checkSubEntityHash(`types.${type}.fields.${field}`, entry.hash, original)
    this.used.add(`types.${type}.fields.${field}.type`)
    return entry.type
  }

  fieldDescription(type: string, field: string, original: FieldOriginal): { markdown: string } | undefined {
    const entry = this.config.types[type]?.fields?.[field]
    if (entry?.description === undefined)
      return undefined
    this.checkSubEntityHash(`types.${type}.fields.${field}`, entry.hash, original)
    this.used.add(`types.${type}.fields.${field}.description`)
    return entry.description
  }

  reportUnused(): void {
    for (const [method, entry] of Object.entries(this.config.methods)) {
      if (entry.returnType !== undefined && !this.used.has(`methods.${method}.returnType`))
        console.warn(`[override] Unused: methods.${method}.returnType`)
      if (entry.description !== undefined && !this.used.has(`methods.${method}.description`))
        console.warn(`[override] Unused: methods.${method}.description`)
      for (const [param, paramEntry] of Object.entries(entry.parameters ?? {})) {
        if (paramEntry.type !== undefined && !this.used.has(`methods.${method}.parameters.${param}.type`))
          console.warn(`[override] Unused: methods.${method}.parameters.${param}.type`)
        if (paramEntry.description !== undefined && !this.used.has(`methods.${method}.parameters.${param}.description`))
          console.warn(`[override] Unused: methods.${method}.parameters.${param}.description`)
      }
    }
    for (const [type, entry] of Object.entries(this.config.types)) {
      if (entry.oneOf !== undefined && !this.used.has(`types.${type}.oneOf`))
        console.warn(`[override] Unused: types.${type}.oneOf`)
      if (entry.description !== undefined && !this.used.has(`types.${type}.description`))
        console.warn(`[override] Unused: types.${type}.description`)
      for (const [field, fieldEntry] of Object.entries(entry.fields ?? {})) {
        if (fieldEntry.type !== undefined && !this.used.has(`types.${type}.fields.${field}.type`))
          console.warn(`[override] Unused: types.${type}.fields.${field}.type`)
        if (fieldEntry.description !== undefined && !this.used.has(`types.${type}.fields.${field}.description`))
          console.warn(`[override] Unused: types.${type}.fields.${field}.description`)
      }
    }
  }

  private checkEntityHash(path: string, storedHash: string, descriptionMd: string): void {
    if (this.checkedHashes.has(path))
      return
    this.checkedHashes.add(path)
    const currentHash = computeHash(descriptionMd)
    if (storedHash === '') {
      console.warn(`[override] ${path}: hash not set, current is '${currentHash}'`)
    }
    else if (storedHash !== currentHash) {
      console.warn(`[override] ${path}: original data changed (${storedHash} -> ${currentHash}). Review override.`)
    }
  }

  private checkSubEntityHash(path: string, storedHash: string, original: ParamOriginal | FieldOriginal): void {
    if (this.checkedHashes.has(path))
      return
    this.checkedHashes.add(path)
    const currentHash = computeHash(JSON.stringify({
      rawType: original.rawType,
      required: original.required,
      description: original.descriptionMd,
    }))
    if (storedHash === '') {
      console.warn(`[override] ${path}: hash not set, current is '${currentHash}'`)
    }
    else if (storedHash !== currentHash) {
      console.warn(`[override] ${path}: original data changed (${storedHash} -> ${currentHash}). Review override.`)
    }
  }
}

// =============================================================================
// Core
// =============================================================================

async function generate(url: string) {
  const overrides = new OverrideManager(OVERRIDES)

  console.info(`Fetching Bot API from ${url}`)
  const $ = await fetchBotApi(url)

  console.info('Parsing Bot API')
  const definitions = parseBotApi($)
  const rawMethods = definitions.filter(d => d.kind === 'method')
  const rawTypes = definitions.filter(d => d.kind === 'type')

  console.info(`Resolving ${rawMethods.length} methods`)
  const methods = resolveMethods($, rawMethods, overrides)

  console.info(`Resolving ${rawTypes.length} types`)
  const types = resolveTypes($, rawTypes, overrides)

  console.info(`Generating methods to ${path.relative(process.cwd(), MODULE_METHODS_PATH)}`)
  await fs.writeFile(MODULE_METHODS_PATH, codegenMethodsModule(methods), 'utf-8')

  console.info(`Generating types to ${path.relative(process.cwd(), MODULE_TYPES_PATH)}`)
  await fs.writeFile(MODULE_TYPES_PATH, codegenTypesModule(types), 'utf-8')

  overrides.reportUnused()
}

async function fetchBotApi(url: string): Promise<CheerioAPI> {
  const response = await fetch(url)
  const docs = await response.text()
  const $ = load(docs)
  // Resolve relative URLs to absolute
  $('a').attr('href', (_, val) => new URL(val, url).href)
  return $
}

function parseBotApi($: CheerioAPI): Array<RawDefinition> {
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

function resolveMethods(
  $: CheerioAPI,
  rawMethods: Array<RawDefinition>,
  overrides: OverrideManager,
): Array<ApiMethod> {
  const methods: Array<ApiMethod> = []
  for (const { name, table, rest } of rawMethods) {
    const descriptionMd = toMarkdown($, $(rest))
    const returnType = overrides.methodReturnType(name, { descriptionMd })
    if (!returnType) {
      throw new Error(`No return type override found for method ${name}`)
    }
    const description = overrides.methodDescription(name, { descriptionMd }) ?? { markdown: descriptionMd }
    const parameters = table ? paramsFromTable($, $(table), name, overrides) : []
    methods.push({ name, description, parameters, returnType })
  }
  return methods
}

function resolveTypes(
  $: CheerioAPI,
  rawTypes: Array<RawDefinition>,
  overrides: OverrideManager,
): Array<ApiType> {
  const types: Array<ApiType> = []
  for (const { name, table, rest } of rawTypes) {
    const descriptionMd = toMarkdown($, $(rest))
    const description = overrides.typeDescription(name, { descriptionMd }) ?? { markdown: descriptionMd }

    const oneOf = overrides.typeOneOf(name, { descriptionMd })
    if (oneOf) {
      types.push({ name, description, oneOf })
      continue
    }

    const fields = table ? fieldsFromTable($, $(table), name, overrides) : []
    types.push({ name, description, fields })
  }
  return types
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

function fieldsFromTable(
  $: CheerioAPI,
  $table: Cheerio<Element>,
  typeName: string,
  overrides: OverrideManager,
): Array<FieldOrParam> {
  assert.ok(one($table).tagName === 'table')
  const $th = $table.find('thead > tr > th')
  assert.ok($th.length === 3, `expected 3 head cells, got ${$th.length}`)
  assert.ok($th.eq(0).text() === 'Field')
  assert.ok($th.eq(1).text() === 'Type')
  assert.ok($th.eq(2).text() === 'Description')
  return $table
    .find('tbody > tr')
    .toArray()
    .map((el) => {
      const $td = $(el).children('td')
      assert.ok($td.length === 3)
      const [$field, $type, $description] = [$td.eq(0), $td.eq(1), $td.eq(2)]
      const name = $field.text()
      assert.ok(isSnakeCase(name), `expected field name to be in snake_case, got ${name}`)
      const rawType = $type.text()
      const { description, required } = (() => {
        let markdown = toMarkdown($, $description)
        let required = true
        const prefixes = ['_Optional._', '_Optional_.']
        for (const prefix of prefixes) {
          if (markdown.startsWith(prefix)) {
            markdown = markdown.slice(prefix.length).trim()
            required = false
            break
          }
        }
        const plain = markdown
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, ' ')
          .trim()
        assert.ok(!(/optional/i.test(plain)), `optional in description: ${markdown}`)
        return {
          description: { markdown },
          required,
        }
      })()
      const original = { rawType, required, descriptionMd: description.markdown }
      return {
        name,
        type: overrides.fieldType(typeName, name, original) ?? parseValueType(rawType),
        description: overrides.fieldDescription(typeName, name, original) ?? description,
        required,
      }
    })
}

function paramsFromTable(
  $: CheerioAPI,
  $table: Cheerio<Element>,
  methodName: string,
  overrides: OverrideManager,
): Array<FieldOrParam> {
  assert.ok(one($table).tagName === 'table')
  const $th = $table.find('thead > tr > th')
  assert.ok($th.length === 4, `expected 4 head cells, got ${$th.length}`)
  assert.ok($th.eq(0).text() === 'Parameter')
  assert.ok($th.eq(1).text() === 'Type')
  assert.ok($th.eq(2).text() === 'Required')
  assert.ok($th.eq(3).text() === 'Description')
  return $table
    .find('tbody > tr')
    .toArray()
    .map((el) => {
      const $td = $(el).children('td')
      assert.ok($td.length === 4)
      const [$param, $type, $required, $description] = [$td.eq(0), $td.eq(1), $td.eq(2), $td.eq(3)]
      const name = $param.text()
      assert.ok(isSnakeCase(name), `expected param name to be in snake_case, got ${name}`)
      const rawType = $type.text()
      const required = (() => {
        switch ($required.text().trim()) {
          case 'Yes':
            return true
          case 'Optional':
            return false
        }
        throw new Error(`cannot parse "Required": ${$required.text()}`)
      })()
      const description = { markdown: toMarkdown($, $description) }
      const original = { rawType, required, descriptionMd: description.markdown }
      return {
        name,
        type: overrides.paramType(methodName, name, original) ?? parseValueType(rawType),
        description: overrides.paramDescription(methodName, name, original) ?? description,
        required,
      }
    })
}

function parseValueType(text: string): ValueType {
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
        assert.ok(isPascalCase(part))
        return T_apiType(part)
    }
  }
  throw new Error(`cannot parse value type: "${parts.join(' ')}"`)
}

function codegenTypesModule(types: Array<ApiType>): string {
  return [
    '/**',
    ' * This module contains all types specified in the Bot API.',
    ' *',
    ' * @module',
    ' */',
    '',
    'import type { ApiType } from "./format.ts"',
    '',
    '// No-op identity function to fix "circular dependency" type error.',
    '// See: https://github.com/grom-dev/bot-api-spec/pull/7',
    'const t = (apiType: ApiType): ApiType => apiType',
    '',
    ...types.map(type => `const ${type.name} = t(${JSON.stringify(type, null, 2)})\n`),
    '',
    '/**',
    ' * Definition of all Bot API types as an object.',
    ' *',
    ' * Properties are defined in the same order as they appear in the',
    ' * {@link https://core.telegram.org/bots/api Telegram Bot API documentation}.',
    ' */',
    'export const types = {',
    ...types.map(({ name }) => `${name},`),
    '}',
  ].join('\n')
}

function codegenMethodsModule(methods: Array<ApiMethod>): string {
  return [
    '/**',
    ' * This module contains all methods specified in the Bot API.',
    ' *',
    ' * @module',
    ' */',
    '',
    'import type { ApiMethod } from "./format.ts"',
    '',
    ...methods.map(method => `const ${method.name}: ApiMethod = ${JSON.stringify(method, null, 2)}\n`),
    '',
    '/**',
    ' * Definition of all Bot API methods as an object.',
    ' *',
    ' * Properties are defined in the same order as they appear in the',
    ' * {@link https://core.telegram.org/bots/api Telegram Bot API documentation}.',
    ' */',
    'export const methods = {',
    ...methods.map(({ name }) => `${name},`),
    '}',
  ].join('\n')
}

// =============================================================================
// Entry point
// =============================================================================

if (import.meta.main) {
  generate(BOT_API_URL)
    .then(() => console.info('Done.'))
    .catch(e => console.error(e))
}
