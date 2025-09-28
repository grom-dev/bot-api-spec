/**
 * This module contains all methods specified in the Bot API.
 *
 * @module
 */

import type { ApiMethod } from '../types.ts'

const getUpdates: ApiMethod = {
  name: 'getUpdates',
  description: {
    markdown: 'Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). Returns an Array of [Update](https://core.telegram.org/bots/api#update) objects.  \n\n**Notes**  \n**1.** This method will not work if an outgoing webhook is set up.  \n**2.** In order to avoid getting duplicate updates, recalculate _offset_ after each server response.',
  },
  parameters: [
    {
      name: 'offset',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api#getupdates) is called with an _offset_ higher than its _update\\_id_. The negative offset can be specified to retrieve updates starting from _\\-offset_ update from the end of the updates queue. All previous updates will be forgotten.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'limit',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'timeout',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allowed_updates',
      type: {
        kind: 'array',
        of: {
          kind: 'str',
        },
      },
      description: {
        markdown: 'An array of the update types you want your bot to receive. For example, specify `["message", "edited_channel_post", "callback_query"]` to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all update types except _chat\\_member_, _message\\_reaction_, and _message\\_reaction\\_count_ (default). If not specified, the previous setting will be used.  \n  \nPlease note that this parameter doesn\'t affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setWebhook: ApiMethod = {
  name: 'setWebhook',
  description: {
    markdown: 'Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized [Update](https://core.telegram.org/bots/api#update). In case of an unsuccessful request (a request with response [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) different from `2XY`), we will repeat the request and give up after a reasonable amount of attempts. Returns _True_ on success.  \nIf you\'d like to make sure that the webhook was set by you, you can specify secret data in the parameter _secret\\_token_. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.  \n\n**Notes**  \n**1.** You will not be able to receive updates using [getUpdates](https://core.telegram.org/bots/api#getupdates) for as long as an outgoing webhook is set up.  \n**2.** To use a self-signed certificate, you need to upload your [public key certificate](https://core.telegram.org/bots/self-signed) using _certificate_ parameter. Please upload as InputFile, sending a String will not work.  \n**3.** Ports currently supported _for webhooks_: **443, 80, 88, 8443**.\n\nIf you\'re having any trouble setting up webhooks, please check out this [amazing guide to webhooks](https://core.telegram.org/bots/webhooks).',
  },
  parameters: [
    {
      name: 'url',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'HTTPS URL to send updates to. Use an empty string to remove webhook integration',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'certificate',
      type: {
        kind: 'input-file',
      },
      description: {
        markdown: 'Upload your public key certificate so that the root certificate in use can be checked. See our [self-signed guide](https://core.telegram.org/bots/self-signed) for details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'ip_address',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'max_connections',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to _40_. Use lower values to limit the load on your bot\'s server, and higher values to increase your bot\'s throughput.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allowed_updates',
      type: {
        kind: 'array',
        of: {
          kind: 'str',
        },
      },
      description: {
        markdown: 'An array of the update types you want your bot to receive. For example, specify `["message", "edited_channel_post", "callback_query"]` to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all update types except _chat\\_member_, _message\\_reaction_, and _message\\_reaction\\_count_ (default). If not specified, the previous setting will be used.  \nPlease note that this parameter doesn\'t affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'drop_pending_updates',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to drop all pending updates',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'secret_token',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed. The header is useful to ensure that the request comes from a webhook set by you.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteWebhook: ApiMethod = {
  name: 'deleteWebhook',
  description: {
    markdown: 'Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api#getupdates). Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'drop_pending_updates',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to drop all pending updates',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getWebhookInfo: ApiMethod = {
  name: 'getWebhookInfo',
  description: {
    markdown: 'Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api#getupdates), will return an object with the _url_ field empty.',
  },
  parameters: [],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getMe: ApiMethod = {
  name: 'getMe',
  description: {
    markdown: 'A simple method for testing your bot\'s authentication token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api#user) object.',
  },
  parameters: [],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const logOut: ApiMethod = {
  name: 'logOut',
  description: {
    markdown: 'Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns _True_ on success. Requires no parameters.',
  },
  parameters: [],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const close: ApiMethod = {
  name: 'close',
  description: {
    markdown: 'Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn\'t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns _True_ on success. Requires no parameters.',
  },
  parameters: [],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendMessage: ApiMethod = {
  name: 'sendMessage',
  description: {
    markdown: 'Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Text of the message to be sent, 1-4096 characters after entities parsing',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in message text, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'link_preview_options',
      type: {
        kind: 'api-type',
        name: 'LinkPreviewOptions',
      },
      description: {
        markdown: 'Link preview generation options for the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const forwardMessage: ApiMethod = {
  name: 'forwardMessage',
  description: {
    markdown: 'Use this method to forward messages of any kind. Service messages and messages with protected content can\'t be forwarded. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'from_chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'video_start_timestamp',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'New start timestamp for the forwarded video in the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the forwarded message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Message identifier in the chat specified in _from\\_chat\\_id_',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const forwardMessages: ApiMethod = {
  name: 'forwardMessages',
  description: {
    markdown: 'Use this method to forward multiple messages of any kind. If some of the specified messages can\'t be found or forwarded, they are skipped. Service messages and messages with protected content can\'t be forwarded. Album grouping is kept for forwarded messages. On success, an array of [MessageId](https://core.telegram.org/bots/api#messageid) of the sent messages is returned.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'from_chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the chat where the original messages were sent (or channel username in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_ids',
      type: {
        kind: 'array',
        of: {
          kind: 'int32',
        },
      },
      description: {
        markdown: 'An array of 1-100 identifiers of messages in the chat _from\\_chat\\_id_ to forward. The identifiers must be specified in a strictly increasing order.',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the forwarded messages from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const copyMessage: ApiMethod = {
  name: 'copyMessage',
  description: {
    markdown: 'Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can\'t be copied. A quiz [poll](https://core.telegram.org/bots/api#poll) can be copied only if the value of the field _correct\\_option\\_id_ is known to the bot. The method is analogous to the method [forwardMessage](https://core.telegram.org/bots/api#forwardmessage), but the copied message doesn\'t have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api#messageid) of the sent message on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'from_chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Message identifier in the chat specified in _from\\_chat\\_id_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'video_start_timestamp',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'New start timestamp for the copied video in the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the new caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the new caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'show_caption_above_media',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media. Ignored if a new caption isn\'t specified.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const copyMessages: ApiMethod = {
  name: 'copyMessages',
  description: {
    markdown: 'Use this method to copy messages of any kind. If some of the specified messages can\'t be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can\'t be copied. A quiz [poll](https://core.telegram.org/bots/api#poll) can be copied only if the value of the field _correct\\_option\\_id_ is known to the bot. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api#forwardmessages), but the copied messages don\'t have a link to the original message. Album grouping is kept for copied messages. On success, an array of [MessageId](https://core.telegram.org/bots/api#messageid) of the sent messages is returned.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'from_chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the chat where the original messages were sent (or channel username in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_ids',
      type: {
        kind: 'array',
        of: {
          kind: 'int32',
        },
      },
      description: {
        markdown: 'An array of 1-100 identifiers of messages in the chat _from\\_chat\\_id_ to copy. The identifiers must be specified in a strictly increasing order.',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent messages from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'remove_caption',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to copy the messages without their captions',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendPhoto: ApiMethod = {
  name: 'sendPhoto',
  description: {
    markdown: 'Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Photo to send. Pass a file\\_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo\'s width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Photo caption (may also be used when resending photos by _file\\_id_), 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'show_caption_above_media',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_spoiler',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the photo needs to be covered with a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendAudio: ApiMethod = {
  name: 'sendAudio',
  description: {
    markdown: 'Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.  \nFor sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api#sendvoice) method instead.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'audio',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Audio file to send. Pass a file\\_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Audio caption, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'duration',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Duration of the audio in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'performer',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Performer',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Track name',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail\'s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can\'t be reused and can be only uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the thumbnail was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendDocument: ApiMethod = {
  name: 'sendDocument',
  description: {
    markdown: 'Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'document',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'File to send. Pass a file\\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail\'s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can\'t be reused and can be only uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the thumbnail was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Document caption (may also be used when resending documents by _file\\_id_), 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'disable_content_type_detection',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Disables automatic server-side content type detection for files uploaded using multipart/form-data',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendVideo: ApiMethod = {
  name: 'sendVideo',
  description: {
    markdown: 'Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api#document)). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Video to send. Pass a file\\_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Duration of sent video in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Video width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'height',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Video height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail\'s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can\'t be reused and can be only uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the thumbnail was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'cover',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Cover for the video in the message. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'start_timestamp',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Start timestamp for the video in the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Video caption (may also be used when resending videos by _file\\_id_), 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'show_caption_above_media',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_spoiler',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the video needs to be covered with a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'supports_streaming',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the uploaded video is suitable for streaming',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendAnimation: ApiMethod = {
  name: 'sendAnimation',
  description: {
    markdown: 'Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'animation',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Animation to send. Pass a file\\_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Duration of sent animation in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Animation width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'height',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Animation height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail\'s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can\'t be reused and can be only uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the thumbnail was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Animation caption (may also be used when resending animation by _file\\_id_), 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the animation caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'show_caption_above_media',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_spoiler',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the animation needs to be covered with a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendVoice: ApiMethod = {
  name: 'sendVoice',
  description: {
    markdown: 'Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as [Audio](https://core.telegram.org/bots/api#audio) or [Document](https://core.telegram.org/bots/api#document)). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'voice',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Audio file to send. Pass a file\\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Voice message caption, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'duration',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Duration of the voice message in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendVideoNote: ApiMethod = {
  name: 'sendVideoNote',
  description: {
    markdown: 'As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_note',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Video note to send. Pass a file\\_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files). Sending video notes by a URL is currently unsupported',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Duration of sent video in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'length',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Video width and height, i.e. diameter of the video message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail\'s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can\'t be reused and can be only uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the thumbnail was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendPaidMedia: ApiMethod = {
  name: 'sendPaidMedia',
  description: {
    markdown: 'Use this method to send paid media. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat\'s balance. Otherwise, they will be credited to the bot\'s balance.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'star_count',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars that must be paid to buy access to the media; 1-10000',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'InputPaidMedia',
        },
      },
      description: {
        markdown: 'An array describing the media to be sent; up to 10 items',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'payload',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Media caption, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the media caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'show_caption_above_media',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendMediaGroup: ApiMethod = {
  name: 'sendMediaGroup',
  description: {
    markdown: 'Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Message](https://core.telegram.org/bots/api#message) objects that were sent is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        kind: 'array',
        of: {
          kind: 'union',
          types: [
            {
              kind: 'api-type',
              name: 'InputMediaAudio',
            },
            {
              kind: 'api-type',
              name: 'InputMediaDocument',
            },
            {
              kind: 'api-type',
              name: 'InputMediaPhoto',
            },
            {
              kind: 'api-type',
              name: 'InputMediaVideo',
            },
          ],
        },
      },
      description: {
        markdown: 'An array describing messages to be sent, must include 2-10 items',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent messages from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendLocation: ApiMethod = {
  name: 'sendLocation',
  description: {
    markdown: 'Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'latitude',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'Latitude of the location',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'Longitude of the location',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'horizontal_accuracy',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'The radius of uncertainty for the location, measured in meters; 0-1500',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'live_period',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Period in seconds during which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'heading',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'proximity_alert_radius',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendVenue: ApiMethod = {
  name: 'sendVenue',
  description: {
    markdown: 'Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'latitude',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'Latitude of the venue',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'Longitude of the venue',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Name of the venue',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'address',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Address of the venue',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'foursquare_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Foursquare identifier of the venue',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'foursquare_type',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Foursquare type of the venue, if known. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'google_place_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Google Places identifier of the venue',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'google_place_type',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendContact: ApiMethod = {
  name: 'sendContact',
  description: {
    markdown: 'Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'phone_number',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Contact\'s phone number',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'first_name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Contact\'s first name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'last_name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Contact\'s last name',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'vcard',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendPoll: ApiMethod = {
  name: 'sendPoll',
  description: {
    markdown: 'Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`). Polls can\'t be sent to channel direct messages chats.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'question',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Poll question, 1-300 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'question_parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the question. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details. Currently, only custom emoji entities are allowed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'question_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the poll question. It can be specified instead of _question\\_parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'options',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'InputPollOption',
        },
      },
      description: {
        markdown: 'An array of 2-12 answer options',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'is_anonymous',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: '_True_, if the poll needs to be anonymous, defaults to _True_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Poll type, “quiz” or “regular”, defaults to “regular”',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allows_multiple_answers',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: '_True_, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to _False_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'correct_option_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: '0-based identifier of the correct answer option, required for polls in quiz mode',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'explanation',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'explanation_parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the explanation. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'explanation_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the poll explanation. It can be specified instead of _explanation\\_parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'open_period',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Amount of time in seconds the poll will be active after creation, 5-600. Can\'t be used together with _close\\_date_.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'close_date',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can\'t be used together with _open\\_period_.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_closed',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the poll needs to be immediately closed. This can be useful for poll preview.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendChecklist: ApiMethod = {
  name: 'sendChecklist',
  description: {
    markdown: 'Use this method to send a checklist on behalf of a connected business account. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'checklist',
      type: {
        kind: 'api-type',
        name: 'InputChecklist',
      },
      description: {
        markdown: 'An object for the checklist to send',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message silently. Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'An object for description of the message to reply to',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for an inline keyboard',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendDice: ApiMethod = {
  name: 'sendDice',
  description: {
    markdown: 'Use this method to send an animated emoji that will display a random value. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'emoji',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Emoji on which the dice throw animation is based. Currently, must be one of “![🎲](//telegram.org/img/emoji/40/F09F8EB2.png)”, “![🎯](//telegram.org/img/emoji/40/F09F8EAF.png)”, “![🏀](//telegram.org/img/emoji/40/F09F8F80.png)”, “![⚽](//telegram.org/img/emoji/40/E29ABD.png)”, “![🎳](//telegram.org/img/emoji/40/F09F8EB3.png)”, or “![🎰](//telegram.org/img/emoji/40/F09F8EB0.png)”. Dice can have values 1-6 for “![🎲](//telegram.org/img/emoji/40/F09F8EB2.png)”, “![🎯](//telegram.org/img/emoji/40/F09F8EAF.png)” and “![🎳](//telegram.org/img/emoji/40/F09F8EB3.png)”, values 1-5 for “![🏀](//telegram.org/img/emoji/40/F09F8F80.png)” and “![⚽](//telegram.org/img/emoji/40/E29ABD.png)”, and values 1-64 for “![🎰](//telegram.org/img/emoji/40/F09F8EB0.png)”. Defaults to “![🎲](//telegram.org/img/emoji/40/F09F8EB2.png)”',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendChatAction: ApiMethod = {
  name: 'sendChatAction',
  description: {
    markdown: 'Use this method when you need to tell the user that something is happening on the bot\'s side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns _True_ on success.  \n\nExample: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api#sendchataction) with _action_ = _upload\\_photo_. The user will see a “sending photo” status for the bot.\n\n  \nWe only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the action will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`). Channel chats and channel direct messages chats aren\'t supported.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread; for supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'action',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Type of action to broadcast. Choose one, depending on what the user is about to receive: _typing_ for [text messages](https://core.telegram.org/bots/api#sendmessage), _upload\\_photo_ for [photos](https://core.telegram.org/bots/api#sendphoto), _record\\_video_ or _upload\\_video_ for [videos](https://core.telegram.org/bots/api#sendvideo), _record\\_voice_ or _upload\\_voice_ for [voice notes](https://core.telegram.org/bots/api#sendvoice), _upload\\_document_ for [general files](https://core.telegram.org/bots/api#senddocument), _choose\\_sticker_ for [stickers](https://core.telegram.org/bots/api#sendsticker), _find\\_location_ for [location data](https://core.telegram.org/bots/api#sendlocation), _record\\_video\\_note_ or _upload\\_video\\_note_ for [video notes](https://core.telegram.org/bots/api#sendvideonote).',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setMessageReaction: ApiMethod = {
  name: 'setMessageReaction',
  description: {
    markdown: 'Use this method to change the chosen reactions on a message. Service messages of some types can\'t be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can\'t use paid reactions. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'reaction',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'ReactionType',
        },
      },
      description: {
        markdown: 'An array of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can\'t be used by bots.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'is_big',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to set the reaction with a big animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getUserProfilePhotos: ApiMethod = {
  name: 'getUserProfilePhotos',
  description: {
    markdown: 'Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'offset',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Sequential number of the first photo to be returned. By default, all photos are returned.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'limit',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setUserEmojiStatus: ApiMethod = {
  name: 'setUserEmojiStatus',
  description: {
    markdown: 'Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method [requestEmojiStatusAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps). Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'emoji_status_custom_emoji_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'emoji_status_expiration_date',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Expiration date of the emoji status, if any',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getFile: ApiMethod = {
  name: 'getFile',
  description: {
    markdown: 'Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile) again.  \n**Note:** This function may not preserve the original file name and MIME type. You should save the file\'s MIME type and name (if available) when the File object is received.',
  },
  parameters: [
    {
      name: 'file_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'File identifier to get information about',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const banChatMember: ApiMethod = {
  name: 'banChatMember',
  description: {
    markdown: 'Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'until_date',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'revoke_messages',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to delete all messages from the chat for the user that is being removed. If _False_, the user will be able to see messages in the group that were sent before the user was removed. Always _True_ for supergroups and channels.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const unbanChatMember: ApiMethod = {
  name: 'unbanChatMember',
  description: {
    markdown: 'Use this method to unban a previously banned user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don\'t want this, use the parameter _only\\_if\\_banned_. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'only_if_banned',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Do nothing if the user is not banned',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const restrictChatMember: ApiMethod = {
  name: 'restrictChatMember',
  description: {
    markdown: 'Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass _True_ for all permissions to lift restrictions from a user. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'permissions',
      type: {
        kind: 'api-type',
        name: 'ChatPermissions',
      },
      description: {
        markdown: 'An object for new user permissions',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'use_independent_chat_permissions',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if chat permissions are set independently. Otherwise, the _can\\_send\\_other\\_messages_ and _can\\_add\\_web\\_page\\_previews_ permissions will imply the _can\\_send\\_messages_, _can\\_send\\_audios_, _can\\_send\\_documents_, _can\\_send\\_photos_, _can\\_send\\_videos_, _can\\_send\\_video\\_notes_, and _can\\_send\\_voice\\_notes_ permissions; the _can\\_send\\_polls_ permission will imply the _can\\_send\\_messages_ permission.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'until_date',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const promoteChatMember: ApiMethod = {
  name: 'promoteChatMember',
  description: {
    markdown: 'Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass _False_ for all boolean parameters to demote a user. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_anonymous',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator\'s presence in the chat is hidden',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_chat',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_messages',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can delete messages of other users',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_video_chats',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can manage video chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_restrict_members',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can restrict, ban or unban chat members, or access supergroup statistics',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_promote_members',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_change_info',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can change chat title, photo and other settings',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_invite_users',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can invite new users to the chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_post_stories',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can post stories to the chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_stories',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat\'s story archive',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_stories',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can delete stories posted by other users',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_post_messages',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_messages',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can edit messages of other users and can pin messages; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_pin_messages',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can pin messages; for supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_topics',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_direct_messages',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the administrator can manage direct messages within the channel and decline suggested posts; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setChatAdministratorCustomTitle: ApiMethod = {
  name: 'setChatAdministratorCustomTitle',
  description: {
    markdown: 'Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'custom_title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New custom title for the administrator; 0-16 characters, emoji are not allowed',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const banChatSenderChat: ApiMethod = {
  name: 'banChatSenderChat',
  description: {
    markdown: 'Use this method to ban a channel chat in a supergroup or a channel. Until the chat is [unbanned](https://core.telegram.org/bots/api#unbanchatsenderchat), the owner of the banned chat won\'t be able to send messages on behalf of **any of their channels**. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sender_chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target sender chat',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const unbanChatSenderChat: ApiMethod = {
  name: 'unbanChatSenderChat',
  description: {
    markdown: 'Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sender_chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target sender chat',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setChatPermissions: ApiMethod = {
  name: 'setChatPermissions',
  description: {
    markdown: 'Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the _can\\_restrict\\_members_ administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'permissions',
      type: {
        kind: 'api-type',
        name: 'ChatPermissions',
      },
      description: {
        markdown: 'An object for new default chat permissions',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'use_independent_chat_permissions',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if chat permissions are set independently. Otherwise, the _can\\_send\\_other\\_messages_ and _can\\_add\\_web\\_page\\_previews_ permissions will imply the _can\\_send\\_messages_, _can\\_send\\_audios_, _can\\_send\\_documents_, _can\\_send\\_photos_, _can\\_send\\_videos_, _can\\_send\\_video\\_notes_, and _can\\_send\\_voice\\_notes_ permissions; the _can\\_send\\_polls_ permission will imply the _can\\_send\\_messages_ permission.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const exportChatInviteLink: ApiMethod = {
  name: 'exportChatInviteLink',
  description: {
    markdown: 'Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as _String_ on success.  \n\nNote: Each administrator in a chat generates their own invite links. Bots can\'t use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) or by calling the [getChat](https://core.telegram.org/bots/api#getchat) method. If your bot needs to generate a new primary invite link replacing its previous one, use [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) again.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const createChatInviteLink: ApiMethod = {
  name: 'createChatInviteLink',
  description: {
    markdown: 'Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method [revokeChatInviteLink](https://core.telegram.org/bots/api#revokechatinvitelink). Returns the new invite link as [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Invite link name; 0-32 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'expire_date',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the link will expire',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'member_limit',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'creates_join_request',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: '_True_, if users joining the chat via the link need to be approved by chat administrators. If _True_, _member\\_limit_ can\'t be specified',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editChatInviteLink: ApiMethod = {
  name: 'editChatInviteLink',
  description: {
    markdown: 'Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invite_link',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The invite link to edit',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Invite link name; 0-32 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'expire_date',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the link will expire',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'member_limit',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'creates_join_request',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: '_True_, if users joining the chat via the link need to be approved by chat administrators. If _True_, _member\\_limit_ can\'t be specified',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const createChatSubscriptionInviteLink: ApiMethod = {
  name: 'createChatSubscriptionInviteLink',
  description: {
    markdown: 'Use this method to create a [subscription invite link](https://telegram.org/blog/superchannels-star-reactions-subscriptions#star-subscriptions) for a channel chat. The bot must have the _can\\_invite\\_users_ administrator rights. The link can be edited using the method [editChatSubscriptionInviteLink](https://core.telegram.org/bots/api#editchatsubscriptioninvitelink) or revoked using the method [revokeChatInviteLink](https://core.telegram.org/bots/api#revokechatinvitelink). Returns the new invite link as a [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target channel chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Invite link name; 0-32 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'subscription_period',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'subscription_price',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editChatSubscriptionInviteLink: ApiMethod = {
  name: 'editChatSubscriptionInviteLink',
  description: {
    markdown: 'Use this method to edit a subscription invite link created by the bot. The bot must have the _can\\_invite\\_users_ administrator rights. Returns the edited invite link as a [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invite_link',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The invite link to edit',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Invite link name; 0-32 characters',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const revokeChatInviteLink: ApiMethod = {
  name: 'revokeChatInviteLink',
  description: {
    markdown: 'Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier of the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invite_link',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The invite link to revoke',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const approveChatJoinRequest: ApiMethod = {
  name: 'approveChatJoinRequest',
  description: {
    markdown: 'Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the _can\\_invite\\_users_ administrator right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const declineChatJoinRequest: ApiMethod = {
  name: 'declineChatJoinRequest',
  description: {
    markdown: 'Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the _can\\_invite\\_users_ administrator right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setChatPhoto: ApiMethod = {
  name: 'setChatPhoto',
  description: {
    markdown: 'Use this method to set a new profile photo for the chat. Photos can\'t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        kind: 'input-file',
      },
      description: {
        markdown: 'New chat photo, uploaded using multipart/form-data',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteChatPhoto: ApiMethod = {
  name: 'deleteChatPhoto',
  description: {
    markdown: 'Use this method to delete a chat photo. Photos can\'t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setChatTitle: ApiMethod = {
  name: 'setChatTitle',
  description: {
    markdown: 'Use this method to change the title of a chat. Titles can\'t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New chat title, 1-128 characters',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setChatDescription: ApiMethod = {
  name: 'setChatDescription',
  description: {
    markdown: 'Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New chat description, 0-255 characters',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const pinChatMessage: ApiMethod = {
  name: 'pinChatMessage',
  description: {
    markdown: 'Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the \'can\\_pin\\_messages\' right or the \'can\\_edit\\_messages\' right to pin messages in groups and channels respectively. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be pinned',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of a message to pin',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const unpinChatMessage: ApiMethod = {
  name: 'unpinChatMessage',
  description: {
    markdown: 'Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the \'can\\_pin\\_messages\' right or the \'can\\_edit\\_messages\' right to unpin messages in groups and channels respectively. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be unpinned',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the message to unpin. Required if _business\\_connection\\_id_ is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const unpinAllChatMessages: ApiMethod = {
  name: 'unpinAllChatMessages',
  description: {
    markdown: 'Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the \'can\\_pin\\_messages\' right or the \'can\\_edit\\_messages\' right to unpin all pinned messages in groups and channels respectively. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const leaveChat: ApiMethod = {
  name: 'leaveChat',
  description: {
    markdown: 'Use this method for your bot to leave a group, supergroup or channel. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`). Channel direct messages chats aren\'t supported; leave the corresponding channel instead.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getChat: ApiMethod = {
  name: 'getChat',
  description: {
    markdown: 'Use this method to get up-to-date information about the chat. Returns a [ChatFullInfo](https://core.telegram.org/bots/api#chatfullinfo) object on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getChatAdministrators: ApiMethod = {
  name: 'getChatAdministrators',
  description: {
    markdown: 'Use this method to get a list of administrators in a chat, which aren\'t bots. Returns an Array of [ChatMember](https://core.telegram.org/bots/api#chatmember) objects.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getChatMemberCount: ApiMethod = {
  name: 'getChatMemberCount',
  description: {
    markdown: 'Use this method to get the number of members in a chat. Returns _Int_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getChatMember: ApiMethod = {
  name: 'getChatMember',
  description: {
    markdown: 'Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setChatStickerSet: ApiMethod = {
  name: 'setChatStickerSet',
  description: {
    markdown: 'Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field _can\\_set\\_sticker\\_set_ optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker_set_name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Name of the sticker set to be set as the group sticker set',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteChatStickerSet: ApiMethod = {
  name: 'deleteChatStickerSet',
  description: {
    markdown: 'Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field _can\\_set\\_sticker\\_set_ optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getForumTopicIconStickers: ApiMethod = {
  name: 'getForumTopicIconStickers',
  description: {
    markdown: 'Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of [Sticker](https://core.telegram.org/bots/api#sticker) objects.',
  },
  parameters: [],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const createForumTopic: ApiMethod = {
  name: 'createForumTopic',
  description: {
    markdown: 'Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights. Returns information about the created topic as a [ForumTopic](https://core.telegram.org/bots/api#forumtopic) object.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Topic name, 1-128 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'icon_color',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'icon_custom_emoji_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the custom emoji shown as the topic icon. Use [getForumTopicIconStickers](https://core.telegram.org/bots/api#getforumtopiciconstickers) to get all allowed custom emoji identifiers.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editForumTopic: ApiMethod = {
  name: 'editForumTopic',
  description: {
    markdown: 'Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights, unless it is the creator of the topic. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread of the forum topic',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'icon_custom_emoji_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New unique identifier of the custom emoji shown as the topic icon. Use [getForumTopicIconStickers](https://core.telegram.org/bots/api#getforumtopiciconstickers) to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const closeForumTopic: ApiMethod = {
  name: 'closeForumTopic',
  description: {
    markdown: 'Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights, unless it is the creator of the topic. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread of the forum topic',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const reopenForumTopic: ApiMethod = {
  name: 'reopenForumTopic',
  description: {
    markdown: 'Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights, unless it is the creator of the topic. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread of the forum topic',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteForumTopic: ApiMethod = {
  name: 'deleteForumTopic',
  description: {
    markdown: 'Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_delete\\_messages_ administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread of the forum topic',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const unpinAllForumTopicMessages: ApiMethod = {
  name: 'unpinAllForumTopicMessages',
  description: {
    markdown: 'Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the _can\\_pin\\_messages_ administrator right in the supergroup. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread of the forum topic',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editGeneralForumTopic: ApiMethod = {
  name: 'editGeneralForumTopic',
  description: {
    markdown: 'Use this method to edit the name of the \'General\' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New topic name, 1-128 characters',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const closeGeneralForumTopic: ApiMethod = {
  name: 'closeGeneralForumTopic',
  description: {
    markdown: 'Use this method to close an open \'General\' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const reopenGeneralForumTopic: ApiMethod = {
  name: 'reopenGeneralForumTopic',
  description: {
    markdown: 'Use this method to reopen a closed \'General\' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights. The topic will be automatically unhidden if it was hidden. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const hideGeneralForumTopic: ApiMethod = {
  name: 'hideGeneralForumTopic',
  description: {
    markdown: 'Use this method to hide the \'General\' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights. The topic will be automatically closed if it was open. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const unhideGeneralForumTopic: ApiMethod = {
  name: 'unhideGeneralForumTopic',
  description: {
    markdown: 'Use this method to unhide the \'General\' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\\_manage\\_topics_ administrator rights. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const unpinAllGeneralForumTopicMessages: ApiMethod = {
  name: 'unpinAllGeneralForumTopicMessages',
  description: {
    markdown: 'Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the _can\\_pin\\_messages_ administrator right in the supergroup. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const answerCallbackQuery: ApiMethod = {
  name: 'answerCallbackQuery',
  description: {
    markdown: 'Use this method to send answers to callback queries sent from [inline keyboards](https://core.telegram.org/bots/features#inline-keyboards). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, _True_ is returned.  \n\nAlternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@BotFather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.',
  },
  parameters: [
    {
      name: 'callback_query_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier for the query to be answered',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_alert',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'If _True_, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to _false_.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'url',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'URL that will be opened by the user\'s client. If you have created a [Game](https://core.telegram.org/bots/api#game) and accepted the conditions via [@BotFather](https://t.me/botfather), specify the URL that opens your game - note that this will only work if the query comes from a [_callback\\_game_](https://core.telegram.org/bots/api#inlinekeyboardbutton) button.  \n  \nOtherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'cache_time',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getUserChatBoosts: ApiMethod = {
  name: 'getUserChatBoosts',
  description: {
    markdown: 'Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a [UserChatBoosts](https://core.telegram.org/bots/api#userchatboosts) object.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the chat or username of the channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getBusinessConnection: ApiMethod = {
  name: 'getBusinessConnection',
  description: {
    markdown: 'Use this method to get information about the connection of the bot with a business account. Returns a [BusinessConnection](https://core.telegram.org/bots/api#businessconnection) object on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setMyCommands: ApiMethod = {
  name: 'setMyCommands',
  description: {
    markdown: 'Use this method to change the list of the bot\'s commands. See [this manual](https://core.telegram.org/bots/features#commands) for more details about bot commands. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'commands',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'BotCommand',
        },
      },
      description: {
        markdown: 'An array of bot commands to be set as the list of the bot\'s commands. At most 100 commands can be specified.',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'scope',
      type: {
        kind: 'api-type',
        name: 'BotCommandScope',
      },
      description: {
        markdown: 'An object, describing scope of users for which the commands are relevant. Defaults to [BotCommandScopeDefault](https://core.telegram.org/bots/api#botcommandscopedefault).',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteMyCommands: ApiMethod = {
  name: 'deleteMyCommands',
  description: {
    markdown: 'Use this method to delete the list of the bot\'s commands for the given scope and user language. After deletion, [higher level commands](https://core.telegram.org/bots/api#determining-list-of-commands) will be shown to affected users. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'scope',
      type: {
        kind: 'api-type',
        name: 'BotCommandScope',
      },
      description: {
        markdown: 'An object, describing scope of users for which the commands are relevant. Defaults to [BotCommandScopeDefault](https://core.telegram.org/bots/api#botcommandscopedefault).',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getMyCommands: ApiMethod = {
  name: 'getMyCommands',
  description: {
    markdown: 'Use this method to get the current list of the bot\'s commands for the given scope and user language. Returns an Array of [BotCommand](https://core.telegram.org/bots/api#botcommand) objects. If commands aren\'t set, an empty list is returned.',
  },
  parameters: [
    {
      name: 'scope',
      type: {
        kind: 'api-type',
        name: 'BotCommandScope',
      },
      description: {
        markdown: 'An object, describing scope of users. Defaults to [BotCommandScopeDefault](https://core.telegram.org/bots/api#botcommandscopedefault).',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code or an empty string',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setMyName: ApiMethod = {
  name: 'setMyName',
  description: {
    markdown: 'Use this method to change the bot\'s name. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getMyName: ApiMethod = {
  name: 'getMyName',
  description: {
    markdown: 'Use this method to get the current bot name for the given user language. Returns [BotName](https://core.telegram.org/bots/api#botname) on success.',
  },
  parameters: [
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code or an empty string',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setMyDescription: ApiMethod = {
  name: 'setMyDescription',
  description: {
    markdown: 'Use this method to change the bot\'s description, which is shown in the chat with the bot if the chat is empty. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'description',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getMyDescription: ApiMethod = {
  name: 'getMyDescription',
  description: {
    markdown: 'Use this method to get the current bot description for the given user language. Returns [BotDescription](https://core.telegram.org/bots/api#botdescription) on success.',
  },
  parameters: [
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code or an empty string',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setMyShortDescription: ApiMethod = {
  name: 'setMyShortDescription',
  description: {
    markdown: 'Use this method to change the bot\'s short description, which is shown on the bot\'s profile page and is sent together with the link when users share the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'short_description',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getMyShortDescription: ApiMethod = {
  name: 'getMyShortDescription',
  description: {
    markdown: 'Use this method to get the current bot short description for the given user language. Returns [BotShortDescription](https://core.telegram.org/bots/api#botshortdescription) on success.',
  },
  parameters: [
    {
      name: 'language_code',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'A two-letter ISO 639-1 language code or an empty string',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setChatMenuButton: ApiMethod = {
  name: 'setChatMenuButton',
  description: {
    markdown: 'Use this method to change the bot\'s menu button in a private chat, or the default menu button. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target private chat. If not specified, default bot\'s menu button will be changed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'menu_button',
      type: {
        kind: 'api-type',
        name: 'MenuButton',
      },
      description: {
        markdown: 'An object for the bot\'s new menu button. Defaults to [MenuButtonDefault](https://core.telegram.org/bots/api#menubuttondefault)',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getChatMenuButton: ApiMethod = {
  name: 'getChatMenuButton',
  description: {
    markdown: 'Use this method to get the current value of the bot\'s menu button in a private chat, or the default menu button. Returns [MenuButton](https://core.telegram.org/bots/api#menubutton) on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target private chat. If not specified, default bot\'s menu button will be returned',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setMyDefaultAdministratorRights: ApiMethod = {
  name: 'setMyDefaultAdministratorRights',
  description: {
    markdown: 'Use this method to change the default administrator rights requested by the bot when it\'s added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'rights',
      type: {
        kind: 'api-type',
        name: 'ChatAdministratorRights',
      },
      description: {
        markdown: 'An object describing new default administrator rights. If not specified, the default administrator rights will be cleared.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'for_channels',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getMyDefaultAdministratorRights: ApiMethod = {
  name: 'getMyDefaultAdministratorRights',
  description: {
    markdown: 'Use this method to get the current default administrator rights of the bot. Returns [ChatAdministratorRights](https://core.telegram.org/bots/api#chatadministratorrights) on success.',
  },
  parameters: [
    {
      name: 'for_channels',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getAvailableGifts: ApiMethod = {
  name: 'getAvailableGifts',
  description: {
    markdown: 'Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a [Gifts](https://core.telegram.org/bots/api#gifts) object.',
  },
  parameters: [],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendGift: ApiMethod = {
  name: 'sendGift',
  description: {
    markdown: 'Sends a gift to the given user or channel chat. The gift can\'t be converted to Telegram Stars by the receiver. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _chat\\_id_ is not specified. Unique identifier of the target user who will receive the gift.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Required if _user\\_id_ is not specified. Unique identifier for the chat or username of the channel (in the format `@channelusername`) that will receive the gift.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'gift_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Identifier of the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'pay_for_upgrade',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to pay for the gift upgrade from the bot\'s balance, thereby making the upgrade free for the receiver',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Text that will be shown along with the gift; 0-128 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text_parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the text. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\\_emoji” are ignored.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the gift text. It can be specified instead of _text\\_parse\\_mode_. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\\_emoji” are ignored.',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const giftPremiumSubscription: ApiMethod = {
  name: 'giftPremiumSubscription',
  description: {
    markdown: 'Gifts a Telegram Premium subscription to the given user. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user who will receive a Telegram Premium subscription',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'month_count',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'star_count',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Text that will be shown along with the service message about the subscription; 0-128 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text_parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the text. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\\_emoji” are ignored.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the gift text. It can be specified instead of _text\\_parse\\_mode_. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\\_emoji” are ignored.',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const verifyUser: ApiMethod = {
  name: 'verifyUser',
  description: {
    markdown: 'Verifies a user [on behalf of the organization](https://telegram.org/verify#third-party-verification) which is represented by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'custom_description',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Custom description for the verification; 0-70 characters. Must be empty if the organization isn\'t allowed to provide a custom verification description.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const verifyChat: ApiMethod = {
  name: 'verifyChat',
  description: {
    markdown: 'Verifies a chat [on behalf of the organization](https://telegram.org/verify#third-party-verification) which is represented by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`). Channel direct messages chats can\'t be verified.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'custom_description',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Custom description for the verification; 0-70 characters. Must be empty if the organization isn\'t allowed to provide a custom verification description.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const removeUserVerification: ApiMethod = {
  name: 'removeUserVerification',
  description: {
    markdown: 'Removes verification from a user who is currently verified [on behalf of the organization](https://telegram.org/verify#third-party-verification) represented by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const removeChatVerification: ApiMethod = {
  name: 'removeChatVerification',
  description: {
    markdown: 'Removes verification from a chat that is currently verified [on behalf of the organization](https://telegram.org/verify#third-party-verification) represented by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const readBusinessMessage: ApiMethod = {
  name: 'readBusinessMessage',
  description: {
    markdown: 'Marks incoming message as read on behalf of a business account. Requires the _can\\_read\\_messages_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which to read the message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the message to mark as read',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteBusinessMessages: ApiMethod = {
  name: 'deleteBusinessMessages',
  description: {
    markdown: 'Delete messages on behalf of a business account. Requires the _can\\_delete\\_sent\\_messages_ business bot right to delete messages sent by the bot itself, or the _can\\_delete\\_all\\_messages_ business bot right to delete any message. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which to delete the messages',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_ids',
      type: {
        kind: 'array',
        of: {
          kind: 'int32',
        },
      },
      description: {
        markdown: 'An array of 1-100 identifiers of messages to delete. All messages must be from the same chat. See [deleteMessage](https://core.telegram.org/bots/api#deletemessage) for limitations on which messages can be deleted',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setBusinessAccountName: ApiMethod = {
  name: 'setBusinessAccountName',
  description: {
    markdown: 'Changes the first and last name of a managed business account. Requires the _can\\_change\\_name_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'first_name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The new value of the first name for the business account; 1-64 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'last_name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The new value of the last name for the business account; 0-64 characters',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setBusinessAccountUsername: ApiMethod = {
  name: 'setBusinessAccountUsername',
  description: {
    markdown: 'Changes the username of a managed business account. Requires the _can\\_change\\_username_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'username',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The new value of the username for the business account; 0-32 characters',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setBusinessAccountBio: ApiMethod = {
  name: 'setBusinessAccountBio',
  description: {
    markdown: 'Changes the bio of a managed business account. Requires the _can\\_change\\_bio_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'bio',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'The new value of the bio for the business account; 0-140 characters',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setBusinessAccountProfilePhoto: ApiMethod = {
  name: 'setBusinessAccountProfilePhoto',
  description: {
    markdown: 'Changes the profile photo of a managed business account. Requires the _can\\_edit\\_profile\\_photo_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        kind: 'api-type',
        name: 'InputProfilePhoto',
      },
      description: {
        markdown: 'The new profile photo to set',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_public',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to set the public photo, which will be visible even if the main photo is hidden by the business account\'s privacy settings. An account can have only one public photo.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const removeBusinessAccountProfilePhoto: ApiMethod = {
  name: 'removeBusinessAccountProfilePhoto',
  description: {
    markdown: 'Removes the current profile photo of a managed business account. Requires the _can\\_edit\\_profile\\_photo_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_public',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to remove the public photo, which is visible even if the main photo is hidden by the business account\'s privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setBusinessAccountGiftSettings: ApiMethod = {
  name: 'setBusinessAccountGiftSettings',
  description: {
    markdown: 'Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the _can\\_change\\_gift\\_settings_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'show_gift_button',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if a button for sending a gift to the user or by the business account must always be shown in the input field',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'accepted_gift_types',
      type: {
        kind: 'api-type',
        name: 'AcceptedGiftTypes',
      },
      description: {
        markdown: 'Types of gifts accepted by the business account',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getBusinessAccountStarBalance: ApiMethod = {
  name: 'getBusinessAccountStarBalance',
  description: {
    markdown: 'Returns the amount of Telegram Stars owned by a managed business account. Requires the _can\\_view\\_gifts\\_and\\_stars_ business bot right. Returns [StarAmount](https://core.telegram.org/bots/api#staramount) on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const transferBusinessAccountStars: ApiMethod = {
  name: 'transferBusinessAccountStars',
  description: {
    markdown: 'Transfers Telegram Stars from the business account balance to the bot\'s balance. Requires the _can\\_transfer\\_stars_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'star_count',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars to transfer; 1-10000',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getBusinessAccountGifts: ApiMethod = {
  name: 'getBusinessAccountGifts',
  description: {
    markdown: 'Returns the gifts received and owned by a managed business account. Requires the _can\\_view\\_gifts\\_and\\_stars_ business bot right. Returns [OwnedGifts](https://core.telegram.org/bots/api#ownedgifts) on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'exclude_unsaved',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to exclude gifts that aren\'t saved to the account\'s profile page',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'exclude_saved',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to exclude gifts that are saved to the account\'s profile page',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'exclude_unlimited',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to exclude gifts that can be purchased an unlimited number of times',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'exclude_limited',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to exclude gifts that can be purchased a limited number of times',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'exclude_unique',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to exclude unique gifts',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sort_by_price',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to sort results by gift price instead of send date. Sorting is applied before pagination.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'offset',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'limit',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum number of gifts to be returned; 1-100. Defaults to 100',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const convertGiftToStars: ApiMethod = {
  name: 'convertGiftToStars',
  description: {
    markdown: 'Converts a given regular gift to Telegram Stars. Requires the _can\\_convert\\_gifts\\_to\\_stars_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'owned_gift_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the regular gift that should be converted to Telegram Stars',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const upgradeGift: ApiMethod = {
  name: 'upgradeGift',
  description: {
    markdown: 'Upgrades a given regular gift to a unique gift. Requires the _can\\_transfer\\_and\\_upgrade\\_gifts_ business bot right. Additionally requires the _can\\_transfer\\_stars_ business bot right if the upgrade is paid. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'owned_gift_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the regular gift that should be upgraded to a unique one',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'keep_original_details',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to keep the original gift text, sender and receiver in the upgraded gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'star_count',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If `gift.prepaid_upgrade_star_count > 0`, then pass 0, otherwise, the _can\\_transfer\\_stars_ business bot right is required and `gift.upgrade_star_count` must be passed.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const transferGift: ApiMethod = {
  name: 'transferGift',
  description: {
    markdown: 'Transfers an owned unique gift to another user. Requires the _can\\_transfer\\_and\\_upgrade\\_gifts_ business bot right. Requires _can\\_transfer\\_stars_ business bot right if the transfer is paid. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'owned_gift_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the regular gift that should be transferred',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'new_owner_chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'star_count',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the _can\\_transfer\\_stars_ business bot right is required.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const postStory: ApiMethod = {
  name: 'postStory',
  description: {
    markdown: 'Posts a story on behalf of a managed business account. Requires the _can\\_manage\\_stories_ business bot right. Returns [Story](https://core.telegram.org/bots/api#story) on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'content',
      type: {
        kind: 'api-type',
        name: 'InputStoryContent',
      },
      description: {
        markdown: 'Content of the story',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'active_period',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Period after which the story is moved to the archive, in seconds; must be one of `6 * 3600`, `12 * 3600`, `86400`, or `2 * 86400`',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Caption of the story, 0-2048 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the story caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'areas',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'StoryArea',
        },
      },
      description: {
        markdown: 'An array of clickable areas to be shown on the story',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'post_to_chat_page',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to keep the story accessible after it expires',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the content of the story must be protected from forwarding and screenshotting',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editStory: ApiMethod = {
  name: 'editStory',
  description: {
    markdown: 'Edits a story previously posted by the bot on behalf of a managed business account. Requires the _can\\_manage\\_stories_ business bot right. Returns [Story](https://core.telegram.org/bots/api#story) on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'story_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the story to edit',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'content',
      type: {
        kind: 'api-type',
        name: 'InputStoryContent',
      },
      description: {
        markdown: 'Content of the story',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Caption of the story, 0-2048 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the story caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'areas',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'StoryArea',
        },
      },
      description: {
        markdown: 'An array of clickable areas to be shown on the story',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteStory: ApiMethod = {
  name: 'deleteStory',
  description: {
    markdown: 'Deletes a story previously posted by the bot on behalf of a managed business account. Requires the _can\\_manage\\_stories_ business bot right. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'story_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the story to delete',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editMessageText: ApiMethod = {
  name: 'editMessageText',
  description: {
    markdown: 'Use this method to edit text and [game](https://core.telegram.org/bots/api#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message to be edited was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the message to edit',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New text of the message, 1-4096 characters after entities parsing',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in message text, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'link_preview_options',
      type: {
        kind: 'api-type',
        name: 'LinkPreviewOptions',
      },
      description: {
        markdown: 'Link preview generation options for the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editMessageCaption: ApiMethod = {
  name: 'editMessageCaption',
  description: {
    markdown: 'Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message to be edited was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the message to edit',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'New caption of the message, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the message caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'show_caption_above_media',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media. Supported only for animation, photo and video messages.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editMessageMedia: ApiMethod = {
  name: 'editMessageMedia',
  description: {
    markdown: 'Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can\'t be uploaded; use a previously uploaded file via its file\\_id or specify a URL. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message to be edited was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the message to edit',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        kind: 'api-type',
        name: 'InputMedia',
      },
      description: {
        markdown: 'An object for a new media content of the message',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editMessageLiveLocation: ApiMethod = {
  name: 'editMessageLiveLocation',
  description: {
    markdown: 'Use this method to edit live location messages. A location can be edited until its _live\\_period_ expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message to be edited was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the message to edit',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'latitude',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'Latitude of new location',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'Longitude of new location',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'live_period',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current _live\\_period_ by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then _live\\_period_ remains unchanged',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'horizontal_accuracy',
      type: {
        kind: 'float',
      },
      description: {
        markdown: 'The radius of uncertainty for the location, measured in meters; 0-1500',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'heading',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'proximity_alert_radius',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const stopMessageLiveLocation: ApiMethod = {
  name: 'stopMessageLiveLocation',
  description: {
    markdown: 'Use this method to stop updating a live location message before _live\\_period_ expires. On success, if the message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message to be edited was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the message with live location to stop',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editMessageChecklist: ApiMethod = {
  name: 'editMessageChecklist',
  description: {
    markdown: 'Use this method to edit a checklist on behalf of a connected business account. On success, the edited [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'checklist',
      type: {
        kind: 'api-type',
        name: 'InputChecklist',
      },
      description: {
        markdown: 'An object for the new checklist',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for the new inline keyboard for the message',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editMessageReplyMarkup: ApiMethod = {
  name: 'editMessageReplyMarkup',
  description: {
    markdown: 'Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message to be edited was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the message to edit',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const stopPoll: ApiMethod = {
  name: 'stopPoll',
  description: {
    markdown: 'Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api#poll) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message to be edited was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the original message with the poll',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for a new message [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const approveSuggestedPost: ApiMethod = {
  name: 'approveSuggestedPost',
  description: {
    markdown: 'Use this method to approve a suggested post in a direct messages chat. The bot must have the \'can\\_post\\_messages\' administrator right in the corresponding channel chat. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target direct messages chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of a suggested post message to approve',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'send_date',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the post is expected to be published; omit if the date has already been specified when the suggested post was created. If specified, then the date must be not more than 2678400 seconds (30 days) in the future',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const declineSuggestedPost: ApiMethod = {
  name: 'declineSuggestedPost',
  description: {
    markdown: 'Use this method to decline a suggested post in a direct messages chat. The bot must have the \'can\\_manage\\_direct\\_messages\' administrator right in the corresponding channel chat. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target direct messages chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of a suggested post message to decline',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'comment',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Comment for the creator of the suggested post; 0-128 characters',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteMessage: ApiMethod = {
  name: 'deleteMessage',
  description: {
    markdown: 'Use this method to delete a message, including service messages, with the following limitations:  \n\\- A message can only be deleted if it was sent less than 48 hours ago.  \n\\- Service messages about a supergroup, channel, or forum topic creation can\'t be deleted.  \n\\- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.  \n\\- Bots can delete outgoing messages in private chats, groups, and supergroups.  \n\\- Bots can delete incoming messages in private chats.  \n\\- Bots granted _can\\_post\\_messages_ permissions can delete outgoing messages in channels.  \n\\- If the bot is an administrator of a group, it can delete any message there.  \n\\- If the bot has _can\\_delete\\_messages_ administrator right in a supergroup or a channel, it can delete any message there.  \n\\- If the bot has _can\\_manage\\_direct\\_messages_ administrator right in a channel, it can delete any message in the corresponding direct messages chat.  \nReturns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the message to delete',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteMessages: ApiMethod = {
  name: 'deleteMessages',
  description: {
    markdown: 'Use this method to delete multiple messages simultaneously. If some of the specified messages can\'t be found, they are skipped. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_ids',
      type: {
        kind: 'array',
        of: {
          kind: 'int32',
        },
      },
      description: {
        markdown: 'An array of 1-100 identifiers of messages to delete. See [deleteMessage](https://core.telegram.org/bots/api#deletemessage) for limitations on which messages can be deleted',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendSticker: ApiMethod = {
  name: 'sendSticker',
  description: {
    markdown: 'Use this method to send static .WEBP, [animated](https://telegram.org/blog/animated-stickers) .TGS, or [video](https://telegram.org/blog/video-stickers-better-reactions) .WEBM stickers. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Sticker to send. Pass a file\\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files). Video and animated stickers can\'t be sent via an HTTP URL.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'emoji',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Emoji associated with the sticker; only for just uploaded stickers',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'api-type',
            name: 'InlineKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardMarkup',
          },
          {
            kind: 'api-type',
            name: 'ReplyKeyboardRemove',
          },
          {
            kind: 'api-type',
            name: 'ForceReply',
          },
        ],
      },
      description: {
        markdown: 'Additional interface options. An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards), [custom reply keyboard](https://core.telegram.org/bots/features#keyboards), instructions to remove a reply keyboard or to force a reply from the user',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getStickerSet: ApiMethod = {
  name: 'getStickerSet',
  description: {
    markdown: 'Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned.',
  },
  parameters: [
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Name of the sticker set',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getCustomEmojiStickers: ApiMethod = {
  name: 'getCustomEmojiStickers',
  description: {
    markdown: 'Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of [Sticker](https://core.telegram.org/bots/api#sticker) objects.',
  },
  parameters: [
    {
      name: 'custom_emoji_ids',
      type: {
        kind: 'array',
        of: {
          kind: 'str',
        },
      },
      description: {
        markdown: 'An array of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const uploadStickerFile: ApiMethod = {
  name: 'uploadStickerFile',
  description: {
    markdown: 'Use this method to upload a file with a sticker for later use in the [createNewStickerSet](https://core.telegram.org/bots/api#createnewstickerset), [addStickerToSet](https://core.telegram.org/bots/api#addstickertoset), or [replaceStickerInSet](https://core.telegram.org/bots/api#replacestickerinset) methods (the file can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'User identifier of sticker file owner',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        kind: 'input-file',
      },
      description: {
        markdown: 'A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See [](https://core.telegram.org/stickers)[https://core.telegram.org/stickers](https://core.telegram.org/stickers) for technical requirements. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker_format',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Format of the sticker, must be one of “static”, “animated”, “video”',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const createNewStickerSet: ApiMethod = {
  name: 'createNewStickerSet',
  description: {
    markdown: 'Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'User identifier of created sticker set owner',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., _animals_). Can contain only English letters, digits and underscores. Must begin with a letter, can\'t contain consecutive underscores and must end in `"_by_<bot_username>"`. `<bot_username>` is case insensitive. 1-64 characters.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set title, 1-64 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'stickers',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'InputSticker',
        },
      },
      description: {
        markdown: 'An array of 1-50 initial stickers to be added to the sticker set',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'sticker_type',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Type of stickers in the set, pass “regular”, “mask”, or “custom\\_emoji”. By default, a regular sticker set is created.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'needs_repainting',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const addStickerToSet: ApiMethod = {
  name: 'addStickerToSet',
  description: {
    markdown: 'Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'User identifier of sticker set owner',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        kind: 'api-type',
        name: 'InputSticker',
      },
      description: {
        markdown: 'An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn\'t changed.',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setStickerPositionInSet: ApiMethod = {
  name: 'setStickerPositionInSet',
  description: {
    markdown: 'Use this method to move a sticker in a set created by the bot to a specific position. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'sticker',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'File identifier of the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'position',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'New sticker position in the set, zero-based',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteStickerFromSet: ApiMethod = {
  name: 'deleteStickerFromSet',
  description: {
    markdown: 'Use this method to delete a sticker from a set created by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'sticker',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'File identifier of the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const replaceStickerInSet: ApiMethod = {
  name: 'replaceStickerInSet',
  description: {
    markdown: 'Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling [deleteStickerFromSet](https://core.telegram.org/bots/api#deletestickerfromset), then [addStickerToSet](https://core.telegram.org/bots/api#addstickertoset), then [setStickerPositionInSet](https://core.telegram.org/bots/api#setstickerpositioninset). Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'User identifier of the sticker set owner',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'old_sticker',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'File identifier of the replaced sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        kind: 'api-type',
        name: 'InputSticker',
      },
      description: {
        markdown: 'An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setStickerEmojiList: ApiMethod = {
  name: 'setStickerEmojiList',
  description: {
    markdown: 'Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'sticker',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'File identifier of the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'emoji_list',
      type: {
        kind: 'array',
        of: {
          kind: 'str',
        },
      },
      description: {
        markdown: 'An array of 1-20 emoji associated with the sticker',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setStickerKeywords: ApiMethod = {
  name: 'setStickerKeywords',
  description: {
    markdown: 'Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'sticker',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'File identifier of the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'keywords',
      type: {
        kind: 'array',
        of: {
          kind: 'str',
        },
      },
      description: {
        markdown: 'An array of 0-20 search keywords for the sticker with total length of up to 64 characters',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setStickerMaskPosition: ApiMethod = {
  name: 'setStickerMaskPosition',
  description: {
    markdown: 'Use this method to change the [mask position](https://core.telegram.org/bots/api#maskposition) of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'sticker',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'File identifier of the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mask_position',
      type: {
        kind: 'api-type',
        name: 'MaskPosition',
      },
      description: {
        markdown: 'An object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setStickerSetTitle: ApiMethod = {
  name: 'setStickerSetTitle',
  description: {
    markdown: 'Use this method to set the title of a created sticker set. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set title, 1-64 characters',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setStickerSetThumbnail: ApiMethod = {
  name: 'setStickerSetThumbnail',
  description: {
    markdown: 'Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'User identifier of the sticker set owner',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'input-file',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'A **.WEBP** or **.PNG** image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a **.TGS** animation with a thumbnail up to 32 kilobytes in size (see [](https://core.telegram.org/stickers#animation-requirements)[https://core.telegram.org/stickers#animation-requirements](https://core.telegram.org/stickers#animation-requirements) for animated sticker technical requirements), or a **.WEBM** video with the thumbnail up to 32 kilobytes in size; see [](https://core.telegram.org/stickers#video-requirements)[https://core.telegram.org/stickers#video-requirements](https://core.telegram.org/stickers#video-requirements) for video sticker technical requirements. Pass a _file\\_id_ as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files). Animated and video sticker set thumbnails can\'t be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'format',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Format of the thumbnail, must be one of “static” for a **.WEBP** or **.PNG** image, “animated” for a **.TGS** animation, or “video” for a **.WEBM** video',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setCustomEmojiStickerSetThumbnail: ApiMethod = {
  name: 'setCustomEmojiStickerSetThumbnail',
  description: {
    markdown: 'Use this method to set the thumbnail of a custom emoji sticker set. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'custom_emoji_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const deleteStickerSet: ApiMethod = {
  name: 'deleteStickerSet',
  description: {
    markdown: 'Use this method to delete a sticker set that was created by the bot. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Sticker set name',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const answerInlineQuery: ApiMethod = {
  name: 'answerInlineQuery',
  description: {
    markdown: 'Use this method to send answers to an inline query. On success, _True_ is returned.  \nNo more than **50** results per query are allowed.',
  },
  parameters: [
    {
      name: 'inline_query_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier for the answered query',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'results',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'InlineQueryResult',
        },
      },
      description: {
        markdown: 'An array of results for the inline query',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'cache_time',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_personal',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'next_offset',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don\'t support pagination. Offset length can\'t exceed 64 bytes.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'button',
      type: {
        kind: 'api-type',
        name: 'InlineQueryResultsButton',
      },
      description: {
        markdown: 'An object describing a button to be shown above inline query results',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const answerWebAppQuery: ApiMethod = {
  name: 'answerWebAppQuery',
  description: {
    markdown: 'Use this method to set the result of an interaction with a [Web App](https://core.telegram.org/bots/webapps) and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a [SentWebAppMessage](https://core.telegram.org/bots/api#sentwebappmessage) object is returned.',
  },
  parameters: [
    {
      name: 'web_app_query_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier for the query to be answered',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'result',
      type: {
        kind: 'api-type',
        name: 'InlineQueryResult',
      },
      description: {
        markdown: 'An object describing the message to be sent',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const savePreparedInlineMessage: ApiMethod = {
  name: 'savePreparedInlineMessage',
  description: {
    markdown: 'Stores a message that can be sent by a user of a Mini App. Returns a [PreparedInlineMessage](https://core.telegram.org/bots/api#preparedinlinemessage) object.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user that can use the prepared message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'result',
      type: {
        kind: 'api-type',
        name: 'InlineQueryResult',
      },
      description: {
        markdown: 'An object describing the message to be sent',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'allow_user_chats',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the message can be sent to private chats with users',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_bot_chats',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the message can be sent to private chats with bots',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_group_chats',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the message can be sent to group and supergroup chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_channel_chats',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the message can be sent to channel chats',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendInvoice: ApiMethod = {
  name: 'sendInvoice',
  description: {
    markdown: 'Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'chat_id',
      type: {
        kind: 'union',
        types: [
          {
            kind: 'int32',
          },
          {
            kind: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Product name, 1-32 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Product description, 1-255 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'payload',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'provider_token',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Payment provider token, obtained via [@BotFather](https://t.me/botfather). Pass an empty string for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'currency',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies). Pass “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'prices',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'LabeledPrice',
        },
      },
      description: {
        markdown: 'Price breakdown, an array of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'max_tip_amount',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum accepted amount for tips in the _smallest units_ of the currency (integer, **not** float/double). For example, for a maximum tip of `US$ 1.45` pass `max_tip_amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_tip_amounts',
      type: {
        kind: 'array',
        of: {
          kind: 'int32',
        },
      },
      description: {
        markdown: 'An array of suggested amounts of tips in the _smallest units_ of the currency (integer, **not** float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed _max\\_tip\\_amount_.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'start_parameter',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique deep-linking parameter. If left empty, **forwarded copies** of the sent message will have a _Pay_ button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a _URL_ button with a deep link to the bot (instead of a _Pay_ button), with the value used as the start parameter',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'provider_data',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_url',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_size',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Photo size in bytes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_width',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Photo width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_height',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Photo height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_name',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s full name to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_phone_number',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s phone number to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_email',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s email address to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_shipping_address',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s shipping address to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_phone_number_to_provider',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the user\'s phone number should be sent to the provider. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_email_to_provider',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the user\'s email address should be sent to the provider. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_flexible',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the final price depends on the shipping method. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_parameters',
      type: {
        kind: 'api-type',
        name: 'SuggestedPostParameters',
      },
      description: {
        markdown: 'An object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards). If empty, one \'Pay `total price`\' button will be shown. If not empty, the first button must be a Pay button.',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const createInvoiceLink: ApiMethod = {
  name: 'createInvoiceLink',
  description: {
    markdown: 'Use this method to create a link for an invoice. Returns the created invoice link as _String_ on success.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the link will be created. For payments in [Telegram Stars](https://t.me/BotNews/90) only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Product name, 1-32 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Product description, 1-255 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'payload',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'provider_token',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Payment provider token, obtained via [@BotFather](https://t.me/botfather). Pass an empty string for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'currency',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies). Pass “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'prices',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'LabeledPrice',
        },
      },
      description: {
        markdown: 'Price breakdown, an array of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: true,
      jsonSerialized: true,
    },
    {
      name: 'subscription_period',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'max_tip_amount',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum accepted amount for tips in the _smallest units_ of the currency (integer, **not** float/double). For example, for a maximum tip of `US$ 1.45` pass `max_tip_amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_tip_amounts',
      type: {
        kind: 'array',
        of: {
          kind: 'int32',
        },
      },
      description: {
        markdown: 'An array of suggested amounts of tips in the _smallest units_ of the currency (integer, **not** float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed _max\\_tip\\_amount_.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'provider_data',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_url',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_size',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Photo size in bytes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_width',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Photo width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_height',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Photo height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_name',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s full name to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_phone_number',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s phone number to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_email',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s email address to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'need_shipping_address',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if you require the user\'s shipping address to complete the order. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_phone_number_to_provider',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the user\'s phone number should be sent to the provider. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_email_to_provider',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the user\'s email address should be sent to the provider. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_flexible',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the final price depends on the shipping method. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const answerShippingQuery: ApiMethod = {
  name: 'answerShippingQuery',
  description: {
    markdown: 'If you sent an invoice requesting a shipping address and the parameter _is\\_flexible_ was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a _shipping\\_query_ field to the bot. Use this method to reply to shipping queries. On success, _True_ is returned.',
  },
  parameters: [
    {
      name: 'shipping_query_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier for the query to be answered',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'ok',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if delivery to the specified address is possible and _False_ if there are any problems (for example, if delivery to the specified address is not possible)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'shipping_options',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'ShippingOption',
        },
      },
      description: {
        markdown: 'Required if _ok_ is _True_. An array of available shipping options.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'error_message',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _ok_ is _False_. Error message in human readable form that explains why it is impossible to complete the order (e.g. “Sorry, delivery to your desired address is unavailable”). Telegram will display this message to the user.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const answerPreCheckoutQuery: ApiMethod = {
  name: 'answerPreCheckoutQuery',
  description: {
    markdown: 'Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api#update) with the field _pre\\_checkout\\_query_. Use this method to respond to such pre-checkout queries. On success, _True_ is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.',
  },
  parameters: [
    {
      name: 'pre_checkout_query_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier for the query to be answered',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'ok',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Specify _True_ if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use _False_ if there are any problems.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'error_message',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _ok_ is _False_. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getMyStarBalance: ApiMethod = {
  name: 'getMyStarBalance',
  description: {
    markdown: 'A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a [StarAmount](https://core.telegram.org/bots/api#staramount) object.',
  },
  parameters: [],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getStarTransactions: ApiMethod = {
  name: 'getStarTransactions',
  description: {
    markdown: 'Returns the bot\'s Telegram Star transactions in chronological order. On success, returns a [StarTransactions](https://core.telegram.org/bots/api#startransactions) object.',
  },
  parameters: [
    {
      name: 'offset',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Number of transactions to skip in the response',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'limit',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const refundStarPayment: ApiMethod = {
  name: 'refundStarPayment',
  description: {
    markdown: 'Refunds a successful payment in [Telegram Stars](https://t.me/BotNews/90). Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the user whose payment will be refunded',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'telegram_payment_charge_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Telegram payment identifier',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const editUserStarSubscription: ApiMethod = {
  name: 'editUserStarSubscription',
  description: {
    markdown: 'Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns _True_ on success.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Identifier of the user whose subscription will be edited',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'telegram_payment_charge_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Telegram payment identifier for the subscription',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_canceled',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass _False_ to allow the user to re-enable a subscription that was previously canceled by the bot.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setPassportDataErrors: ApiMethod = {
  name: 'setPassportDataErrors',
  description: {
    markdown: 'Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns _True_ on success.  \nUse this if the data submitted by the user doesn\'t satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'User identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'errors',
      type: {
        kind: 'array',
        of: {
          kind: 'api-type',
          name: 'PassportElementError',
        },
      },
      description: {
        markdown: 'An array describing the errors',
      },
      required: true,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const sendGame: ApiMethod = {
  name: 'sendGame',
  description: {
    markdown: 'Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.',
  },
  parameters: [
    {
      name: 'business_connection_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection on behalf of which the message will be sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target chat. Games can\'t be sent to channel direct messages chats and channel chats.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the target message thread (topic) of the forum; for forum supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'game_short_name',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Short name of the game, serves as the unique identifier for the game. Set up your games via [@BotFather](https://t.me/botfather).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'disable_notification',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'protect_content',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Protects the contents of the sent message from forwarding and saving',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_paid_broadcast',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to allow up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot\'s balance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_effect_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect to be added to the message; for private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_parameters',
      type: {
        kind: 'api-type',
        name: 'ReplyParameters',
      },
      description: {
        markdown: 'Description of the message to reply to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        kind: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'An object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards). If empty, one \'Play game\\_title\' button will be shown. If not empty, the first button must launch the game.',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const setGameScore: ApiMethod = {
  name: 'setGameScore',
  description: {
    markdown: 'Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned. Returns an error, if the new score is not greater than the user\'s current score in the chat and _force_ is _False_.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'User identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'score',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'New score, must be non-negative',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'force',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_edit_message',
      type: {
        kind: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the game message should not be automatically edited to include the current scoreboard',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the sent message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

const getGameHighScores: ApiMethod = {
  name: 'getGameHighScores',
  description: {
    markdown: 'Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of [GameHighScore](https://core.telegram.org/bots/api#gamehighscore) objects.  \n\nThis method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.',
  },
  parameters: [
    {
      name: 'user_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Target user id',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Unique identifier for the target chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        kind: 'int32',
      },
      description: {
        markdown: 'Required if _inline\\_message\\_id_ is not specified. Identifier of the sent message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        kind: 'str',
      },
      description: {
        markdown: 'Required if _chat\\_id_ and _message\\_id_ are not specified. Identifier of the inline message',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
  returnType: {
    kind: 'bool',
    literal: false,
  },
}

/**
 * Definition of all Bot API methods as an object.
 */
export const object = {
  getUpdates,
  setWebhook,
  deleteWebhook,
  getWebhookInfo,
  getMe,
  logOut,
  close,
  sendMessage,
  forwardMessage,
  forwardMessages,
  copyMessage,
  copyMessages,
  sendPhoto,
  sendAudio,
  sendDocument,
  sendVideo,
  sendAnimation,
  sendVoice,
  sendVideoNote,
  sendPaidMedia,
  sendMediaGroup,
  sendLocation,
  sendVenue,
  sendContact,
  sendPoll,
  sendChecklist,
  sendDice,
  sendChatAction,
  setMessageReaction,
  getUserProfilePhotos,
  setUserEmojiStatus,
  getFile,
  banChatMember,
  unbanChatMember,
  restrictChatMember,
  promoteChatMember,
  setChatAdministratorCustomTitle,
  banChatSenderChat,
  unbanChatSenderChat,
  setChatPermissions,
  exportChatInviteLink,
  createChatInviteLink,
  editChatInviteLink,
  createChatSubscriptionInviteLink,
  editChatSubscriptionInviteLink,
  revokeChatInviteLink,
  approveChatJoinRequest,
  declineChatJoinRequest,
  setChatPhoto,
  deleteChatPhoto,
  setChatTitle,
  setChatDescription,
  pinChatMessage,
  unpinChatMessage,
  unpinAllChatMessages,
  leaveChat,
  getChat,
  getChatAdministrators,
  getChatMemberCount,
  getChatMember,
  setChatStickerSet,
  deleteChatStickerSet,
  getForumTopicIconStickers,
  createForumTopic,
  editForumTopic,
  closeForumTopic,
  reopenForumTopic,
  deleteForumTopic,
  unpinAllForumTopicMessages,
  editGeneralForumTopic,
  closeGeneralForumTopic,
  reopenGeneralForumTopic,
  hideGeneralForumTopic,
  unhideGeneralForumTopic,
  unpinAllGeneralForumTopicMessages,
  answerCallbackQuery,
  getUserChatBoosts,
  getBusinessConnection,
  setMyCommands,
  deleteMyCommands,
  getMyCommands,
  setMyName,
  getMyName,
  setMyDescription,
  getMyDescription,
  setMyShortDescription,
  getMyShortDescription,
  setChatMenuButton,
  getChatMenuButton,
  setMyDefaultAdministratorRights,
  getMyDefaultAdministratorRights,
  getAvailableGifts,
  sendGift,
  giftPremiumSubscription,
  verifyUser,
  verifyChat,
  removeUserVerification,
  removeChatVerification,
  readBusinessMessage,
  deleteBusinessMessages,
  setBusinessAccountName,
  setBusinessAccountUsername,
  setBusinessAccountBio,
  setBusinessAccountProfilePhoto,
  removeBusinessAccountProfilePhoto,
  setBusinessAccountGiftSettings,
  getBusinessAccountStarBalance,
  transferBusinessAccountStars,
  getBusinessAccountGifts,
  convertGiftToStars,
  upgradeGift,
  transferGift,
  postStory,
  editStory,
  deleteStory,
  editMessageText,
  editMessageCaption,
  editMessageMedia,
  editMessageLiveLocation,
  stopMessageLiveLocation,
  editMessageChecklist,
  editMessageReplyMarkup,
  stopPoll,
  approveSuggestedPost,
  declineSuggestedPost,
  deleteMessage,
  deleteMessages,
  sendSticker,
  getStickerSet,
  getCustomEmojiStickers,
  uploadStickerFile,
  createNewStickerSet,
  addStickerToSet,
  setStickerPositionInSet,
  deleteStickerFromSet,
  replaceStickerInSet,
  setStickerEmojiList,
  setStickerKeywords,
  setStickerMaskPosition,
  setStickerSetTitle,
  setStickerSetThumbnail,
  setCustomEmojiStickerSetThumbnail,
  deleteStickerSet,
  answerInlineQuery,
  answerWebAppQuery,
  savePreparedInlineMessage,
  sendInvoice,
  createInvoiceLink,
  answerShippingQuery,
  answerPreCheckoutQuery,
  getMyStarBalance,
  getStarTransactions,
  refundStarPayment,
  editUserStarSubscription,
  setPassportDataErrors,
  sendGame,
  setGameScore,
  getGameHighScores,
}

/**
 * Definition of all Bot API methods as an array.
 * Order is the same as they appear in the official docs.
 */
export const array = [
  getUpdates,
  setWebhook,
  deleteWebhook,
  getWebhookInfo,
  getMe,
  logOut,
  close,
  sendMessage,
  forwardMessage,
  forwardMessages,
  copyMessage,
  copyMessages,
  sendPhoto,
  sendAudio,
  sendDocument,
  sendVideo,
  sendAnimation,
  sendVoice,
  sendVideoNote,
  sendPaidMedia,
  sendMediaGroup,
  sendLocation,
  sendVenue,
  sendContact,
  sendPoll,
  sendChecklist,
  sendDice,
  sendChatAction,
  setMessageReaction,
  getUserProfilePhotos,
  setUserEmojiStatus,
  getFile,
  banChatMember,
  unbanChatMember,
  restrictChatMember,
  promoteChatMember,
  setChatAdministratorCustomTitle,
  banChatSenderChat,
  unbanChatSenderChat,
  setChatPermissions,
  exportChatInviteLink,
  createChatInviteLink,
  editChatInviteLink,
  createChatSubscriptionInviteLink,
  editChatSubscriptionInviteLink,
  revokeChatInviteLink,
  approveChatJoinRequest,
  declineChatJoinRequest,
  setChatPhoto,
  deleteChatPhoto,
  setChatTitle,
  setChatDescription,
  pinChatMessage,
  unpinChatMessage,
  unpinAllChatMessages,
  leaveChat,
  getChat,
  getChatAdministrators,
  getChatMemberCount,
  getChatMember,
  setChatStickerSet,
  deleteChatStickerSet,
  getForumTopicIconStickers,
  createForumTopic,
  editForumTopic,
  closeForumTopic,
  reopenForumTopic,
  deleteForumTopic,
  unpinAllForumTopicMessages,
  editGeneralForumTopic,
  closeGeneralForumTopic,
  reopenGeneralForumTopic,
  hideGeneralForumTopic,
  unhideGeneralForumTopic,
  unpinAllGeneralForumTopicMessages,
  answerCallbackQuery,
  getUserChatBoosts,
  getBusinessConnection,
  setMyCommands,
  deleteMyCommands,
  getMyCommands,
  setMyName,
  getMyName,
  setMyDescription,
  getMyDescription,
  setMyShortDescription,
  getMyShortDescription,
  setChatMenuButton,
  getChatMenuButton,
  setMyDefaultAdministratorRights,
  getMyDefaultAdministratorRights,
  getAvailableGifts,
  sendGift,
  giftPremiumSubscription,
  verifyUser,
  verifyChat,
  removeUserVerification,
  removeChatVerification,
  readBusinessMessage,
  deleteBusinessMessages,
  setBusinessAccountName,
  setBusinessAccountUsername,
  setBusinessAccountBio,
  setBusinessAccountProfilePhoto,
  removeBusinessAccountProfilePhoto,
  setBusinessAccountGiftSettings,
  getBusinessAccountStarBalance,
  transferBusinessAccountStars,
  getBusinessAccountGifts,
  convertGiftToStars,
  upgradeGift,
  transferGift,
  postStory,
  editStory,
  deleteStory,
  editMessageText,
  editMessageCaption,
  editMessageMedia,
  editMessageLiveLocation,
  stopMessageLiveLocation,
  editMessageChecklist,
  editMessageReplyMarkup,
  stopPoll,
  approveSuggestedPost,
  declineSuggestedPost,
  deleteMessage,
  deleteMessages,
  sendSticker,
  getStickerSet,
  getCustomEmojiStickers,
  uploadStickerFile,
  createNewStickerSet,
  addStickerToSet,
  setStickerPositionInSet,
  deleteStickerFromSet,
  replaceStickerInSet,
  setStickerEmojiList,
  setStickerKeywords,
  setStickerMaskPosition,
  setStickerSetTitle,
  setStickerSetThumbnail,
  setCustomEmojiStickerSetThumbnail,
  deleteStickerSet,
  answerInlineQuery,
  answerWebAppQuery,
  savePreparedInlineMessage,
  sendInvoice,
  createInvoiceLink,
  answerShippingQuery,
  answerPreCheckoutQuery,
  getMyStarBalance,
  getStarTransactions,
  refundStarPayment,
  editUserStarSubscription,
  setPassportDataErrors,
  sendGame,
  setGameScore,
  getGameHighScores,
]
