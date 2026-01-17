/**
 * This module contains all types specified in the Bot API.
 *
 * @module
 */

import type { ApiType } from '../types.ts'

// No-op identity function to fix "circular dependency" type error.
// See: https://github.com/grom-dev/bot-api-spec/pull/7
const t = (apiType: ApiType): ApiType => apiType

const Update = t({
  name: 'Update',
  description: {
    markdown: 'This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.\n\nAt most **one** of the optional parameters can be present in any given update.',
  },
  fields: [
    {
      name: 'update_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The update\'s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you\'re using [webhooks](https://core.telegram.org/bots/api#setwebhook), since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'New incoming message of any kind - text, photo, sticker, etc.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'edited_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'channel_post',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'New incoming channel post of any kind - text, photo, sticker, etc.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'edited_channel_post',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'business_connection',
      type: {
        type: 'api-type',
        name: 'BusinessConnection',
      },
      description: {
        markdown: 'The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'business_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'New message from a connected business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'edited_business_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'New version of a message from a connected business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'deleted_business_messages',
      type: {
        type: 'api-type',
        name: 'BusinessMessagesDeleted',
      },
      description: {
        markdown: 'Messages were deleted from a connected business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_reaction',
      type: {
        type: 'api-type',
        name: 'MessageReactionUpdated',
      },
      description: {
        markdown: 'A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify `"message_reaction"` in the list of _allowed\\_updates_ to receive these updates. The update isn\'t received for reactions set by bots.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_reaction_count',
      type: {
        type: 'api-type',
        name: 'MessageReactionCountUpdated',
      },
      description: {
        markdown: 'Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify `"message_reaction_count"` in the list of _allowed\\_updates_ to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_query',
      type: {
        type: 'api-type',
        name: 'InlineQuery',
      },
      description: {
        markdown: 'New incoming [inline](https://core.telegram.org/bots/api#inline-mode) query',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chosen_inline_result',
      type: {
        type: 'api-type',
        name: 'ChosenInlineResult',
      },
      description: {
        markdown: 'The result of an [inline](https://core.telegram.org/bots/api#inline-mode) query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'callback_query',
      type: {
        type: 'api-type',
        name: 'CallbackQuery',
      },
      description: {
        markdown: 'New incoming callback query',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'shipping_query',
      type: {
        type: 'api-type',
        name: 'ShippingQuery',
      },
      description: {
        markdown: 'New incoming shipping query. Only for invoices with flexible price',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'pre_checkout_query',
      type: {
        type: 'api-type',
        name: 'PreCheckoutQuery',
      },
      description: {
        markdown: 'New incoming pre-checkout query. Contains full information about checkout',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'purchased_paid_media',
      type: {
        type: 'api-type',
        name: 'PaidMediaPurchased',
      },
      description: {
        markdown: 'A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'poll',
      type: {
        type: 'api-type',
        name: 'Poll',
      },
      description: {
        markdown: 'New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'poll_answer',
      type: {
        type: 'api-type',
        name: 'PollAnswer',
      },
      description: {
        markdown: 'A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'my_chat_member',
      type: {
        type: 'api-type',
        name: 'ChatMemberUpdated',
      },
      description: {
        markdown: 'The bot\'s chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_member',
      type: {
        type: 'api-type',
        name: 'ChatMemberUpdated',
      },
      description: {
        markdown: 'A chat member\'s status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify `"chat_member"` in the list of _allowed\\_updates_ to receive these updates.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_join_request',
      type: {
        type: 'api-type',
        name: 'ChatJoinRequest',
      },
      description: {
        markdown: 'A request to join the chat has been sent. The bot must have the _can\\_invite\\_users_ administrator right in the chat to receive these updates.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_boost',
      type: {
        type: 'api-type',
        name: 'ChatBoostUpdated',
      },
      description: {
        markdown: 'A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'removed_chat_boost',
      type: {
        type: 'api-type',
        name: 'ChatBoostRemoved',
      },
      description: {
        markdown: 'A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const WebhookInfo = t({
  name: 'WebhookInfo',
  description: {
    markdown: 'Describes the current status of a webhook.',
  },
  fields: [
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Webhook URL, may be empty if webhook is not set up',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'has_custom_certificate',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if a custom certificate was provided for webhook certificate checks',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'pending_update_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of updates awaiting delivery',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'ip_address',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Currently used webhook IP address',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'last_error_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unix time for the most recent error that happened when trying to deliver an update via webhook',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'last_error_message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'last_synchronization_error_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'max_connections',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allowed_updates',
      type: {
        type: 'array',
        of: {
          type: 'str',
        },
      },
      description: {
        markdown: 'A list of update types the bot is subscribed to. Defaults to all update types except _chat\\_member_',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const User = t({
  name: 'User',
  description: {
    markdown: 'This object represents a Telegram user or bot.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Unique identifier for this user or bot.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_bot',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if this user is a bot',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'first_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User\'s or bot\'s first name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'last_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User\'s or bot\'s last name',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'username',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User\'s or bot\'s username',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'language_code',
      type: {
        type: 'str',
      },
      description: {
        markdown: '[IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user\'s language',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_premium',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if this user is a Telegram Premium user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'added_to_attachment_menu',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if this user added the bot to the attachment menu',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_join_groups',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the bot can be invited to groups. Returned only in [getMe](https://core.telegram.org/bots/api#getme).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_read_all_group_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if [privacy mode](https://core.telegram.org/bots/features#privacy-mode) is disabled for the bot. Returned only in [getMe](https://core.telegram.org/bots/api#getme).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'supports_inline_queries',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the bot supports inline queries. Returned only in [getMe](https://core.telegram.org/bots/api#getme).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_connect_to_business',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in [getMe](https://core.telegram.org/bots/api#getme).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_main_web_app',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the bot has a main Web App. Returned only in [getMe](https://core.telegram.org/bots/api#getme).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_topics_enabled',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the bot has forum topic mode enabled in private chats. Returned only in [getMe](https://core.telegram.org/bots/api#getme).',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Chat = t({
  name: 'Chat',
  description: {
    markdown: 'This object represents a chat.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Unique identifier for this chat.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the chat, can be either “private”, “group”, “supergroup” or “channel”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title, for supergroups, channels and group chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'username',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Username, for private chats, supergroups and channels if available',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'first_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'First name of the other party in a private chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'last_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Last name of the other party in a private chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_forum',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the supergroup chat is a forum (has [topics](https://telegram.org/blog/topics-in-groups-collectible-usernames#topics-in-groups) enabled)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_direct_messages',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the chat is the direct messages chat of a channel',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatFullInfo = t({
  name: 'ChatFullInfo',
  description: {
    markdown: 'This object contains full information about a chat.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Unique identifier for this chat.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the chat, can be either “private”, “group”, “supergroup” or “channel”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title, for supergroups, channels and group chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'username',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Username, for private chats, supergroups and channels if available',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'first_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'First name of the other party in a private chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'last_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Last name of the other party in a private chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_forum',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the supergroup chat is a forum (has [topics](https://telegram.org/blog/topics-in-groups-collectible-usernames#topics-in-groups) enabled)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_direct_messages',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the chat is the direct messages chat of a channel',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'accent_color_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See [accent colors](https://core.telegram.org/bots/api#accent-colors) for more details.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'max_reaction_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The maximum number of reactions that can be set on a message in the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'api-type',
        name: 'ChatPhoto',
      },
      description: {
        markdown: 'Chat photo',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'active_usernames',
      type: {
        type: 'array',
        of: {
          type: 'str',
        },
      },
      description: {
        markdown: 'If non-empty, the list of all [active chat usernames](https://telegram.org/blog/topics-in-groups-collectible-usernames#collectible-usernames); for private chats, supergroups and channels',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'birthdate',
      type: {
        type: 'api-type',
        name: 'Birthdate',
      },
      description: {
        markdown: 'For private chats, the date of birth of the user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'business_intro',
      type: {
        type: 'api-type',
        name: 'BusinessIntro',
      },
      description: {
        markdown: 'For private chats with business accounts, the intro of the business',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'business_location',
      type: {
        type: 'api-type',
        name: 'BusinessLocation',
      },
      description: {
        markdown: 'For private chats with business accounts, the location of the business',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'business_opening_hours',
      type: {
        type: 'api-type',
        name: 'BusinessOpeningHours',
      },
      description: {
        markdown: 'For private chats with business accounts, the opening hours of the business',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'personal_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'For private chats, the personal channel of the user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parent_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Information about the corresponding channel chat; for direct messages chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'available_reactions',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'ReactionType',
        },
      },
      description: {
        markdown: 'List of available reactions allowed in the chat. If omitted, then all [emoji reactions](https://core.telegram.org/bots/api#reactiontypeemoji) are allowed.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'background_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'profile_accent_color_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the accent color for the chat\'s profile background. See [profile accent colors](https://core.telegram.org/bots/api#profile-accent-colors) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'profile_background_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier of the emoji chosen by the chat for its profile background',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'emoji_status_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier of the emoji status of the chat or the other party in a private chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'emoji_status_expiration_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'bio',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bio of the other party in a private chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_private_forwards',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if privacy settings of the other party in the private chat allows to use `tg://user?id=<user_id>` links only in chats with the user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_restricted_voice_and_video_messages',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the privacy settings of the other party restrict sending voice and video note messages in the private chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'join_to_send_messages',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if users need to join the supergroup before they can send messages',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'join_by_request',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Description, for groups, supergroups and channel chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'invite_link',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Primary invite link, for groups, supergroups and channel chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'pinned_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'The most recent pinned message (by sending date)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'permissions',
      type: {
        type: 'api-type',
        name: 'ChatPermissions',
      },
      description: {
        markdown: 'Default chat member permissions, for groups and supergroups',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'accepted_gift_types',
      type: {
        type: 'api-type',
        name: 'AcceptedGiftTypes',
      },
      description: {
        markdown: 'Information about types of gifts that are accepted by the chat or by the corresponding user for private chats',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_paid_media',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'slow_mode_delay',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'unrestrict_boost_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_auto_delete_time',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The time after which all messages sent to the chat will be automatically deleted; in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_aggressive_anti_spam_enabled',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_hidden_members',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if non-administrators can only get the list of bots and administrators in the chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_protected_content',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if messages from the chat can\'t be forwarded to other chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_visible_history',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if new chat members will have access to old messages; available only to chat administrators',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sticker_set_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For supergroups, name of the group sticker set',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_set_sticker_set',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can change the group sticker set',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'custom_emoji_sticker_set_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For supergroups, the name of the group\'s custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'linked_chat_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'ChatLocation',
      },
      description: {
        markdown: 'For supergroups, the location to which the supergroup is connected',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'rating',
      type: {
        type: 'api-type',
        name: 'UserRating',
      },
      description: {
        markdown: 'For private chats, the rating of the user if any',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'unique_gift_colors',
      type: {
        type: 'api-type',
        name: 'UniqueGiftColors',
      },
      description: {
        markdown: 'The color scheme based on a unique gift that must be used for the chat\'s name, message replies and link previews',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'paid_message_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars a general user have to pay to send a message to the chat',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Message = t({
  name: 'Message',
  description: {
    markdown: 'This object represents a message.',
  },
  fields: [
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_thread_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique identifier of a message thread or forum topic to which the message belongs; for supergroups and private chats only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_messages_topic',
      type: {
        type: 'api-type',
        name: 'DirectMessagesTopic',
      },
      description: {
        markdown: 'Information about the direct messages chat topic that contains the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sender_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel\'s discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field _from_ contains a fake sender user in non-channel chats.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sender_boost_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'If the sender of the message boosted the chat, the number of boosts added by the user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sender_business_bot',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the message was sent in Unix time. It is always a positive number, representing a valid date.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'business_connection_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat the message belongs to',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'forward_origin',
      type: {
        type: 'api-type',
        name: 'MessageOrigin',
      },
      description: {
        markdown: 'Information about the original message for forwarded messages',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_topic_message',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the message is sent to a topic in a forum supergroup or a private chat with the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_automatic_forward',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the message is a channel post that was automatically forwarded to the connected discussion group',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_to_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'For replies in the same chat and message thread, the original message. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain further _reply\\_to\\_message_ fields even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'external_reply',
      type: {
        type: 'api-type',
        name: 'ExternalReplyInfo',
      },
      description: {
        markdown: 'Information about the message that is being replied to, which may come from another chat or forum topic',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'quote',
      type: {
        type: 'api-type',
        name: 'TextQuote',
      },
      description: {
        markdown: 'For replies that quote part of the original message, the quoted part of the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_to_story',
      type: {
        type: 'api-type',
        name: 'Story',
      },
      description: {
        markdown: 'For replies to a story, the original story',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_to_checklist_task_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the specific checklist task that is being replied to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'via_bot',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Bot through which the message was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'edit_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the message was last edited in Unix time',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_protected_content',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the message can\'t be forwarded',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_from_offline',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_paid_post',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the message is a paid post. Note that such posts must not be deleted for 24 hours to receive the payment and can\'t be edited.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'media_group_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The unique identifier of a media message group this message belongs to',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'author_signature',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Signature of the post author for messages in channels, or the custom title of an anonymous group administrator',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'paid_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars that were paid by the sender of the message to send it',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For text messages, the actual UTF-8 text of the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'link_preview_options',
      type: {
        type: 'api-type',
        name: 'LinkPreviewOptions',
      },
      description: {
        markdown: 'Options used for link preview generation for the message, if it is a text message and link preview options were changed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_info',
      type: {
        type: 'api-type',
        name: 'SuggestedPostInfo',
      },
      description: {
        markdown: 'Information about suggested post parameters if the message is a suggested post in a channel direct messages chat. If the message is an approved or declined suggested post, then it can\'t be edited.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'effect_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the message effect added to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'animation',
      type: {
        type: 'api-type',
        name: 'Animation',
      },
      description: {
        markdown: 'Message is an animation, information about the animation. For backward compatibility, when this field is set, the _document_ field will also be set',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'audio',
      type: {
        type: 'api-type',
        name: 'Audio',
      },
      description: {
        markdown: 'Message is an audio file, information about the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'document',
      type: {
        type: 'api-type',
        name: 'Document',
      },
      description: {
        markdown: 'Message is a general file, information about the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'paid_media',
      type: {
        type: 'api-type',
        name: 'PaidMediaInfo',
      },
      description: {
        markdown: 'Message contains paid media; information about the paid media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'Message is a photo, available sizes of the photo',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        type: 'api-type',
        name: 'Sticker',
      },
      description: {
        markdown: 'Message is a sticker, information about the sticker',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'story',
      type: {
        type: 'api-type',
        name: 'Story',
      },
      description: {
        markdown: 'Message is a forwarded story',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video',
      type: {
        type: 'api-type',
        name: 'Video',
      },
      description: {
        markdown: 'Message is a video, information about the video',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_note',
      type: {
        type: 'api-type',
        name: 'VideoNote',
      },
      description: {
        markdown: 'Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'voice',
      type: {
        type: 'api-type',
        name: 'Voice',
      },
      description: {
        markdown: 'Message is a voice message, information about the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption for the animation, audio, document, paid media, photo, video or voice',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_media_spoiler',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the message media is covered by a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'checklist',
      type: {
        type: 'api-type',
        name: 'Checklist',
      },
      description: {
        markdown: 'Message is a checklist',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'contact',
      type: {
        type: 'api-type',
        name: 'Contact',
      },
      description: {
        markdown: 'Message is a shared contact, information about the contact',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'dice',
      type: {
        type: 'api-type',
        name: 'Dice',
      },
      description: {
        markdown: 'Message is a dice with random value',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'game',
      type: {
        type: 'api-type',
        name: 'Game',
      },
      description: {
        markdown: 'Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'poll',
      type: {
        type: 'api-type',
        name: 'Poll',
      },
      description: {
        markdown: 'Message is a native poll, information about the poll',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'venue',
      type: {
        type: 'api-type',
        name: 'Venue',
      },
      description: {
        markdown: 'Message is a venue, information about the venue. For backward compatibility, when this field is set, the _location_ field will also be set',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'Location',
      },
      description: {
        markdown: 'Message is a shared location, information about the location',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'new_chat_members',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'User',
        },
      },
      description: {
        markdown: 'New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'left_chat_member',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'A member was removed from the group, information about them (this member may be the bot itself)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'new_chat_title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A chat title was changed to this value',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'new_chat_photo',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'A chat photo was change to this value',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'delete_chat_photo',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: 'Service message: the chat photo was deleted',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'group_chat_created',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: 'Service message: the group has been created',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'supergroup_chat_created',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: 'Service message: the supergroup has been created. This field can\'t be received in a message coming through updates, because bot can\'t be a member of a supergroup when it is created. It can only be found in reply\\_to\\_message if someone replies to a very first message in a directly created supergroup.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'channel_chat_created',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: 'Service message: the channel has been created. This field can\'t be received in a message coming through updates, because bot can\'t be a member of a channel when it is created. It can only be found in reply\\_to\\_message if someone replies to a very first message in a channel.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_auto_delete_timer_changed',
      type: {
        type: 'api-type',
        name: 'MessageAutoDeleteTimerChanged',
      },
      description: {
        markdown: 'Service message: auto-delete timer settings changed in the chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'migrate_to_chat_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'The group has been migrated to a supergroup with the specified identifier.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'migrate_from_chat_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'The supergroup has been migrated from a group with the specified identifier.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'pinned_message',
      type: {
        type: 'api-type',
        name: 'MaybeInaccessibleMessage',
      },
      description: {
        markdown: 'Specified message was pinned. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain further _reply\\_to\\_message_ fields even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'invoice',
      type: {
        type: 'api-type',
        name: 'Invoice',
      },
      description: {
        markdown: 'Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments), information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'successful_payment',
      type: {
        type: 'api-type',
        name: 'SuccessfulPayment',
      },
      description: {
        markdown: 'Message is a service message about a successful payment, information about the payment. [More about payments »](https://core.telegram.org/bots/api#payments)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'refunded_payment',
      type: {
        type: 'api-type',
        name: 'RefundedPayment',
      },
      description: {
        markdown: 'Message is a service message about a refunded payment, information about the payment. [More about payments »](https://core.telegram.org/bots/api#payments)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'users_shared',
      type: {
        type: 'api-type',
        name: 'UsersShared',
      },
      description: {
        markdown: 'Service message: users were shared with the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_shared',
      type: {
        type: 'api-type',
        name: 'ChatShared',
      },
      description: {
        markdown: 'Service message: a chat was shared with the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'gift',
      type: {
        type: 'api-type',
        name: 'GiftInfo',
      },
      description: {
        markdown: 'Service message: a regular gift was sent or received',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'unique_gift',
      type: {
        type: 'api-type',
        name: 'UniqueGiftInfo',
      },
      description: {
        markdown: 'Service message: a unique gift was sent or received',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'gift_upgrade_sent',
      type: {
        type: 'api-type',
        name: 'GiftInfo',
      },
      description: {
        markdown: 'Service message: upgrade of a gift was purchased after the gift was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'connected_website',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The domain name of the website on which the user has logged in. [More about Telegram Login »](https://core.telegram.org/widgets/login)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'write_access_allowed',
      type: {
        type: 'api-type',
        name: 'WriteAccessAllowed',
      },
      description: {
        markdown: 'Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'passport_data',
      type: {
        type: 'api-type',
        name: 'PassportData',
      },
      description: {
        markdown: 'Telegram Passport data',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'proximity_alert_triggered',
      type: {
        type: 'api-type',
        name: 'ProximityAlertTriggered',
      },
      description: {
        markdown: 'Service message. A user in the chat triggered another user\'s proximity alert while sharing Live Location.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'boost_added',
      type: {
        type: 'api-type',
        name: 'ChatBoostAdded',
      },
      description: {
        markdown: 'Service message: user boosted the chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_background_set',
      type: {
        type: 'api-type',
        name: 'ChatBackground',
      },
      description: {
        markdown: 'Service message: chat background set',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'checklist_tasks_done',
      type: {
        type: 'api-type',
        name: 'ChecklistTasksDone',
      },
      description: {
        markdown: 'Service message: some tasks in a checklist were marked as done or not done',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'checklist_tasks_added',
      type: {
        type: 'api-type',
        name: 'ChecklistTasksAdded',
      },
      description: {
        markdown: 'Service message: tasks were added to a checklist',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'direct_message_price_changed',
      type: {
        type: 'api-type',
        name: 'DirectMessagePriceChanged',
      },
      description: {
        markdown: 'Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'forum_topic_created',
      type: {
        type: 'api-type',
        name: 'ForumTopicCreated',
      },
      description: {
        markdown: 'Service message: forum topic created',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'forum_topic_edited',
      type: {
        type: 'api-type',
        name: 'ForumTopicEdited',
      },
      description: {
        markdown: 'Service message: forum topic edited',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'forum_topic_closed',
      type: {
        type: 'api-type',
        name: 'ForumTopicClosed',
      },
      description: {
        markdown: 'Service message: forum topic closed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'forum_topic_reopened',
      type: {
        type: 'api-type',
        name: 'ForumTopicReopened',
      },
      description: {
        markdown: 'Service message: forum topic reopened',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'general_forum_topic_hidden',
      type: {
        type: 'api-type',
        name: 'GeneralForumTopicHidden',
      },
      description: {
        markdown: 'Service message: the \'General\' forum topic hidden',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'general_forum_topic_unhidden',
      type: {
        type: 'api-type',
        name: 'GeneralForumTopicUnhidden',
      },
      description: {
        markdown: 'Service message: the \'General\' forum topic unhidden',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'giveaway_created',
      type: {
        type: 'api-type',
        name: 'GiveawayCreated',
      },
      description: {
        markdown: 'Service message: a scheduled giveaway was created',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'giveaway',
      type: {
        type: 'api-type',
        name: 'Giveaway',
      },
      description: {
        markdown: 'The message is a scheduled giveaway message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'giveaway_winners',
      type: {
        type: 'api-type',
        name: 'GiveawayWinners',
      },
      description: {
        markdown: 'A giveaway with public winners was completed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'giveaway_completed',
      type: {
        type: 'api-type',
        name: 'GiveawayCompleted',
      },
      description: {
        markdown: 'Service message: a giveaway without public winners was completed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'paid_message_price_changed',
      type: {
        type: 'api-type',
        name: 'PaidMessagePriceChanged',
      },
      description: {
        markdown: 'Service message: the price for paid messages has changed in the chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_approved',
      type: {
        type: 'api-type',
        name: 'SuggestedPostApproved',
      },
      description: {
        markdown: 'Service message: a suggested post was approved',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_approval_failed',
      type: {
        type: 'api-type',
        name: 'SuggestedPostApprovalFailed',
      },
      description: {
        markdown: 'Service message: approval of a suggested post has failed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_declined',
      type: {
        type: 'api-type',
        name: 'SuggestedPostDeclined',
      },
      description: {
        markdown: 'Service message: a suggested post was declined',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_paid',
      type: {
        type: 'api-type',
        name: 'SuggestedPostPaid',
      },
      description: {
        markdown: 'Service message: payment for a suggested post was received',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'suggested_post_refunded',
      type: {
        type: 'api-type',
        name: 'SuggestedPostRefunded',
      },
      description: {
        markdown: 'Service message: payment for a suggested post was refunded',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_chat_scheduled',
      type: {
        type: 'api-type',
        name: 'VideoChatScheduled',
      },
      description: {
        markdown: 'Service message: video chat scheduled',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_chat_started',
      type: {
        type: 'api-type',
        name: 'VideoChatStarted',
      },
      description: {
        markdown: 'Service message: video chat started',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_chat_ended',
      type: {
        type: 'api-type',
        name: 'VideoChatEnded',
      },
      description: {
        markdown: 'Service message: video chat ended',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_chat_participants_invited',
      type: {
        type: 'api-type',
        name: 'VideoChatParticipantsInvited',
      },
      description: {
        markdown: 'Service message: new participants invited to a video chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'web_app_data',
      type: {
        type: 'api-type',
        name: 'WebAppData',
      },
      description: {
        markdown: 'Service message: data sent by a Web App',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'Inline keyboard attached to the message. `login_url` buttons are represented as ordinary `url` buttons.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const MessageId = t({
  name: 'MessageId',
  description: {
    markdown: 'This object represents a unique message identifier.',
  },
  fields: [
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const InaccessibleMessage = t({
  name: 'InaccessibleMessage',
  description: {
    markdown: 'This object describes a message that was deleted or is otherwise inaccessible to the bot.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat the message belonged to',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique message identifier inside the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Always 0. The field can be used to differentiate regular and inaccessible messages.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MaybeInaccessibleMessage = t({
  name: 'MaybeInaccessibleMessage',
  description: {
    markdown: 'This object describes a message that can be inaccessible to the bot. It can be one of\n\n-   [Message](https://core.telegram.org/bots/api#message)\n-   [InaccessibleMessage](https://core.telegram.org/bots/api#inaccessiblemessage)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'Message',
    },
    {
      type: 'api-type',
      name: 'InaccessibleMessage',
    },
  ],
})

const MessageEntity = t({
  name: 'MessageEntity',
  description: {
    markdown: 'This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the entity. Currently, can be “mention” (`@username`), “hashtag” (`#hashtag` or `#hashtag@chatusername`), “cashtag” (`$USD` or `$USD@chatusername`), “bot\\_command” (`/start@jobs_bot`), “url” (`https://telegram.org`), “email” (`do-not-reply@telegram.org`), “phone\\_number” (`+1-212-555-0123`), “bold” (**bold text**), “italic” (_italic text_), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable\\_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text\\_link” (for clickable text URLs), “text\\_mention” (for users [without usernames](https://telegram.org/blog/edit#new-mentions)), “custom\\_emoji” (for inline custom emoji stickers)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'offset',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Offset in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length) to the start of the entity',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'length',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Length of the entity in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For “text\\_link” only, URL that will be opened after user taps on the text',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'For “text\\_mention” only, the mentioned user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'language',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For “pre” only, the programming language of the entity text',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For “custom\\_emoji” only, unique identifier of the custom emoji. Use [getCustomEmojiStickers](https://core.telegram.org/bots/api#getcustomemojistickers) to get full information about the sticker',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const TextQuote = t({
  name: 'TextQuote',
  description: {
    markdown: 'This object contains information about the quoted part of a message that is replied to by the given message.',
  },
  fields: [
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the quoted part of a message that is replied to by the given message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in the quote. Currently, only _bold_, _italic_, _underline_, _strikethrough_, _spoiler_, and _custom\\_emoji_ entities are kept in quotes.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'position',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Approximate quote position in the original message in UTF-16 code units as specified by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_manual',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ExternalReplyInfo = t({
  name: 'ExternalReplyInfo',
  description: {
    markdown: 'This object contains information about a message that is being replied to, which may come from another chat or forum topic.',
  },
  fields: [
    {
      name: 'origin',
      type: {
        type: 'api-type',
        name: 'MessageOrigin',
      },
      description: {
        markdown: 'Origin of the message replied to by the given message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat the original message belongs to. Available only if the chat is a supergroup or a channel.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'link_preview_options',
      type: {
        type: 'api-type',
        name: 'LinkPreviewOptions',
      },
      description: {
        markdown: 'Options used for link preview generation for the original message, if it is a text message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'animation',
      type: {
        type: 'api-type',
        name: 'Animation',
      },
      description: {
        markdown: 'Message is an animation, information about the animation',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'audio',
      type: {
        type: 'api-type',
        name: 'Audio',
      },
      description: {
        markdown: 'Message is an audio file, information about the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'document',
      type: {
        type: 'api-type',
        name: 'Document',
      },
      description: {
        markdown: 'Message is a general file, information about the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'paid_media',
      type: {
        type: 'api-type',
        name: 'PaidMediaInfo',
      },
      description: {
        markdown: 'Message contains paid media; information about the paid media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'Message is a photo, available sizes of the photo',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        type: 'api-type',
        name: 'Sticker',
      },
      description: {
        markdown: 'Message is a sticker, information about the sticker',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'story',
      type: {
        type: 'api-type',
        name: 'Story',
      },
      description: {
        markdown: 'Message is a forwarded story',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video',
      type: {
        type: 'api-type',
        name: 'Video',
      },
      description: {
        markdown: 'Message is a video, information about the video',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_note',
      type: {
        type: 'api-type',
        name: 'VideoNote',
      },
      description: {
        markdown: 'Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'voice',
      type: {
        type: 'api-type',
        name: 'Voice',
      },
      description: {
        markdown: 'Message is a voice message, information about the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_media_spoiler',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the message media is covered by a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'checklist',
      type: {
        type: 'api-type',
        name: 'Checklist',
      },
      description: {
        markdown: 'Message is a checklist',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'contact',
      type: {
        type: 'api-type',
        name: 'Contact',
      },
      description: {
        markdown: 'Message is a shared contact, information about the contact',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'dice',
      type: {
        type: 'api-type',
        name: 'Dice',
      },
      description: {
        markdown: 'Message is a dice with random value',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'game',
      type: {
        type: 'api-type',
        name: 'Game',
      },
      description: {
        markdown: 'Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'giveaway',
      type: {
        type: 'api-type',
        name: 'Giveaway',
      },
      description: {
        markdown: 'Message is a scheduled giveaway, information about the giveaway',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'giveaway_winners',
      type: {
        type: 'api-type',
        name: 'GiveawayWinners',
      },
      description: {
        markdown: 'A giveaway with public winners was completed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'invoice',
      type: {
        type: 'api-type',
        name: 'Invoice',
      },
      description: {
        markdown: 'Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments), information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'Location',
      },
      description: {
        markdown: 'Message is a shared location, information about the location',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'poll',
      type: {
        type: 'api-type',
        name: 'Poll',
      },
      description: {
        markdown: 'Message is a native poll, information about the poll',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'venue',
      type: {
        type: 'api-type',
        name: 'Venue',
      },
      description: {
        markdown: 'Message is a venue, information about the venue',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ReplyParameters = t({
  name: 'ReplyParameters',
  description: {
    markdown: 'Describes reply parameters for the message that is being sent.',
  },
  fields: [
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the message that will be replied to in the current chat, or in the chat _chat\\_id_ if it is specified',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        type: 'union',
        types: [
          {
            type: 'int32',
          },
          {
            type: 'str',
          },
        ],
      },
      description: {
        markdown: 'If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format `@channelusername`). Not supported for messages sent on behalf of a business account and messages from channel direct messages chats.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_sending_without_reply',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the message should be sent even if the specified message to be replied to is not found. Always _False_ for replies in another chat or forum topic. Always _True_ for messages sent on behalf of a business account.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'quote',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including _bold_, _italic_, _underline_, _strikethrough_, _spoiler_, and _custom\\_emoji_ entities. The message will fail to send if the quote isn\'t found in the original message.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'quote_parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the quote. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'quote_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the quote. It can be specified instead of _quote\\_parse\\_mode_.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'quote_position',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Position of the quote in the original message in UTF-16 code units',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'checklist_task_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the specific checklist task to be replied to',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const MessageOrigin = t({
  name: 'MessageOrigin',
  description: {
    markdown: 'This object describes the origin of a message. It can be one of\n\n-   [MessageOriginUser](https://core.telegram.org/bots/api#messageoriginuser)\n-   [MessageOriginHiddenUser](https://core.telegram.org/bots/api#messageoriginhiddenuser)\n-   [MessageOriginChat](https://core.telegram.org/bots/api#messageoriginchat)\n-   [MessageOriginChannel](https://core.telegram.org/bots/api#messageoriginchannel)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'MessageOriginUser',
    },
    {
      type: 'api-type',
      name: 'MessageOriginHiddenUser',
    },
    {
      type: 'api-type',
      name: 'MessageOriginChat',
    },
    {
      type: 'api-type',
      name: 'MessageOriginChannel',
    },
  ],
})

const MessageOriginUser = t({
  name: 'MessageOriginUser',
  description: {
    markdown: 'The message was originally sent by a known user.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the message origin, always “user”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the message was sent originally in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sender_user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User that sent the message originally',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MessageOriginHiddenUser = t({
  name: 'MessageOriginHiddenUser',
  description: {
    markdown: 'The message was originally sent by an unknown user.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the message origin, always “hidden\\_user”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the message was sent originally in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sender_user_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the user that sent the message originally',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MessageOriginChat = t({
  name: 'MessageOriginChat',
  description: {
    markdown: 'The message was originally sent on behalf of a chat to a group chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the message origin, always “chat”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the message was sent originally in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sender_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat that sent the message originally',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'author_signature',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For messages originally sent by an anonymous chat administrator, original message author signature',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const MessageOriginChannel = t({
  name: 'MessageOriginChannel',
  description: {
    markdown: 'The message was originally sent to a channel chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the message origin, always “channel”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the message was sent originally in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Channel chat to which the message was originally sent',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique message identifier inside the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'author_signature',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Signature of the original post author',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const PhotoSize = t({
  name: 'PhotoSize',
  description: {
    markdown: 'This object represents one size of a photo or a [file](https://core.telegram.org/bots/api#document) / [sticker](https://core.telegram.org/bots/api#sticker) thumbnail.',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Photo width',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Photo height',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'File size in bytes',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Animation = t({
  name: 'Animation',
  description: {
    markdown: 'This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video width as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video height as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Duration of the video in seconds as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'api-type',
        name: 'PhotoSize',
      },
      description: {
        markdown: 'Animation thumbnail as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Original animation filename as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the file as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'File size in bytes.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Audio = t({
  name: 'Audio',
  description: {
    markdown: 'This object represents an audio file to be treated as music by the Telegram clients.',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Duration of the audio in seconds as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'performer',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Performer of the audio as defined by the sender or by audio tags',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the audio as defined by the sender or by audio tags',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Original filename as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the file as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'File size in bytes.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'api-type',
        name: 'PhotoSize',
      },
      description: {
        markdown: 'Thumbnail of the album cover to which the music file belongs',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Document = t({
  name: 'Document',
  description: {
    markdown: 'This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api#photosize), [voice messages](https://core.telegram.org/bots/api#voice) and [audio files](https://core.telegram.org/bots/api#audio)).',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'api-type',
        name: 'PhotoSize',
      },
      description: {
        markdown: 'Document thumbnail as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Original filename as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the file as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'File size in bytes.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Story = t({
  name: 'Story',
  description: {
    markdown: 'This object represents a story.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat that posted the story',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique identifier for the story in the chat',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const Video = t({
  name: 'Video',
  description: {
    markdown: 'This object represents a video file.',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video width as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video height as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Duration of the video in seconds as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'api-type',
        name: 'PhotoSize',
      },
      description: {
        markdown: 'Video thumbnail',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'cover',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'Available sizes of the cover of the video in the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'start_timestamp',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Timestamp in seconds from which the video will play in the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Original filename as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the file as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'File size in bytes.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const VideoNote = t({
  name: 'VideoNote',
  description: {
    markdown: 'This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)).',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'length',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video width and height (diameter of the video message) as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Duration of the video in seconds as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'api-type',
        name: 'PhotoSize',
      },
      description: {
        markdown: 'Video thumbnail',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'File size in bytes',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Voice = t({
  name: 'Voice',
  description: {
    markdown: 'This object represents a voice note.',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Duration of the audio in seconds as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the file as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'File size in bytes.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const PaidMediaInfo = t({
  name: 'PaidMediaInfo',
  description: {
    markdown: 'Describes the paid media added to a message.',
  },
  fields: [
    {
      name: 'star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars that must be paid to buy access to the media',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'paid_media',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PaidMedia',
        },
      },
      description: {
        markdown: 'Information about the paid media',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PaidMedia = t({
  name: 'PaidMedia',
  description: {
    markdown: 'This object describes paid media. Currently, it can be one of\n\n-   [PaidMediaPreview](https://core.telegram.org/bots/api#paidmediapreview)\n-   [PaidMediaPhoto](https://core.telegram.org/bots/api#paidmediaphoto)\n-   [PaidMediaVideo](https://core.telegram.org/bots/api#paidmediavideo)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'PaidMediaPreview',
    },
    {
      type: 'api-type',
      name: 'PaidMediaPhoto',
    },
    {
      type: 'api-type',
      name: 'PaidMediaVideo',
    },
  ],
})

const PaidMediaPreview = t({
  name: 'PaidMediaPreview',
  description: {
    markdown: 'The paid media isn\'t available before the payment.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the paid media, always “preview”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Media width as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Media height as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Duration of the media in seconds as defined by the sender',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const PaidMediaPhoto = t({
  name: 'PaidMediaPhoto',
  description: {
    markdown: 'The paid media is a photo.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the paid media, always “photo”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'The photo',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PaidMediaVideo = t({
  name: 'PaidMediaVideo',
  description: {
    markdown: 'The paid media is a video.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the paid media, always “video”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'video',
      type: {
        type: 'api-type',
        name: 'Video',
      },
      description: {
        markdown: 'The video',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const Contact = t({
  name: 'Contact',
  description: {
    markdown: 'This object represents a phone contact.',
  },
  fields: [
    {
      name: 'phone_number',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Contact\'s last name',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Contact\'s user identifier in Telegram.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'vcard',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard)',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Dice = t({
  name: 'Dice',
  description: {
    markdown: 'This object represents an animated emoji that displays a random value.',
  },
  fields: [
    {
      name: 'emoji',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Emoji on which the dice throw animation is based',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'value',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Value of the dice, 1-6 for “![🎲](//telegram.org/img/emoji/40/F09F8EB2.png)”, “![🎯](//telegram.org/img/emoji/40/F09F8EAF.png)” and “![🎳](//telegram.org/img/emoji/40/F09F8EB3.png)” base emoji, 1-5 for “![🏀](//telegram.org/img/emoji/40/F09F8F80.png)” and “![⚽](//telegram.org/img/emoji/40/E29ABD.png)” base emoji, 1-64 for “![🎰](//telegram.org/img/emoji/40/F09F8EB0.png)” base emoji',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PollOption = t({
  name: 'PollOption',
  description: {
    markdown: 'This object contains information about one answer option in a poll.',
  },
  fields: [
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Option text, 1-100 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in the option _text_. Currently, only custom emoji entities are allowed in poll option texts',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'voter_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of users that voted for this option',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const InputPollOption = t({
  name: 'InputPollOption',
  description: {
    markdown: 'This object contains information about one answer option in a poll to be sent.',
  },
  fields: [
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Option text, 1-100 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text_parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the text. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details. Currently, only custom emoji entities are allowed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'An array of special entities that appear in the poll option text. It can be specified instead of _text\\_parse\\_mode_',
      },
      required: false,
      jsonSerialized: true,
    },
  ],
})

const PollAnswer = t({
  name: 'PollAnswer',
  description: {
    markdown: 'This object represents an answer of a user in a non-anonymous poll.',
  },
  fields: [
    {
      name: 'poll_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique poll identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'voter_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'The chat that changed the answer to the poll, if the voter is anonymous',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'The user that changed the answer to the poll, if the voter isn\'t anonymous',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'option_ids',
      type: {
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: '0-based identifiers of chosen answer options. May be empty if the vote was retracted.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const Poll = t({
  name: 'Poll',
  description: {
    markdown: 'This object contains information about a poll.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique poll identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'question',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Poll question, 1-300 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'question_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in the _question_. Currently, only custom emoji entities are allowed in poll questions',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'options',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PollOption',
        },
      },
      description: {
        markdown: 'List of poll options',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'total_voter_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Total number of users that voted in the poll',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_closed',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the poll is closed',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_anonymous',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the poll is anonymous',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Poll type, currently can be “regular” or “quiz”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'allows_multiple_answers',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the poll allows multiple answers',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'correct_option_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: '0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'explanation',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'explanation_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities like usernames, URLs, bot commands, etc. that appear in the _explanation_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'open_period',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Amount of time in seconds the poll will be active after creation',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'close_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the poll will be automatically closed',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChecklistTask = t({
  name: 'ChecklistTask',
  description: {
    markdown: 'Describes a task in a checklist.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the task',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the task',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in the task text',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'completed_by_user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User that completed the task; omitted if the task wasn\'t completed by a user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'completed_by_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat that completed the task; omitted if the task wasn\'t completed by a chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'completion_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the task was completed; 0 if the task wasn\'t completed',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Checklist = t({
  name: 'Checklist',
  description: {
    markdown: 'Describes a checklist.',
  },
  fields: [
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the checklist',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in the checklist title',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'tasks',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'ChecklistTask',
        },
      },
      description: {
        markdown: 'List of tasks in the checklist',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'others_can_add_tasks',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if users other than the creator of the list can add tasks to the list',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'others_can_mark_tasks_as_done',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if users other than the creator of the list can mark tasks as done or not done',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputChecklistTask = t({
  name: 'InputChecklistTask',
  description: {
    markdown: 'Describes a task to add to a checklist.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the task; 1-100 characters after entities parsing',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the text. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the text, which can be specified instead of parse\\_mode. Currently, only _bold_, _italic_, _underline_, _strikethrough_, _spoiler_, and _custom\\_emoji_ entities are allowed.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputChecklist = t({
  name: 'InputChecklist',
  description: {
    markdown: 'Describes a checklist to create.',
  },
  fields: [
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the checklist; 1-255 characters after entities parsing',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the title. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the title, which can be specified instead of parse\\_mode. Currently, only _bold_, _italic_, _underline_, _strikethrough_, _spoiler_, and _custom\\_emoji_ entities are allowed.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'tasks',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'InputChecklistTask',
        },
      },
      description: {
        markdown: 'List of 1-30 tasks in the checklist',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'others_can_add_tasks',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if other users can add tasks to the checklist',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'others_can_mark_tasks_as_done',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if other users can mark tasks as done or not done in the checklist',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChecklistTasksDone = t({
  name: 'ChecklistTasksDone',
  description: {
    markdown: 'Describes a service message about checklist tasks marked as done or not done.',
  },
  fields: [
    {
      name: 'checklist_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message containing the checklist whose tasks were marked as done or not done. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain the _reply\\_to\\_message_ field even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'marked_as_done_task_ids',
      type: {
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: 'Identifiers of the tasks that were marked as done',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'marked_as_not_done_task_ids',
      type: {
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: 'Identifiers of the tasks that were marked as not done',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChecklistTasksAdded = t({
  name: 'ChecklistTasksAdded',
  description: {
    markdown: 'Describes a service message about tasks added to a checklist.',
  },
  fields: [
    {
      name: 'checklist_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message containing the checklist to which the tasks were added. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain the _reply\\_to\\_message_ field even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'tasks',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'ChecklistTask',
        },
      },
      description: {
        markdown: 'List of tasks added to the checklist',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const Location = t({
  name: 'Location',
  description: {
    markdown: 'This object represents a point on the map.',
  },
  fields: [
    {
      name: 'latitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Latitude as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Longitude as defined by the sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'horizontal_accuracy',
      type: {
        type: 'float',
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
        type: 'int32',
      },
      description: {
        markdown: 'Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'heading',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The direction in which user is moving, in degrees; 1-360. For active live locations only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'proximity_alert_radius',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Venue = t({
  name: 'Venue',
  description: {
    markdown: 'This object represents a venue.',
  },
  fields: [
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'Location',
      },
      description: {
        markdown: 'Venue location. Can\'t be a live location',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Foursquare type of the venue. (For example, “arts\\_entertainment/default”, “arts\\_entertainment/aquarium” or “food/icecream”.)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'google_place_id',
      type: {
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const WebAppData = t({
  name: 'WebAppData',
  description: {
    markdown: 'Describes data sent from a [Web App](https://core.telegram.org/bots/webapps) to the bot.',
  },
  fields: [
    {
      name: 'data',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The data. Be aware that a bad client can send arbitrary data in this field.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'button_text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the _web\\_app_ keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ProximityAlertTriggered = t({
  name: 'ProximityAlertTriggered',
  description: {
    markdown: 'This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.',
  },
  fields: [
    {
      name: 'traveler',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User that triggered the alert',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'watcher',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User that set the alert',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'distance',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The distance between the users',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MessageAutoDeleteTimerChanged = t({
  name: 'MessageAutoDeleteTimerChanged',
  description: {
    markdown: 'This object represents a service message about a change in auto-delete timer settings.',
  },
  fields: [
    {
      name: 'message_auto_delete_time',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'New auto-delete time for messages in the chat; in seconds',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatBoostAdded = t({
  name: 'ChatBoostAdded',
  description: {
    markdown: 'This object represents a service message about a user boosting a chat.',
  },
  fields: [
    {
      name: 'boost_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of boosts added by the user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BackgroundFill = t({
  name: 'BackgroundFill',
  description: {
    markdown: 'This object describes the way a background is filled based on the selected colors. Currently, it can be one of\n\n-   [BackgroundFillSolid](https://core.telegram.org/bots/api#backgroundfillsolid)\n-   [BackgroundFillGradient](https://core.telegram.org/bots/api#backgroundfillgradient)\n-   [BackgroundFillFreeformGradient](https://core.telegram.org/bots/api#backgroundfillfreeformgradient)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'BackgroundFillSolid',
    },
    {
      type: 'api-type',
      name: 'BackgroundFillGradient',
    },
    {
      type: 'api-type',
      name: 'BackgroundFillFreeformGradient',
    },
  ],
})

const BackgroundFillSolid = t({
  name: 'BackgroundFillSolid',
  description: {
    markdown: 'The background is filled using the selected color.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the background fill, always “solid”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The color of the background fill in the RGB24 format',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BackgroundFillGradient = t({
  name: 'BackgroundFillGradient',
  description: {
    markdown: 'The background is a gradient fill.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the background fill, always “gradient”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'top_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Top color of the gradient in the RGB24 format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'bottom_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Bottom color of the gradient in the RGB24 format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'rotation_angle',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Clockwise rotation angle of the background fill in degrees; 0-359',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BackgroundFillFreeformGradient = t({
  name: 'BackgroundFillFreeformGradient',
  description: {
    markdown: 'The background is a freeform gradient that rotates after every message in the chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the background fill, always “freeform\\_gradient”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'colors',
      type: {
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: 'A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BackgroundType = t({
  name: 'BackgroundType',
  description: {
    markdown: 'This object describes the type of a background. Currently, it can be one of\n\n-   [BackgroundTypeFill](https://core.telegram.org/bots/api#backgroundtypefill)\n-   [BackgroundTypeWallpaper](https://core.telegram.org/bots/api#backgroundtypewallpaper)\n-   [BackgroundTypePattern](https://core.telegram.org/bots/api#backgroundtypepattern)\n-   [BackgroundTypeChatTheme](https://core.telegram.org/bots/api#backgroundtypechattheme)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'BackgroundTypeFill',
    },
    {
      type: 'api-type',
      name: 'BackgroundTypeWallpaper',
    },
    {
      type: 'api-type',
      name: 'BackgroundTypePattern',
    },
    {
      type: 'api-type',
      name: 'BackgroundTypeChatTheme',
    },
  ],
})

const BackgroundTypeFill = t({
  name: 'BackgroundTypeFill',
  description: {
    markdown: 'The background is automatically filled based on the selected colors.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the background, always “fill”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'fill',
      type: {
        type: 'api-type',
        name: 'BackgroundFill',
      },
      description: {
        markdown: 'The background fill',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'dark_theme_dimming',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Dimming of the background in dark themes, as a percentage; 0-100',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BackgroundTypeWallpaper = t({
  name: 'BackgroundTypeWallpaper',
  description: {
    markdown: 'The background is a wallpaper in the JPEG format.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the background, always “wallpaper”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'document',
      type: {
        type: 'api-type',
        name: 'Document',
      },
      description: {
        markdown: 'Document with the wallpaper',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'dark_theme_dimming',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Dimming of the background in dark themes, as a percentage; 0-100',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_blurred',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_moving',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the background moves slightly when the device is tilted',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const BackgroundTypePattern = t({
  name: 'BackgroundTypePattern',
  description: {
    markdown: 'The background is a .PNG or .TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the background, always “pattern”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'document',
      type: {
        type: 'api-type',
        name: 'Document',
      },
      description: {
        markdown: 'Document with the pattern',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'fill',
      type: {
        type: 'api-type',
        name: 'BackgroundFill',
      },
      description: {
        markdown: 'The background fill that is combined with the pattern',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'intensity',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Intensity of the pattern when it is shown above the filled background; 0-100',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_inverted',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_moving',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the background moves slightly when the device is tilted',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const BackgroundTypeChatTheme = t({
  name: 'BackgroundTypeChatTheme',
  description: {
    markdown: 'The background is taken directly from a built-in chat theme.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the background, always “chat\\_theme”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'theme_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the chat theme, which is usually an emoji',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatBackground = t({
  name: 'ChatBackground',
  description: {
    markdown: 'This object represents a chat background.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'api-type',
        name: 'BackgroundType',
      },
      description: {
        markdown: 'Type of the background',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ForumTopicCreated = t({
  name: 'ForumTopicCreated',
  description: {
    markdown: 'This object represents a service message about a new forum topic created in the chat.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the topic',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'icon_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Color of the topic icon in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'icon_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the custom emoji shown as the topic icon',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_name_implicit',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the name of the topic wasn\'t specified explicitly by its creator and likely needs to be changed by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ForumTopicClosed = t({
  name: 'ForumTopicClosed',
  description: {
    markdown: 'This object represents a service message about a forum topic closed in the chat. Currently holds no information.',
  },
  fields: [],
})

const ForumTopicEdited = t({
  name: 'ForumTopicEdited',
  description: {
    markdown: 'This object represents a service message about an edited forum topic.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'New name of the topic, if it was edited',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'icon_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ForumTopicReopened = t({
  name: 'ForumTopicReopened',
  description: {
    markdown: 'This object represents a service message about a forum topic reopened in the chat. Currently holds no information.',
  },
  fields: [],
})

const GeneralForumTopicHidden = t({
  name: 'GeneralForumTopicHidden',
  description: {
    markdown: 'This object represents a service message about General forum topic hidden in the chat. Currently holds no information.',
  },
  fields: [],
})

const GeneralForumTopicUnhidden = t({
  name: 'GeneralForumTopicUnhidden',
  description: {
    markdown: 'This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.',
  },
  fields: [],
})

const SharedUser = t({
  name: 'SharedUser',
  description: {
    markdown: 'This object contains information about a user that was shared with the bot using a [KeyboardButtonRequestUsers](https://core.telegram.org/bots/api#keyboardbuttonrequestusers) button.',
  },
  fields: [
    {
      name: 'user_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Identifier of the shared user.  The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'first_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'First name of the user, if the name was requested by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'last_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Last name of the user, if the name was requested by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'username',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Username of the user, if the username was requested by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'Available sizes of the chat photo, if the photo was requested by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const UsersShared = t({
  name: 'UsersShared',
  description: {
    markdown: 'This object contains information about the users whose identifiers were shared with the bot using a [KeyboardButtonRequestUsers](https://core.telegram.org/bots/api#keyboardbuttonrequestusers) button.',
  },
  fields: [
    {
      name: 'request_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the request',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'users',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'SharedUser',
        },
      },
      description: {
        markdown: 'Information about users shared with the bot.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatShared = t({
  name: 'ChatShared',
  description: {
    markdown: 'This object contains information about a chat that was shared with the bot using a [KeyboardButtonRequestChat](https://core.telegram.org/bots/api#keyboardbuttonrequestchat) button.',
  },
  fields: [
    {
      name: 'request_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the request',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Identifier of the shared chat.  The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the chat, if the title was requested by the bot.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'username',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Username of the chat, if the username was requested by the bot and available.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'Available sizes of the chat photo, if the photo was requested by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const WriteAccessAllowed = t({
  name: 'WriteAccessAllowed',
  description: {
    markdown: 'This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps).',
  },
  fields: [
    {
      name: 'from_request',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the access was granted after the user accepted an explicit request from a Web App sent by the method [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'web_app_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the Web App, if the access was granted when the Web App was launched from a link',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'from_attachment_menu',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the access was granted when the bot was added to the attachment or side menu',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const VideoChatScheduled = t({
  name: 'VideoChatScheduled',
  description: {
    markdown: 'This object represents a service message about a video chat scheduled in the chat.',
  },
  fields: [
    {
      name: 'start_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const VideoChatStarted = t({
  name: 'VideoChatStarted',
  description: {
    markdown: 'This object represents a service message about a video chat started in the chat. Currently holds no information.',
  },
  fields: [],
})

const VideoChatEnded = t({
  name: 'VideoChatEnded',
  description: {
    markdown: 'This object represents a service message about a video chat ended in the chat.',
  },
  fields: [
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video chat duration in seconds',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const VideoChatParticipantsInvited = t({
  name: 'VideoChatParticipantsInvited',
  description: {
    markdown: 'This object represents a service message about new members invited to a video chat.',
  },
  fields: [
    {
      name: 'users',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'User',
        },
      },
      description: {
        markdown: 'New members that were invited to the video chat',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PaidMessagePriceChanged = t({
  name: 'PaidMessagePriceChanged',
  description: {
    markdown: 'Describes a service message about a change in the price of paid messages within a chat.',
  },
  fields: [
    {
      name: 'paid_message_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const DirectMessagePriceChanged = t({
  name: 'DirectMessagePriceChanged',
  description: {
    markdown: 'Describes a service message about a change in the price of direct messages sent to a channel chat.',
  },
  fields: [
    {
      name: 'are_direct_messages_enabled',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if direct messages are enabled for the channel chat; false otherwise',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'direct_message_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostApproved = t({
  name: 'SuggestedPostApproved',
  description: {
    markdown: 'Describes a service message about the approval of a suggested post.',
  },
  fields: [
    {
      name: 'suggested_post_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message containing the suggested post. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain the _reply\\_to\\_message_ field even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'price',
      type: {
        type: 'api-type',
        name: 'SuggestedPostPrice',
      },
      description: {
        markdown: 'Amount paid for the post',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date when the post will be published',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostApprovalFailed = t({
  name: 'SuggestedPostApprovalFailed',
  description: {
    markdown: 'Describes a service message about the failed approval of a suggested post. Currently, only caused by insufficient user funds at the time of approval.',
  },
  fields: [
    {
      name: 'suggested_post_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message containing the suggested post whose approval has failed. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain the _reply\\_to\\_message_ field even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'price',
      type: {
        type: 'api-type',
        name: 'SuggestedPostPrice',
      },
      description: {
        markdown: 'Expected price of the post',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostDeclined = t({
  name: 'SuggestedPostDeclined',
  description: {
    markdown: 'Describes a service message about the rejection of a suggested post.',
  },
  fields: [
    {
      name: 'suggested_post_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message containing the suggested post. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain the _reply\\_to\\_message_ field even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'comment',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Comment with which the post was declined',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostPaid = t({
  name: 'SuggestedPostPaid',
  description: {
    markdown: 'Describes a service message about a successful payment for a suggested post.',
  },
  fields: [
    {
      name: 'suggested_post_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message containing the suggested post. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain the _reply\\_to\\_message_ field even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'currency',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Currency in which the payment was made. Currently, one of “XTR” for Telegram Stars or “TON” for toncoins',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The amount of the currency that was received by the channel in nanotoncoins; for payments in toncoins only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'star_amount',
      type: {
        type: 'api-type',
        name: 'StarAmount',
      },
      description: {
        markdown: 'The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostRefunded = t({
  name: 'SuggestedPostRefunded',
  description: {
    markdown: 'Describes a service message about a payment refund for a suggested post.',
  },
  fields: [
    {
      name: 'suggested_post_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message containing the suggested post. Note that the [Message](https://core.telegram.org/bots/api#message) object in this field will not contain the _reply\\_to\\_message_ field even if it itself is a reply.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reason',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Reason for the refund. Currently, one of “post\\_deleted” if the post was deleted within 24 hours of being posted or removed from scheduled messages without being posted, or “payment\\_refunded” if the payer refunded their payment.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const GiveawayCreated = t({
  name: 'GiveawayCreated',
  description: {
    markdown: 'This object represents a service message about the creation of a scheduled giveaway.',
  },
  fields: [
    {
      name: 'prize_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Giveaway = t({
  name: 'Giveaway',
  description: {
    markdown: 'This object represents a message about a scheduled giveaway.',
  },
  fields: [
    {
      name: 'chats',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'Chat',
        },
      },
      description: {
        markdown: 'The list of chats which the user must join to participate in the giveaway',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'winners_selection_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when winners of the giveaway will be selected',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'winner_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of users which are supposed to be selected as winners of the giveaway',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'only_new_members',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if only users who join the chats after the giveaway started should be eligible to win',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_public_winners',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the list of giveaway winners will be visible to everyone',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prize_description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Description of additional giveaway prize',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'country_codes',
      type: {
        type: 'array',
        of: {
          type: 'str',
        },
      },
      description: {
        markdown: 'A list of two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prize_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'premium_subscription_month_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const GiveawayWinners = t({
  name: 'GiveawayWinners',
  description: {
    markdown: 'This object represents a message about the completion of a giveaway with public winners.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'The chat that created the giveaway',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'giveaway_message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of the message with the giveaway in the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'winners_selection_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when winners of the giveaway were selected',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'winner_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Total number of winners in the giveaway',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'winners',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'User',
        },
      },
      description: {
        markdown: 'List of up to 100 winners of the giveaway',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'additional_chat_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of other chats the user had to join in order to be eligible for the giveaway',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prize_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'premium_subscription_month_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'unclaimed_prize_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of undistributed prizes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'only_new_members',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if only users who had joined the chats after the giveaway started were eligible to win',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'was_refunded',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the giveaway was canceled because the payment for it was refunded',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prize_description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Description of additional giveaway prize',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const GiveawayCompleted = t({
  name: 'GiveawayCompleted',
  description: {
    markdown: 'This object represents a service message about the completion of a giveaway without public winners.',
  },
  fields: [
    {
      name: 'winner_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of winners in the giveaway',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'unclaimed_prize_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of undistributed prizes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'giveaway_message',
      type: {
        type: 'api-type',
        name: 'Message',
      },
      description: {
        markdown: 'Message with the giveaway that was completed, if it wasn\'t deleted',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_star_giveaway',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const LinkPreviewOptions = t({
  name: 'LinkPreviewOptions',
  description: {
    markdown: 'Describes the options used for link preview generation.',
  },
  fields: [
    {
      name: 'is_disabled',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the link preview is disabled',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'URL to use for the link preview. If empty, then the first URL found in the message text will be used',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prefer_small_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the media in the link preview is supposed to be shrunk; ignored if the URL isn\'t explicitly specified or media size change isn\'t supported for the preview',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prefer_large_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the media in the link preview is supposed to be enlarged; ignored if the URL isn\'t explicitly specified or media size change isn\'t supported for the preview',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_above_text',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostPrice = t({
  name: 'SuggestedPostPrice',
  description: {
    markdown: 'Describes the price of a suggested post.',
  },
  fields: [
    {
      name: 'currency',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Currency in which the post will be paid. Currently, must be one of “XTR” for Telegram Stars or “TON” for toncoins',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The amount of the currency that will be paid for the post in the _smallest units_ of the currency, i.e. Telegram Stars or nanotoncoins. Currently, price in Telegram Stars must be between 5 and 100000, and price in nanotoncoins must be between 10000000 and 10000000000000.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostInfo = t({
  name: 'SuggestedPostInfo',
  description: {
    markdown: 'Contains information about a suggested post.',
  },
  fields: [
    {
      name: 'state',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'State of the suggested post. Currently, it can be one of “pending”, “approved”, “declined”.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'price',
      type: {
        type: 'api-type',
        name: 'SuggestedPostPrice',
      },
      description: {
        markdown: 'Proposed price of the post. If the field is omitted, then the post is unpaid.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Proposed send date of the post. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user or administrator who approves it.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const SuggestedPostParameters = t({
  name: 'SuggestedPostParameters',
  description: {
    markdown: 'Contains parameters of a post that is being suggested by the bot.',
  },
  fields: [
    {
      name: 'price',
      type: {
        type: 'api-type',
        name: 'SuggestedPostPrice',
      },
      description: {
        markdown: 'Proposed price for the post. If the field is omitted, then the post is unpaid.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Proposed send date of the post. If specified, then the date must be between 300 second and 2678400 seconds (30 days) in the future. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user who approves it.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const DirectMessagesTopic = t({
  name: 'DirectMessagesTopic',
  description: {
    markdown: 'Describes a topic of a direct messages chat.',
  },
  fields: [
    {
      name: 'topic_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Unique identifier of the topic.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user that created the topic. Currently, it is always present',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const UserProfilePhotos = t({
  name: 'UserProfilePhotos',
  description: {
    markdown: 'This object represent a user\'s profile pictures.',
  },
  fields: [
    {
      name: 'total_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Total number of profile pictures the target user has',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photos',
      type: {
        type: 'array',
        of: {
          type: 'array',
          of: {
            type: 'api-type',
            name: 'PhotoSize',
          },
        },
      },
      description: {
        markdown: 'Requested profile pictures (in up to 4 sizes each)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const File = t({
  name: 'File',
  description: {
    markdown: 'This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).\n\n> The maximum file size to download is 20 MB',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'File size in bytes.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_path',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const WebAppInfo = t({
  name: 'WebAppInfo',
  description: {
    markdown: 'Describes a [Web App](https://core.telegram.org/bots/webapps).',
  },
  fields: [
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'An HTTPS URL of a Web App to be opened with additional data as specified in [Initializing Web Apps](https://core.telegram.org/bots/webapps#initializing-mini-apps)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ReplyKeyboardMarkup = t({
  name: 'ReplyKeyboardMarkup',
  description: {
    markdown: 'This object represents a [custom keyboard](https://core.telegram.org/bots/features#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots/features#keyboards) for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.',
  },
  fields: [
    {
      name: 'keyboard',
      type: {
        type: 'array',
        of: {
          type: 'array',
          of: {
            type: 'api-type',
            name: 'KeyboardButton',
          },
        },
      },
      description: {
        markdown: 'Array of button rows, each represented by an Array of [KeyboardButton](https://core.telegram.org/bots/api#keyboardbutton) objects',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_persistent',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to _false_, in which case the custom keyboard can be hidden and opened with a keyboard icon.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'resize_keyboard',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to _false_, in which case the custom keyboard is always of the same height as the app\'s standard keyboard.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'one_time_keyboard',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Requests clients to hide the keyboard as soon as it\'s been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to _false_.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_field_placeholder',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The placeholder to be shown in the input field when the keyboard is active; 1-64 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'selective',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the _text_ of the [Message](https://core.telegram.org/bots/api#message) object; 2) if the bot\'s message is a reply to a message in the same chat and forum topic, sender of the original message.\n\n_Example:_ A user requests to change the bot\'s language, bot replies to the request with a keyboard to select the new language. Other users in the group don\'t see the keyboard.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const KeyboardButton = t({
  name: 'KeyboardButton',
  description: {
    markdown: 'This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, _String_ can be used instead of this object to specify the button text.\n\n**Note:** _request\\_users_ and _request\\_chat_ options will only work in Telegram versions released after 3 February, 2023. Older clients will display _unsupported message_.',
  },
  fields: [
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'request_users',
      type: {
        type: 'api-type',
        name: 'KeyboardButtonRequestUsers',
      },
      description: {
        markdown: 'If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users\\_shared” service message. Available in private chats only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_chat',
      type: {
        type: 'api-type',
        name: 'KeyboardButtonRequestChat',
      },
      description: {
        markdown: 'If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat\\_shared” service message. Available in private chats only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_contact',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'If _True_, the user\'s phone number will be sent as a contact when the button is pressed. Available in private chats only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_location',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'If _True_, the user\'s current location will be sent when the button is pressed. Available in private chats only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_poll',
      type: {
        type: 'api-type',
        name: 'KeyboardButtonPollType',
      },
      description: {
        markdown: 'If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'web_app',
      type: {
        type: 'api-type',
        name: 'WebAppInfo',
      },
      description: {
        markdown: 'If specified, the described [Web App](https://core.telegram.org/bots/webapps) will be launched when the button is pressed. The Web App will be able to send a “web\\_app\\_data” service message. Available in private chats only.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const KeyboardButtonRequestUsers = t({
  name: 'KeyboardButtonRequestUsers',
  description: {
    markdown: 'This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. [More about requesting users »](https://core.telegram.org/bots/features#chat-and-user-selection)',
  },
  fields: [
    {
      name: 'request_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Signed 32-bit identifier of the request that will be received back in the [UsersShared](https://core.telegram.org/bots/api#usersshared) object. Must be unique within the message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_is_bot',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request bots, pass _False_ to request regular users. If not specified, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'user_is_premium',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request premium users, pass _False_ to request non-premium users. If not specified, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'max_quantity',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The maximum number of users to be selected; 1-10. Defaults to 1.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_name',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request the users\' first and last names',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_username',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request the users\' usernames',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_photo',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request the users\' photos',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const KeyboardButtonRequestChat = t({
  name: 'KeyboardButtonRequestChat',
  description: {
    markdown: 'This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. [More about requesting chats »](https://core.telegram.org/bots/features#chat-and-user-selection).',
  },
  fields: [
    {
      name: 'request_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Signed 32-bit identifier of the request, which will be received back in the [ChatShared](https://core.telegram.org/bots/api#chatshared) object. Must be unique within the message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_is_channel',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request a channel chat, pass _False_ to request a group or a supergroup chat.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_is_forum',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request a forum supergroup, pass _False_ to request a non-forum chat. If not specified, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_has_username',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request a supergroup or a channel with a username, pass _False_ to request a chat without a username. If not specified, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_is_created',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request a chat owned by the user. Otherwise, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'user_administrator_rights',
      type: {
        type: 'api-type',
        name: 'ChatAdministratorRights',
      },
      description: {
        markdown: 'An object listing the required administrator rights of the user in the chat. The rights must be a superset of _bot\\_administrator\\_rights_. If not specified, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'bot_administrator_rights',
      type: {
        type: 'api-type',
        name: 'ChatAdministratorRights',
      },
      description: {
        markdown: 'An object listing the required administrator rights of the bot in the chat. The rights must be a subset of _user\\_administrator\\_rights_. If not specified, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'bot_is_member',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_title',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request the chat\'s title',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_username',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request the chat\'s username',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_photo',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request the chat\'s photo',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const KeyboardButtonPollType = t({
  name: 'KeyboardButtonPollType',
  description: {
    markdown: 'This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'If _quiz_ is passed, the user will be allowed to create only polls in the quiz mode. If _regular_ is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ReplyKeyboardRemove = t({
  name: 'ReplyKeyboardRemove',
  description: {
    markdown: 'Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)). Not supported in channels and for messages sent on behalf of a Telegram Business account.',
  },
  fields: [
    {
      name: 'remove_keyboard',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: 'Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use _one\\_time\\_keyboard_ in [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup))',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'selective',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the _text_ of the [Message](https://core.telegram.org/bots/api#message) object; 2) if the bot\'s message is a reply to a message in the same chat and forum topic, sender of the original message.\n\n_Example:_ A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven\'t voted yet.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineKeyboardMarkup = t({
  name: 'InlineKeyboardMarkup',
  description: {
    markdown: 'This object represents an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) that appears right next to the message it belongs to.',
  },
  fields: [
    {
      name: 'inline_keyboard',
      type: {
        type: 'array',
        of: {
          type: 'array',
          of: {
            type: 'api-type',
            name: 'InlineKeyboardButton',
          },
        },
      },
      description: {
        markdown: 'Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.telegram.org/bots/api#inlinekeyboardbutton) objects',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const InlineKeyboardButton = t({
  name: 'InlineKeyboardButton',
  description: {
    markdown: 'This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.',
  },
  fields: [
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Label text on the button',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'HTTP or tg:// URL to be opened when the button is pressed. Links `tg://user?id=<user_id>` can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'callback_data',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Data to be sent in a [callback query](https://core.telegram.org/bots/api#callbackquery) to the bot when the button is pressed, 1-64 bytes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'web_app',
      type: {
        type: 'api-type',
        name: 'WebAppInfo',
      },
      description: {
        markdown: 'Description of the [Web App](https://core.telegram.org/bots/webapps) that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery). Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'login_url',
      type: {
        type: 'api-type',
        name: 'LoginUrl',
      },
      description: {
        markdown: 'An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'switch_inline_query',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot\'s username and the specified inline query in the input field. May be empty, in which case just the bot\'s username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'switch_inline_query_current_chat',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'If set, pressing the button will insert the bot\'s username and the specified inline query in the current chat\'s input field. May be empty, in which case only the bot\'s username will be inserted.\n\nThis offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a Telegram Business account.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'switch_inline_query_chosen_chat',
      type: {
        type: 'api-type',
        name: 'SwitchInlineQueryChosenChat',
      },
      description: {
        markdown: 'If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot\'s username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'copy_text',
      type: {
        type: 'api-type',
        name: 'CopyTextButton',
      },
      description: {
        markdown: 'Description of the button that copies the specified text to the clipboard.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'callback_game',
      type: {
        type: 'api-type',
        name: 'CallbackGame',
      },
      description: {
        markdown: 'Description of the game that will be launched when the user presses the button.\n\n**NOTE:** This type of button **must** always be the first button in the first row.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'pay',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Specify _True_, to send a [Pay button](https://core.telegram.org/bots/api#payments). Substrings “![⭐](//telegram.org/img/emoji/40/E2AD90.png)” and “XTR” in the buttons\'s text will be replaced with a Telegram Star icon.\n\n**NOTE:** This type of button **must** always be the first button in the first row and can only be used in invoice messages.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const LoginUrl = t({
  name: 'LoginUrl',
  description: {
    markdown: 'This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:\n\n[![TITLE](/file/811140909/1631/20k1Z53eiyY.23995/c541e89b74253623d9 "TITLE")](https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c)\n\nTelegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).\n\n> Sample bot: [@discussbot](https://t.me/discussbot)',
  },
  fields: [
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in [Receiving authorization data](https://core.telegram.org/widgets/login#receiving-authorization-data).\n\n**NOTE:** You **must** always check the hash of the received data to verify the authentication and the integrity of the data as described in [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'forward_text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'New text of the button in forwarded messages.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'bot_username',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Username of a bot, which will be used for user authorization. See [Setting up a bot](https://core.telegram.org/widgets/login#setting-up-a-bot) for more details. If not specified, the current bot\'s username will be assumed. The _url_\'s domain must be the same as the domain linked with the bot. See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'request_write_access',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ to request the permission for your bot to send messages to the user.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const SwitchInlineQueryChosenChat = t({
  name: 'SwitchInlineQueryChosenChat',
  description: {
    markdown: 'This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.',
  },
  fields: [
    {
      name: 'query',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The default inline query to be inserted in the input field. If left empty, only the bot\'s username will be inserted',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_user_chats',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if private chats with users can be chosen',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_bot_chats',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if private chats with bots can be chosen',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_group_chats',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if group and supergroup chats can be chosen',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'allow_channel_chats',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if channel chats can be chosen',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const CopyTextButton = t({
  name: 'CopyTextButton',
  description: {
    markdown: 'This object represents an inline keyboard button that copies specified text to the clipboard.',
  },
  fields: [
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The text to be copied to the clipboard; 1-256 characters',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const CallbackQuery = t({
  name: 'CallbackQuery',
  description: {
    markdown: 'This object represents an incoming callback query from a callback button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards). If the button that originated the query was attached to a message sent by the bot, the field _message_ will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api#inline-mode)), the field _inline\\_message\\_id_ will be present. Exactly one of the fields _data_ or _game\\_short\\_name_ will be present.\n\n> **NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this query',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'api-type',
        name: 'MaybeInaccessibleMessage',
      },
      description: {
        markdown: 'Message sent by the bot with the callback button that originated the query',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier of the message sent via the bot in inline mode, that originated the query.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'chat_instance',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.telegram.org/bots/api#games).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'data',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'game_short_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short name of a [Game](https://core.telegram.org/bots/api#games) to be returned, serves as the unique identifier for the game',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ForceReply = t({
  name: 'ForceReply',
  description: {
    markdown: 'Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot\'s message and tapped \'Reply\'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](https://core.telegram.org/bots/features#privacy-mode). Not supported in channels and for messages sent on behalf of a Telegram Business account.\n\n> **Example:** A [poll bot](https://t.me/PollBot) for groups runs in privacy mode (only receives commands, replies to its messages and mentions). There could be two ways to create a new poll:\n> \n> -   Explain the user how to send a command with parameters (e.g. /newpoll question answer1 answer2). May be appealing for hardcore users but lacks modern day polish.\n> -   Guide the user through a step-by-step process. \'Please send me your question\', \'Cool, now let\'s add the first answer option\', \'Great. Keep adding answer options, then send /done when you\'re ready\'.\n> \n> The last option is definitely more attractive. And if you use [ForceReply](https://core.telegram.org/bots/api#forcereply) in your bot\'s questions, it will receive the user\'s answers even if it only receives replies, commands and mentions - without any extra work for the user.',
  },
  fields: [
    {
      name: 'force_reply',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: 'Shows reply interface to the user, as if they manually selected the bot\'s message and tapped \'Reply\'',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'input_field_placeholder',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The placeholder to be shown in the input field when the reply is active; 1-64 characters',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'selective',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the _text_ of the [Message](https://core.telegram.org/bots/api#message) object; 2) if the bot\'s message is a reply to a message in the same chat and forum topic, sender of the original message.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatPhoto = t({
  name: 'ChatPhoto',
  description: {
    markdown: 'This object represents a chat photo.',
  },
  fields: [
    {
      name: 'small_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File identifier of small (160x160) chat photo. This file\\_id can be used only for photo download and only for as long as the photo is not changed.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'small_file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'big_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File identifier of big (640x640) chat photo. This file\\_id can be used only for photo download and only for as long as the photo is not changed.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'big_file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatInviteLink = t({
  name: 'ChatInviteLink',
  description: {
    markdown: 'Represents an invite link for a chat.',
  },
  fields: [
    {
      name: 'invite_link',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'creator',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Creator of the link',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'creates_join_request',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if users joining the chat via the link need to be approved by chat administrators',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_primary',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the link is primary',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_revoked',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the link is revoked',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Invite link name',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'expire_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the link will expire or has been expired',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'member_limit',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'pending_join_request_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of pending join requests created using this link',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'subscription_period',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of seconds the subscription will be active for before the next payment',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'subscription_price',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatAdministratorRights = t({
  name: 'ChatAdministratorRights',
  description: {
    markdown: 'Represents the rights of an administrator in a chat.',
  },
  fields: [
    {
      name: 'is_anonymous',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user\'s presence in the chat is hidden',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_chat',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can delete messages of other users',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_video_chats',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can manage video chats',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_restrict_members',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can restrict, ban or unban chat members, or access supergroup statistics',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_promote_members',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_change_info',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to change the chat title, photo and other settings',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_invite_users',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to invite new users to the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_post_stories',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can post stories to the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_stories',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat\'s story archive',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_stories',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can delete stories posted by other users',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_post_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can edit messages of other users and can pin messages; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_pin_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to pin messages; for groups and supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_topics',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_direct_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatMemberUpdated = t({
  name: 'ChatMemberUpdated',
  description: {
    markdown: 'This object represents changes in the status of a chat member.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat the user belongs to',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Performer of the action, which resulted in the change',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the change was done in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'old_chat_member',
      type: {
        type: 'api-type',
        name: 'ChatMember',
      },
      description: {
        markdown: 'Previous information about the chat member',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'new_chat_member',
      type: {
        type: 'api-type',
        name: 'ChatMember',
      },
      description: {
        markdown: 'New information about the chat member',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invite_link',
      type: {
        type: 'api-type',
        name: 'ChatInviteLink',
      },
      description: {
        markdown: 'Chat invite link, which was used by the user to join the chat; for joining by invite link events only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'via_join_request',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'via_chat_folder_invite_link',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user joined the chat via a chat folder invite link',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatMember = t({
  name: 'ChatMember',
  description: {
    markdown: 'This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:\n\n-   [ChatMemberOwner](https://core.telegram.org/bots/api#chatmemberowner)\n-   [ChatMemberAdministrator](https://core.telegram.org/bots/api#chatmemberadministrator)\n-   [ChatMemberMember](https://core.telegram.org/bots/api#chatmembermember)\n-   [ChatMemberRestricted](https://core.telegram.org/bots/api#chatmemberrestricted)\n-   [ChatMemberLeft](https://core.telegram.org/bots/api#chatmemberleft)\n-   [ChatMemberBanned](https://core.telegram.org/bots/api#chatmemberbanned)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'ChatMemberOwner',
    },
    {
      type: 'api-type',
      name: 'ChatMemberAdministrator',
    },
    {
      type: 'api-type',
      name: 'ChatMemberMember',
    },
    {
      type: 'api-type',
      name: 'ChatMemberRestricted',
    },
    {
      type: 'api-type',
      name: 'ChatMemberLeft',
    },
    {
      type: 'api-type',
      name: 'ChatMemberBanned',
    },
  ],
})

const ChatMemberOwner = t({
  name: 'ChatMemberOwner',
  description: {
    markdown: 'Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that owns the chat and has all administrator privileges.',
  },
  fields: [
    {
      name: 'status',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The member\'s status in the chat, always “creator”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_anonymous',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user\'s presence in the chat is hidden',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'custom_title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom title for this user',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatMemberAdministrator = t({
  name: 'ChatMemberAdministrator',
  description: {
    markdown: 'Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that has some additional privileges.',
  },
  fields: [
    {
      name: 'status',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The member\'s status in the chat, always “administrator”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_be_edited',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the bot is allowed to edit administrator privileges of that user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_anonymous',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user\'s presence in the chat is hidden',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_chat',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can delete messages of other users',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_video_chats',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can manage video chats',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_restrict_members',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can restrict, ban or unban chat members, or access supergroup statistics',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_promote_members',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_change_info',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to change the chat title, photo and other settings',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_invite_users',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to invite new users to the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_post_stories',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can post stories to the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_stories',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat\'s story archive',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_stories',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can delete stories posted by other users',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_post_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can edit messages of other users and can pin messages; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_pin_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to pin messages; for groups and supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_topics',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_direct_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'custom_title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom title for this user',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatMemberMember = t({
  name: 'ChatMemberMember',
  description: {
    markdown: 'Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that has no additional privileges or restrictions.',
  },
  fields: [
    {
      name: 'status',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The member\'s status in the chat, always “member”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'until_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date when the user\'s subscription will expire; Unix time',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatMemberRestricted = t({
  name: 'ChatMemberRestricted',
  description: {
    markdown: 'Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that is under certain restrictions in the chat. Supergroups only.',
  },
  fields: [
    {
      name: 'status',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The member\'s status in the chat, always “restricted”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_member',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is a member of the chat at the moment of the request',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_audios',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send audios',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_documents',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send documents',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_photos',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send photos',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_videos',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send videos',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_video_notes',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send video notes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_voice_notes',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send voice notes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_polls',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send polls and checklists',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_send_other_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send animations, games, stickers and use inline bots',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_add_web_page_previews',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to add web page previews to their messages',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_change_info',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to change the chat title, photo and other settings',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_invite_users',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to invite new users to the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_pin_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to pin messages',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_topics',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to create forum topics',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'until_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatMemberLeft = t({
  name: 'ChatMemberLeft',
  description: {
    markdown: 'Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that isn\'t currently a member of the chat, but may join it themselves.',
  },
  fields: [
    {
      name: 'status',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The member\'s status in the chat, always “left”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatMemberBanned = t({
  name: 'ChatMemberBanned',
  description: {
    markdown: 'Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that was banned in the chat and can\'t return to the chat or view chat messages.',
  },
  fields: [
    {
      name: 'status',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The member\'s status in the chat, always “kicked”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'until_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatJoinRequest = t({
  name: 'ChatJoinRequest',
  description: {
    markdown: 'Represents a join request sent to a chat.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat to which the request was sent',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User that sent the join request',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_chat_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Identifier of a private chat with the user who sent the join request.  The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the request was sent in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'bio',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bio of the user.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'invite_link',
      type: {
        type: 'api-type',
        name: 'ChatInviteLink',
      },
      description: {
        markdown: 'Chat invite link that was used by the user to send the join request',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatPermissions = t({
  name: 'ChatPermissions',
  description: {
    markdown: 'Describes actions that a non-administrator user is allowed to take in a chat.',
  },
  fields: [
    {
      name: 'can_send_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_audios',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send audios',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_documents',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send documents',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_photos',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send photos',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_videos',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send videos',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_video_notes',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send video notes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_voice_notes',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send voice notes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_polls',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send polls and checklists',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_send_other_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to send animations, games, stickers and use inline bots',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_add_web_page_previews',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to add web page previews to their messages',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_change_info',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_invite_users',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to invite new users to the chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_pin_messages',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to pin messages. Ignored in public supergroups',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_topics',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the user is allowed to create forum topics. If omitted defaults to the value of can\\_pin\\_messages',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Birthdate = t({
  name: 'Birthdate',
  description: {
    markdown: 'Describes the birthdate of a user.',
  },
  fields: [
    {
      name: 'day',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Day of the user\'s birth; 1-31',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'month',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Month of the user\'s birth; 1-12',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'year',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Year of the user\'s birth',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const BusinessIntro = t({
  name: 'BusinessIntro',
  description: {
    markdown: 'Contains information about the start page settings of a Telegram Business account.',
  },
  fields: [
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title text of the business intro',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Message text of the business intro',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        type: 'api-type',
        name: 'Sticker',
      },
      description: {
        markdown: 'Sticker of the business intro',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const BusinessLocation = t({
  name: 'BusinessLocation',
  description: {
    markdown: 'Contains information about the location of a Telegram Business account.',
  },
  fields: [
    {
      name: 'address',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Address of the business',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'Location',
      },
      description: {
        markdown: 'Location of the business',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const BusinessOpeningHoursInterval = t({
  name: 'BusinessOpeningHoursInterval',
  description: {
    markdown: 'Describes an interval of time during which a business is open.',
  },
  fields: [
    {
      name: 'opening_minute',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The minute\'s sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 \\* 24 \\* 60',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'closing_minute',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The minute\'s sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 \\* 24 \\* 60',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BusinessOpeningHours = t({
  name: 'BusinessOpeningHours',
  description: {
    markdown: 'Describes the opening hours of a business.',
  },
  fields: [
    {
      name: 'time_zone_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique name of the time zone for which the opening hours are defined',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'opening_hours',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'BusinessOpeningHoursInterval',
        },
      },
      description: {
        markdown: 'List of time intervals describing business opening hours',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UserRating = t({
  name: 'UserRating',
  description: {
    markdown: 'This object describes the rating of a user based on their Telegram Star spendings.',
  },
  fields: [
    {
      name: 'level',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Current level of the user, indicating their reliability when purchasing digital goods and services. A higher level suggests a more trustworthy customer; a negative level is likely reason for concern.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'rating',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Numerical value of the user\'s rating; the higher the rating, the better',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'current_level_rating',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The rating value required to get the current level',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'next_level_rating',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The rating value required to get to the next level; omitted if the maximum level was reached',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const StoryAreaPosition = t({
  name: 'StoryAreaPosition',
  description: {
    markdown: 'Describes the position of a clickable area within a story.',
  },
  fields: [
    {
      name: 'x_percentage',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'The abscissa of the area\'s center, as a percentage of the media width',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'y_percentage',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'The ordinate of the area\'s center, as a percentage of the media height',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'width_percentage',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'The width of the area\'s rectangle, as a percentage of the media width',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'height_percentage',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'The height of the area\'s rectangle, as a percentage of the media height',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'rotation_angle',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'The clockwise rotation angle of the rectangle, in degrees; 0-360',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'corner_radius_percentage',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'The radius of the rectangle corner rounding, as a percentage of the media width',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const LocationAddress = t({
  name: 'LocationAddress',
  description: {
    markdown: 'Describes the physical address of a location.',
  },
  fields: [
    {
      name: 'country_code',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'state',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'State of the location',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'city',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'City of the location',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'street',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Street address of the location',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const StoryAreaType = t({
  name: 'StoryAreaType',
  description: {
    markdown: 'Describes the type of a clickable area on a story. Currently, it can be one of\n\n-   [StoryAreaTypeLocation](https://core.telegram.org/bots/api#storyareatypelocation)\n-   [StoryAreaTypeSuggestedReaction](https://core.telegram.org/bots/api#storyareatypesuggestedreaction)\n-   [StoryAreaTypeLink](https://core.telegram.org/bots/api#storyareatypelink)\n-   [StoryAreaTypeWeather](https://core.telegram.org/bots/api#storyareatypeweather)\n-   [StoryAreaTypeUniqueGift](https://core.telegram.org/bots/api#storyareatypeuniquegift)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'StoryAreaTypeLocation',
    },
    {
      type: 'api-type',
      name: 'StoryAreaTypeSuggestedReaction',
    },
    {
      type: 'api-type',
      name: 'StoryAreaTypeLink',
    },
    {
      type: 'api-type',
      name: 'StoryAreaTypeWeather',
    },
    {
      type: 'api-type',
      name: 'StoryAreaTypeUniqueGift',
    },
  ],
})

const StoryAreaTypeLocation = t({
  name: 'StoryAreaTypeLocation',
  description: {
    markdown: 'Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the area, always “location”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'latitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Location latitude in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Location longitude in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'address',
      type: {
        type: 'api-type',
        name: 'LocationAddress',
      },
      description: {
        markdown: 'Address of the location',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const StoryAreaTypeSuggestedReaction = t({
  name: 'StoryAreaTypeSuggestedReaction',
  description: {
    markdown: 'Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the area, always “suggested\\_reaction”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'reaction_type',
      type: {
        type: 'api-type',
        name: 'ReactionType',
      },
      description: {
        markdown: 'Type of the reaction',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_dark',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the reaction area has a dark background',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_flipped',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if reaction area corner is flipped',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const StoryAreaTypeLink = t({
  name: 'StoryAreaTypeLink',
  description: {
    markdown: 'Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the area, always “link”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'HTTP or tg:// URL to be opened when the area is clicked',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const StoryAreaTypeWeather = t({
  name: 'StoryAreaTypeWeather',
  description: {
    markdown: 'Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the area, always “weather”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'temperature',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Temperature, in degree Celsius',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'emoji',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Emoji representing the weather',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'background_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'A color of the area background in the ARGB format',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const StoryAreaTypeUniqueGift = t({
  name: 'StoryAreaTypeUniqueGift',
  description: {
    markdown: 'Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the area, always “unique\\_gift”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique name of the gift',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const StoryArea = t({
  name: 'StoryArea',
  description: {
    markdown: 'Describes a clickable area on a story media.',
  },
  fields: [
    {
      name: 'position',
      type: {
        type: 'api-type',
        name: 'StoryAreaPosition',
      },
      description: {
        markdown: 'Position of the area',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'api-type',
        name: 'StoryAreaType',
      },
      description: {
        markdown: 'Type of the area',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatLocation = t({
  name: 'ChatLocation',
  description: {
    markdown: 'Represents a location to which a chat is connected.',
  },
  fields: [
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'Location',
      },
      description: {
        markdown: 'The location to which the supergroup is connected. Can\'t be a live location.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'address',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Location address; 1-64 characters, as defined by the chat owner',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ReactionType = t({
  name: 'ReactionType',
  description: {
    markdown: 'This object describes the type of a reaction. Currently, it can be one of\n\n-   [ReactionTypeEmoji](https://core.telegram.org/bots/api#reactiontypeemoji)\n-   [ReactionTypeCustomEmoji](https://core.telegram.org/bots/api#reactiontypecustomemoji)\n-   [ReactionTypePaid](https://core.telegram.org/bots/api#reactiontypepaid)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'ReactionTypeEmoji',
    },
    {
      type: 'api-type',
      name: 'ReactionTypeCustomEmoji',
    },
    {
      type: 'api-type',
      name: 'ReactionTypePaid',
    },
  ],
})

const ReactionTypeEmoji = t({
  name: 'ReactionTypeEmoji',
  description: {
    markdown: 'The reaction is based on an emoji.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the reaction, always “emoji”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'emoji',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Reaction emoji. Currently, it can be one of "![❤](//telegram.org/img/emoji/40/E29DA4.png)", "![👍](//telegram.org/img/emoji/40/F09F918D.png)", "![👎](//telegram.org/img/emoji/40/F09F918E.png)", "![🔥](//telegram.org/img/emoji/40/F09F94A5.png)", "![🥰](//telegram.org/img/emoji/40/F09FA5B0.png)", "![👏](//telegram.org/img/emoji/40/F09F918F.png)", "![😁](//telegram.org/img/emoji/40/F09F9881.png)", "![🤔](//telegram.org/img/emoji/40/F09FA494.png)", "![🤯](//telegram.org/img/emoji/40/F09FA4AF.png)", "![😱](//telegram.org/img/emoji/40/F09F98B1.png)", "![🤬](//telegram.org/img/emoji/40/F09FA4AC.png)", "![😢](//telegram.org/img/emoji/40/F09F98A2.png)", "![🎉](//telegram.org/img/emoji/40/F09F8E89.png)", "![🤩](//telegram.org/img/emoji/40/F09FA4A9.png)", "![🤮](//telegram.org/img/emoji/40/F09FA4AE.png)", "![💩](//telegram.org/img/emoji/40/F09F92A9.png)", "![🙏](//telegram.org/img/emoji/40/F09F998F.png)", "![👌](//telegram.org/img/emoji/40/F09F918C.png)", "![🕊](//telegram.org/img/emoji/40/F09F958A.png)", "![🤡](//telegram.org/img/emoji/40/F09FA4A1.png)", "![🥱](//telegram.org/img/emoji/40/F09FA5B1.png)", "![🥴](//telegram.org/img/emoji/40/F09FA5B4.png)", "![😍](//telegram.org/img/emoji/40/F09F988D.png)", "![🐳](//telegram.org/img/emoji/40/F09F90B3.png)", "![❤‍🔥](//telegram.org/img/emoji/40/E29DA4E2808DF09F94A5.png)", "![🌚](//telegram.org/img/emoji/40/F09F8C9A.png)", "![🌭](//telegram.org/img/emoji/40/F09F8CAD.png)", "![💯](//telegram.org/img/emoji/40/F09F92AF.png)", "![🤣](//telegram.org/img/emoji/40/F09FA4A3.png)", "![⚡](//telegram.org/img/emoji/40/E29AA1.png)", "![🍌](//telegram.org/img/emoji/40/F09F8D8C.png)", "![🏆](//telegram.org/img/emoji/40/F09F8F86.png)", "![💔](//telegram.org/img/emoji/40/F09F9294.png)", "![🤨](//telegram.org/img/emoji/40/F09FA4A8.png)", "![😐](//telegram.org/img/emoji/40/F09F9890.png)", "![🍓](//telegram.org/img/emoji/40/F09F8D93.png)", "![🍾](//telegram.org/img/emoji/40/F09F8DBE.png)", "![💋](//telegram.org/img/emoji/40/F09F928B.png)", "![🖕](//telegram.org/img/emoji/40/F09F9695.png)", "![😈](//telegram.org/img/emoji/40/F09F9888.png)", "![😴](//telegram.org/img/emoji/40/F09F98B4.png)", "![😭](//telegram.org/img/emoji/40/F09F98AD.png)", "![🤓](//telegram.org/img/emoji/40/F09FA493.png)", "![👻](//telegram.org/img/emoji/40/F09F91BB.png)", "![👨‍💻](//telegram.org/img/emoji/40/F09F91A8E2808DF09F92BB.png)", "![👀](//telegram.org/img/emoji/40/F09F9180.png)", "![🎃](//telegram.org/img/emoji/40/F09F8E83.png)", "![🙈](//telegram.org/img/emoji/40/F09F9988.png)", "![😇](//telegram.org/img/emoji/40/F09F9887.png)", "![😨](//telegram.org/img/emoji/40/F09F98A8.png)", "![🤝](//telegram.org/img/emoji/40/F09FA49D.png)", "![✍](//telegram.org/img/emoji/40/E29C8D.png)", "![🤗](//telegram.org/img/emoji/40/F09FA497.png)", "![🫡](//telegram.org/img/emoji/40/F09FABA1.png)", "![🎅](//telegram.org/img/emoji/40/F09F8E85.png)", "![🎄](//telegram.org/img/emoji/40/F09F8E84.png)", "![☃](//telegram.org/img/emoji/40/E29883.png)", "![💅](//telegram.org/img/emoji/40/F09F9285.png)", "![🤪](//telegram.org/img/emoji/40/F09FA4AA.png)", "![🗿](//telegram.org/img/emoji/40/F09F97BF.png)", "![🆒](//telegram.org/img/emoji/40/F09F8692.png)", "![💘](//telegram.org/img/emoji/40/F09F9298.png)", "![🙉](//telegram.org/img/emoji/40/F09F9989.png)", "![🦄](//telegram.org/img/emoji/40/F09FA684.png)", "![😘](//telegram.org/img/emoji/40/F09F9898.png)", "![💊](//telegram.org/img/emoji/40/F09F928A.png)", "![🙊](//telegram.org/img/emoji/40/F09F998A.png)", "![😎](//telegram.org/img/emoji/40/F09F988E.png)", "![👾](//telegram.org/img/emoji/40/F09F91BE.png)", "![🤷‍♂](//telegram.org/img/emoji/40/F09FA4B7E2808DE29982.png)", "![🤷](//telegram.org/img/emoji/40/F09FA4B7.png)", "![🤷‍♀](//telegram.org/img/emoji/40/F09FA4B7E2808DE29980.png)", "![😡](//telegram.org/img/emoji/40/F09F98A1.png)"',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ReactionTypeCustomEmoji = t({
  name: 'ReactionTypeCustomEmoji',
  description: {
    markdown: 'The reaction is based on a custom emoji.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the reaction, always “custom\\_emoji”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ReactionTypePaid = t({
  name: 'ReactionTypePaid',
  description: {
    markdown: 'The reaction is paid.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the reaction, always “paid”',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ReactionCount = t({
  name: 'ReactionCount',
  description: {
    markdown: 'Represents a reaction added to a message along with the number of times it was added.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'api-type',
        name: 'ReactionType',
      },
      description: {
        markdown: 'Type of the reaction',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'total_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of times the reaction was added',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MessageReactionUpdated = t({
  name: 'MessageReactionUpdated',
  description: {
    markdown: 'This object represents a change of a reaction on a message performed by a user.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'The chat containing the message the user reacted to',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the message inside the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'The user that changed the reaction, if the user isn\'t anonymous',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'actor_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'The chat on behalf of which the reaction was changed, if the user is anonymous',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date of the change in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'old_reaction',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'ReactionType',
        },
      },
      description: {
        markdown: 'Previous list of reaction types that were set by the user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'new_reaction',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'ReactionType',
        },
      },
      description: {
        markdown: 'New list of reaction types that have been set by the user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MessageReactionCountUpdated = t({
  name: 'MessageReactionCountUpdated',
  description: {
    markdown: 'This object represents reaction changes on a message with anonymous reactions.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'The chat containing the message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique message identifier inside the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date of the change in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'reactions',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'ReactionCount',
        },
      },
      description: {
        markdown: 'List of reactions that are present on the message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ForumTopic = t({
  name: 'ForumTopic',
  description: {
    markdown: 'This object represents a forum topic.',
  },
  fields: [
    {
      name: 'message_thread_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the forum topic',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the topic',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'icon_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Color of the topic icon in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'icon_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the custom emoji shown as the topic icon',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_name_implicit',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the name of the topic wasn\'t specified explicitly by its creator and likely needs to be changed by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const GiftBackground = t({
  name: 'GiftBackground',
  description: {
    markdown: 'This object describes the background of a gift.',
  },
  fields: [
    {
      name: 'center_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Center color of the background in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'edge_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Edge color of the background in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Text color of the background in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const Gift = t({
  name: 'Gift',
  description: {
    markdown: 'This object represents a gift that can be sent by the bot.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        type: 'api-type',
        name: 'Sticker',
      },
      description: {
        markdown: 'The sticker that represents the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars that must be paid to send the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'upgrade_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars that must be paid to upgrade the gift to a unique one',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_premium',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift can only be purchased by Telegram Premium subscribers',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_colors',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift can be used (after being upgraded) to customize a user\'s appearance',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'total_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The total number of gifts of this type that can be sent by all users; for limited gifts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'remaining_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of remaining gifts of this type that can be sent by all users; for limited gifts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'personal_total_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The total number of gifts of this type that can be sent by the bot; for limited gifts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'personal_remaining_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of remaining gifts of this type that can be sent by the bot; for limited gifts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'background',
      type: {
        type: 'api-type',
        name: 'GiftBackground',
      },
      description: {
        markdown: 'Background of the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'unique_gift_variant_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The total number of different unique gifts that can be obtained by upgrading the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'publisher_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Information about the chat that published the gift',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Gifts = t({
  name: 'Gifts',
  description: {
    markdown: 'This object represent a list of gifts.',
  },
  fields: [
    {
      name: 'gifts',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'Gift',
        },
      },
      description: {
        markdown: 'The list of gifts',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UniqueGiftModel = t({
  name: 'UniqueGiftModel',
  description: {
    markdown: 'This object describes the model of a unique gift.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the model',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        type: 'api-type',
        name: 'Sticker',
      },
      description: {
        markdown: 'The sticker that represents the unique gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'rarity_per_mille',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of unique gifts that receive this model for every 1000 gifts upgraded',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UniqueGiftSymbol = t({
  name: 'UniqueGiftSymbol',
  description: {
    markdown: 'This object describes the symbol shown on the pattern of a unique gift.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the symbol',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker',
      type: {
        type: 'api-type',
        name: 'Sticker',
      },
      description: {
        markdown: 'The sticker that represents the unique gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'rarity_per_mille',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of unique gifts that receive this model for every 1000 gifts upgraded',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UniqueGiftBackdropColors = t({
  name: 'UniqueGiftBackdropColors',
  description: {
    markdown: 'This object describes the colors of the backdrop of a unique gift.',
  },
  fields: [
    {
      name: 'center_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The color in the center of the backdrop in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'edge_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The color on the edges of the backdrop in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'symbol_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The color to be applied to the symbol in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The color for the text on the backdrop in RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UniqueGiftBackdrop = t({
  name: 'UniqueGiftBackdrop',
  description: {
    markdown: 'This object describes the backdrop of a unique gift.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the backdrop',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'colors',
      type: {
        type: 'api-type',
        name: 'UniqueGiftBackdropColors',
      },
      description: {
        markdown: 'Colors of the backdrop',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'rarity_per_mille',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of unique gifts that receive this backdrop for every 1000 gifts upgraded',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UniqueGiftColors = t({
  name: 'UniqueGiftColors',
  description: {
    markdown: 'This object contains information about the color scheme for a user\'s name, message replies and link previews based on a unique gift.',
  },
  fields: [
    {
      name: 'model_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier of the unique gift\'s model',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'symbol_custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Custom emoji identifier of the unique gift\'s symbol',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'light_theme_main_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Main color used in light themes; RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'light_theme_other_colors',
      type: {
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: 'List of 1-3 additional colors used in light themes; RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'dark_theme_main_color',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Main color used in dark themes; RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'dark_theme_other_colors',
      type: {
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: 'List of 1-3 additional colors used in dark themes; RGB format',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UniqueGift = t({
  name: 'UniqueGift',
  description: {
    markdown: 'This object describes a unique gift that was upgraded from a regular gift.',
  },
  fields: [
    {
      name: 'gift_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier of the regular gift from which the gift was upgraded',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'base_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Human-readable name of the regular gift from which this unique gift was upgraded',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique name of the gift. This name can be used in `https://t.me/nft/...` links and story areas',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'number',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique number of the upgraded gift among gifts upgraded from the same regular gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'model',
      type: {
        type: 'api-type',
        name: 'UniqueGiftModel',
      },
      description: {
        markdown: 'Model of the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'symbol',
      type: {
        type: 'api-type',
        name: 'UniqueGiftSymbol',
      },
      description: {
        markdown: 'Symbol of the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'backdrop',
      type: {
        type: 'api-type',
        name: 'UniqueGiftBackdrop',
      },
      description: {
        markdown: 'Backdrop of the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_premium',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the original regular gift was exclusively purchaseable by Telegram Premium subscribers',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_from_blockchain',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift is assigned from the TON blockchain and can\'t be resold or transferred in Telegram',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'colors',
      type: {
        type: 'api-type',
        name: 'UniqueGiftColors',
      },
      description: {
        markdown: 'The color scheme that can be used by the gift\'s owner for the chat\'s name, replies to messages and link previews; for business account gifts and gifts that are currently on sale only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'publisher_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Information about the chat that published the gift',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const GiftInfo = t({
  name: 'GiftInfo',
  description: {
    markdown: 'Describes a service message about a regular gift that was sent or received.',
  },
  fields: [
    {
      name: 'gift',
      type: {
        type: 'api-type',
        name: 'Gift',
      },
      description: {
        markdown: 'Information about the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'owned_gift_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'convert_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prepaid_upgrade_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars that were prepaid for the ability to upgrade the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_upgrade_separate',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift\'s upgrade was purchased after the gift was sent',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_be_upgraded',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift can be upgraded to a unique gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the message that was added to the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in the text',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_private',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'unique_gift_number',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique number reserved for this gift when upgraded. See the _number_ field in [UniqueGift](https://core.telegram.org/bots/api#uniquegift)',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const UniqueGiftInfo = t({
  name: 'UniqueGiftInfo',
  description: {
    markdown: 'Describes a service message about a unique gift that was sent or received.',
  },
  fields: [
    {
      name: 'gift',
      type: {
        type: 'api-type',
        name: 'UniqueGift',
      },
      description: {
        markdown: 'Information about the gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'origin',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Origin of the gift. Currently, either “upgrade” for gifts upgraded from regular gifts, “transfer” for gifts transferred from other users or channels, “resale” for gifts bought from other users, “gifted\\_upgrade” for upgrades purchased after the gift was sent, or “offer” for gifts bought or sold through gift purchase offers',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'last_resale_currency',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For gifts bought from other users, the currency in which the payment for the gift was done. Currently, one of “XTR” for Telegram Stars or “TON” for toncoins.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'last_resale_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'For gifts bought from other users, the price paid for the gift in either Telegram Stars or nanotoncoins',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'owned_gift_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'transfer_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'next_transfer_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const OwnedGift = t({
  name: 'OwnedGift',
  description: {
    markdown: 'This object describes a gift received and owned by a user or a chat. Currently, it can be one of\n\n-   [OwnedGiftRegular](https://core.telegram.org/bots/api#ownedgiftregular)\n-   [OwnedGiftUnique](https://core.telegram.org/bots/api#ownedgiftunique)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'OwnedGiftRegular',
    },
    {
      type: 'api-type',
      name: 'OwnedGiftUnique',
    },
  ],
})

const OwnedGiftRegular = t({
  name: 'OwnedGiftRegular',
  description: {
    markdown: 'Describes a regular gift owned by a user or a chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the gift, always “regular”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gift',
      type: {
        type: 'api-type',
        name: 'Gift',
      },
      description: {
        markdown: 'Information about the regular gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'owned_gift_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sender_user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Sender of the gift if it is a known user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the gift was sent in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the message that was added to the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in the text',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_private',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_saved',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift is displayed on the account\'s profile page; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_be_upgraded',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'was_refunded',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift was refunded and isn\'t available anymore',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'convert_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prepaid_upgrade_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars that were paid for the ability to upgrade the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_upgrade_separate',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift\'s upgrade was purchased after the gift was sent; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'unique_gift_number',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique number reserved for this gift when upgraded. See the _number_ field in [UniqueGift](https://core.telegram.org/bots/api#uniquegift)',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const OwnedGiftUnique = t({
  name: 'OwnedGiftUnique',
  description: {
    markdown: 'Describes a unique gift received and owned by a user or a chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the gift, always “unique”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gift',
      type: {
        type: 'api-type',
        name: 'UniqueGift',
      },
      description: {
        markdown: 'Information about the unique gift',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'owned_gift_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'sender_user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Sender of the gift if it is a known user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'send_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the gift was sent in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_saved',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift is displayed on the account\'s profile page; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_be_transferred',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'transfer_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'next_transfer_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const OwnedGifts = t({
  name: 'OwnedGifts',
  description: {
    markdown: 'Contains the list of gifts received and owned by a user or a chat.',
  },
  fields: [
    {
      name: 'total_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The total number of gifts owned by the user or the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gifts',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'OwnedGift',
        },
      },
      description: {
        markdown: 'The list of gifts',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'next_offset',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Offset for the next request. If empty, then there are no more results',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const AcceptedGiftTypes = t({
  name: 'AcceptedGiftTypes',
  description: {
    markdown: 'This object describes the types of gifts that can be gifted to a user or a chat.',
  },
  fields: [
    {
      name: 'unlimited_gifts',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if unlimited regular gifts are accepted',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'limited_gifts',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if limited regular gifts are accepted',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'unique_gifts',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if unique gifts or gifts that can be upgraded to unique for free are accepted',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'premium_subscription',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if a Telegram Premium subscription is accepted',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gifts_from_channels',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if transfers of unique gifts from channels are accepted',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const StarAmount = t({
  name: 'StarAmount',
  description: {
    markdown: 'Describes an amount of Telegram Stars.',
  },
  fields: [
    {
      name: 'amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Integer amount of Telegram Stars, rounded to 0; can be negative',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'nanostar_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if _amount_ is non-positive',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const BotCommand = t({
  name: 'BotCommand',
  description: {
    markdown: 'This object represents a bot command.',
  },
  fields: [
    {
      name: 'command',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Description of the command; 1-256 characters.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotCommandScope = t({
  name: 'BotCommandScope',
  description: {
    markdown: 'This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:\n\n-   [BotCommandScopeDefault](https://core.telegram.org/bots/api#botcommandscopedefault)\n-   [BotCommandScopeAllPrivateChats](https://core.telegram.org/bots/api#botcommandscopeallprivatechats)\n-   [BotCommandScopeAllGroupChats](https://core.telegram.org/bots/api#botcommandscopeallgroupchats)\n-   [BotCommandScopeAllChatAdministrators](https://core.telegram.org/bots/api#botcommandscopeallchatadministrators)\n-   [BotCommandScopeChat](https://core.telegram.org/bots/api#botcommandscopechat)\n-   [BotCommandScopeChatAdministrators](https://core.telegram.org/bots/api#botcommandscopechatadministrators)\n-   [BotCommandScopeChatMember](https://core.telegram.org/bots/api#botcommandscopechatmember)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'BotCommandScopeDefault',
    },
    {
      type: 'api-type',
      name: 'BotCommandScopeAllPrivateChats',
    },
    {
      type: 'api-type',
      name: 'BotCommandScopeAllGroupChats',
    },
    {
      type: 'api-type',
      name: 'BotCommandScopeAllChatAdministrators',
    },
    {
      type: 'api-type',
      name: 'BotCommandScopeChat',
    },
    {
      type: 'api-type',
      name: 'BotCommandScopeChatAdministrators',
    },
    {
      type: 'api-type',
      name: 'BotCommandScopeChatMember',
    },
  ],
})

const BotCommandScopeDefault = t({
  name: 'BotCommandScopeDefault',
  description: {
    markdown: 'Represents the default [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands. Default commands are used if no commands with a [narrower scope](https://core.telegram.org/bots/api#determining-list-of-commands) are specified for the user.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Scope type, must be _default_',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotCommandScopeAllPrivateChats = t({
  name: 'BotCommandScopeAllPrivateChats',
  description: {
    markdown: 'Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering all private chats.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Scope type, must be _all\\_private\\_chats_',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotCommandScopeAllGroupChats = t({
  name: 'BotCommandScopeAllGroupChats',
  description: {
    markdown: 'Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering all group and supergroup chats.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Scope type, must be _all\\_group\\_chats_',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotCommandScopeAllChatAdministrators = t({
  name: 'BotCommandScopeAllChatAdministrators',
  description: {
    markdown: 'Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering all group and supergroup chat administrators.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Scope type, must be _all\\_chat\\_administrators_',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotCommandScopeChat = t({
  name: 'BotCommandScopeChat',
  description: {
    markdown: 'Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering a specific chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Scope type, must be _chat_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        type: 'union',
        types: [
          {
            type: 'int32',
          },
          {
            type: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`). Channel direct messages chats and channel chats aren\'t supported.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotCommandScopeChatAdministrators = t({
  name: 'BotCommandScopeChatAdministrators',
  description: {
    markdown: 'Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering all administrators of a specific group or supergroup chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Scope type, must be _chat\\_administrators_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        type: 'union',
        types: [
          {
            type: 'int32',
          },
          {
            type: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`). Channel direct messages chats and channel chats aren\'t supported.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotCommandScopeChatMember = t({
  name: 'BotCommandScopeChatMember',
  description: {
    markdown: 'Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering a specific member of a group or supergroup chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Scope type, must be _chat\\_member_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_id',
      type: {
        type: 'union',
        types: [
          {
            type: 'int32',
          },
          {
            type: 'str',
          },
        ],
      },
      description: {
        markdown: 'Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`). Channel direct messages chats and channel chats aren\'t supported.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unique identifier of the target user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotName = t({
  name: 'BotName',
  description: {
    markdown: 'This object represents the bot\'s name.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The bot\'s name',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotDescription = t({
  name: 'BotDescription',
  description: {
    markdown: 'This object represents the bot\'s description.',
  },
  fields: [
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The bot\'s description',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BotShortDescription = t({
  name: 'BotShortDescription',
  description: {
    markdown: 'This object represents the bot\'s short description.',
  },
  fields: [
    {
      name: 'short_description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The bot\'s short description',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MenuButton = t({
  name: 'MenuButton',
  description: {
    markdown: 'This object describes the bot\'s menu button in a private chat. It should be one of\n\n-   [MenuButtonCommands](https://core.telegram.org/bots/api#menubuttoncommands)\n-   [MenuButtonWebApp](https://core.telegram.org/bots/api#menubuttonwebapp)\n-   [MenuButtonDefault](https://core.telegram.org/bots/api#menubuttondefault)\n\nIf a menu button other than [MenuButtonDefault](https://core.telegram.org/bots/api#menubuttondefault) is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'MenuButtonCommands',
    },
    {
      type: 'api-type',
      name: 'MenuButtonWebApp',
    },
    {
      type: 'api-type',
      name: 'MenuButtonDefault',
    },
  ],
})

const MenuButtonCommands = t({
  name: 'MenuButtonCommands',
  description: {
    markdown: 'Represents a menu button, which opens the bot\'s list of commands.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the button, must be _commands_',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MenuButtonWebApp = t({
  name: 'MenuButtonWebApp',
  description: {
    markdown: 'Represents a menu button, which launches a [Web App](https://core.telegram.org/bots/webapps).',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the button, must be _web\\_app_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text on the button',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'web_app',
      type: {
        type: 'api-type',
        name: 'WebAppInfo',
      },
      description: {
        markdown: 'Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery). Alternatively, a `t.me` link to a Web App of the bot can be specified in the object instead of the Web App\'s URL, in which case the Web App will be opened as if the user pressed the link.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const MenuButtonDefault = t({
  name: 'MenuButtonDefault',
  description: {
    markdown: 'Describes that no specific value for the menu button was set.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the button, must be _default_',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatBoostSource = t({
  name: 'ChatBoostSource',
  description: {
    markdown: 'This object describes the source of a chat boost. It can be one of\n\n-   [ChatBoostSourcePremium](https://core.telegram.org/bots/api#chatboostsourcepremium)\n-   [ChatBoostSourceGiftCode](https://core.telegram.org/bots/api#chatboostsourcegiftcode)\n-   [ChatBoostSourceGiveaway](https://core.telegram.org/bots/api#chatboostsourcegiveaway)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'ChatBoostSourcePremium',
    },
    {
      type: 'api-type',
      name: 'ChatBoostSourceGiftCode',
    },
    {
      type: 'api-type',
      name: 'ChatBoostSourceGiveaway',
    },
  ],
})

const ChatBoostSourcePremium = t({
  name: 'ChatBoostSourcePremium',
  description: {
    markdown: 'The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Source of the boost, always “premium”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User that boosted the chat',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatBoostSourceGiftCode = t({
  name: 'ChatBoostSourceGiftCode',
  description: {
    markdown: 'The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Source of the boost, always “gift\\_code”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User for which the gift code was created',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatBoostSourceGiveaway = t({
  name: 'ChatBoostSourceGiveaway',
  description: {
    markdown: 'The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and _prize\\_star\\_count_ / 500 times for one year for Telegram Star giveaways.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Source of the boost, always “giveaway”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'giveaway_message_id',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn\'t sent yet.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User that won the prize in the giveaway if any; for Telegram Premium giveaways only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'prize_star_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_unclaimed',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the giveaway was completed, but there was no user to win the prize',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChatBoost = t({
  name: 'ChatBoost',
  description: {
    markdown: 'This object contains information about a chat boost.',
  },
  fields: [
    {
      name: 'boost_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the boost',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'add_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the chat was boosted',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'expiration_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the boost will automatically expire, unless the booster\'s Telegram Premium subscription is prolonged',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'source',
      type: {
        type: 'api-type',
        name: 'ChatBoostSource',
      },
      description: {
        markdown: 'Source of the added boost',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatBoostUpdated = t({
  name: 'ChatBoostUpdated',
  description: {
    markdown: 'This object represents a boost added to a chat or changed.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat which was boosted',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'boost',
      type: {
        type: 'api-type',
        name: 'ChatBoost',
      },
      description: {
        markdown: 'Information about the chat boost',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ChatBoostRemoved = t({
  name: 'ChatBoostRemoved',
  description: {
    markdown: 'This object represents a boost removed from a chat.',
  },
  fields: [
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Chat which was boosted',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'boost_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the boost',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'remove_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Point in time (Unix timestamp) when the boost was removed',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'source',
      type: {
        type: 'api-type',
        name: 'ChatBoostSource',
      },
      description: {
        markdown: 'Source of the removed boost',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const UserChatBoosts = t({
  name: 'UserChatBoosts',
  description: {
    markdown: 'This object represents a list of boosts added to a chat by a user.',
  },
  fields: [
    {
      name: 'boosts',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'ChatBoost',
        },
      },
      description: {
        markdown: 'The list of boosts added to the chat by the user',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BusinessBotRights = t({
  name: 'BusinessBotRights',
  description: {
    markdown: 'Represents the rights of a business bot.',
  },
  fields: [
    {
      name: 'can_reply',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_read_messages',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can mark incoming private messages as read',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_sent_messages',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can delete messages sent by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_delete_all_messages',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can delete all private messages in managed chats',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_name',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can edit the first and last name of the business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_bio',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can edit the bio of the business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_profile_photo',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can edit the profile photo of the business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_edit_username',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can edit the username of the business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_change_gift_settings',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can change the privacy settings pertaining to gifts for the business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_view_gifts_and_stars',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can view gifts and the amount of Telegram Stars owned by the business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_convert_gifts_to_stars',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can convert regular gifts owned by the business account to Telegram Stars',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_transfer_and_upgrade_gifts',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can transfer and upgrade gifts owned by the business account',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_transfer_stars',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'can_manage_stories',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the bot can post, edit and delete stories on behalf of the business account',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const BusinessConnection = t({
  name: 'BusinessConnection',
  description: {
    markdown: 'Describes the connection of the bot with a business account.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Business account user that created the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user_chat_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'Identifier of a private chat with the user who created the business connection.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the connection was established in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'rights',
      type: {
        type: 'api-type',
        name: 'BusinessBotRights',
      },
      description: {
        markdown: 'Rights of the business bot',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_enabled',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the connection is active',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const BusinessMessagesDeleted = t({
  name: 'BusinessMessagesDeleted',
  description: {
    markdown: 'This object is received when messages are deleted from a connected business account.',
  },
  fields: [
    {
      name: 'business_connection_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the business connection',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message_ids',
      type: {
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: 'The list of identifiers of deleted messages in the chat of the business account',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ResponseParameters = t({
  name: 'ResponseParameters',
  description: {
    markdown: 'Describes why a request was unsuccessful.',
  },
  fields: [
    {
      name: 'migrate_to_chat_id',
      type: {
        type: 'int53',
      },
      description: {
        markdown: 'The group has been migrated to a supergroup with the specified identifier.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'retry_after',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'In case of exceeding flood control, the number of seconds left to wait before the request can be repeated',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputMedia = t({
  name: 'InputMedia',
  description: {
    markdown: 'This object represents the content of a media message to be sent. It should be one of\n\n-   [InputMediaAnimation](https://core.telegram.org/bots/api#inputmediaanimation)\n-   [InputMediaDocument](https://core.telegram.org/bots/api#inputmediadocument)\n-   [InputMediaAudio](https://core.telegram.org/bots/api#inputmediaaudio)\n-   [InputMediaPhoto](https://core.telegram.org/bots/api#inputmediaphoto)\n-   [InputMediaVideo](https://core.telegram.org/bots/api#inputmediavideo)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'InputMediaAnimation',
    },
    {
      type: 'api-type',
      name: 'InputMediaDocument',
    },
    {
      type: 'api-type',
      name: 'InputMediaAudio',
    },
    {
      type: 'api-type',
      name: 'InputMediaPhoto',
    },
    {
      type: 'api-type',
      name: 'InputMediaVideo',
    },
  ],
})

const InputMediaPhoto = t({
  name: 'InputMediaPhoto',
  description: {
    markdown: 'Represents a photo to be sent.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _photo_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the photo to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
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
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the photo needs to be covered with a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputMediaVideo = t({
  name: 'InputMediaVideo',
  description: {
    markdown: 'Represents a video to be sent.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _video_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'int32',
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
        type: 'str',
      },
      description: {
        markdown: 'Caption of the video to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
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
        type: 'int32',
      },
      description: {
        markdown: 'Video height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video duration in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'supports_streaming',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the uploaded video is suitable for streaming',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_spoiler',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the video needs to be covered with a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputMediaAnimation = t({
  name: 'InputMediaAnimation',
  description: {
    markdown: 'Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _animation_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Caption of the animation to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
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
        type: 'int32',
      },
      description: {
        markdown: 'Animation height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Animation duration in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'has_spoiler',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the animation needs to be covered with a spoiler animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputMediaAudio = t({
  name: 'InputMediaAudio',
  description: {
    markdown: 'Represents an audio file to be treated as music to be sent.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _audio_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Caption of the audio to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
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
        type: 'str',
      },
      description: {
        markdown: 'Performer of the audio',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the audio',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputMediaDocument = t({
  name: 'InputMediaDocument',
  description: {
    markdown: 'Represents a general file to be sent.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _document_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Caption of the document to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'disable_content_type_detection',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always _True_, if the document is sent as part of an album.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputPaidMedia = t({
  name: 'InputPaidMedia',
  description: {
    markdown: 'This object describes the paid media to be sent. Currently, it can be one of\n\n-   [InputPaidMediaPhoto](https://core.telegram.org/bots/api#inputpaidmediaphoto)\n-   [InputPaidMediaVideo](https://core.telegram.org/bots/api#inputpaidmediavideo)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'InputPaidMediaPhoto',
    },
    {
      type: 'api-type',
      name: 'InputPaidMediaVideo',
    },
  ],
})

const InputPaidMediaPhoto = t({
  name: 'InputPaidMediaPhoto',
  description: {
    markdown: 'The paid media to send is a photo.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the media, must be _photo_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const InputPaidMediaVideo = t({
  name: 'InputPaidMediaVideo',
  description: {
    markdown: 'The paid media to send is a video.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the media, must be _video_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'media',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'File to send. Pass a file\\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new one using multipart/form-data under <file\\_attach\\_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'int32',
      },
      description: {
        markdown: 'Start timestamp for the video in the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
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
        type: 'int32',
      },
      description: {
        markdown: 'Video height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video duration in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'supports_streaming',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the uploaded video is suitable for streaming',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputProfilePhoto = t({
  name: 'InputProfilePhoto',
  description: {
    markdown: 'This object describes a profile photo to set. Currently, it can be one of\n\n-   [InputProfilePhotoStatic](https://core.telegram.org/bots/api#inputprofilephotostatic)\n-   [InputProfilePhotoAnimated](https://core.telegram.org/bots/api#inputprofilephotoanimated)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'InputProfilePhotoStatic',
    },
    {
      type: 'api-type',
      name: 'InputProfilePhotoAnimated',
    },
  ],
})

const InputProfilePhotoStatic = t({
  name: 'InputProfilePhotoStatic',
  description: {
    markdown: 'A static profile photo in the .JPG format.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the profile photo, must be _static_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The static profile photo. Profile photos can\'t be reused and can only be uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the photo was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const InputProfilePhotoAnimated = t({
  name: 'InputProfilePhotoAnimated',
  description: {
    markdown: 'An animated profile photo in the MPEG4 format.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the profile photo, must be _animated_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'animation',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The animated profile photo. Profile photos can\'t be reused and can only be uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the photo was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'main_frame_timestamp',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputStoryContent = t({
  name: 'InputStoryContent',
  description: {
    markdown: 'This object describes the content of a story to post. Currently, it can be one of\n\n-   [InputStoryContentPhoto](https://core.telegram.org/bots/api#inputstorycontentphoto)\n-   [InputStoryContentVideo](https://core.telegram.org/bots/api#inputstorycontentvideo)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'InputStoryContentPhoto',
    },
    {
      type: 'api-type',
      name: 'InputStoryContentVideo',
    },
  ],
})

const InputStoryContentPhoto = t({
  name: 'InputStoryContentPhoto',
  description: {
    markdown: 'Describes a photo to post as a story.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the content, must be _photo_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can\'t be reused and can only be uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the photo was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const InputStoryContentVideo = t({
  name: 'InputStoryContentVideo',
  description: {
    markdown: 'Describes a video to post as a story.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the content, must be _video_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'video',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can\'t be reused and can only be uploaded as a new file, so you can pass “attach://<file\\_attach\\_name>” if the video was uploaded using multipart/form-data under <file\\_attach\\_name>. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'duration',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Precise duration of the video in seconds; 0-60',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'cover_frame_timestamp',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_animation',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the video has no sound',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const Sticker = t({
  name: 'Sticker',
  description: {
    markdown: 'This object represents a sticker.',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the sticker, currently one of “regular”, “mask”, “custom\\_emoji”. The type of the sticker is independent from its format, which is determined by the fields _is\\_animated_ and _is\\_video_.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Sticker width',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Sticker height',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_animated',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the sticker is [animated](https://telegram.org/blog/animated-stickers)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'is_video',
      type: {
        type: 'bool',
      },
      description: {
        markdown: '_True_, if the sticker is a [video sticker](https://telegram.org/blog/video-stickers-better-reactions)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'api-type',
        name: 'PhotoSize',
      },
      description: {
        markdown: 'Sticker thumbnail in the .WEBP or .JPG format',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'emoji',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Emoji associated with the sticker',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'set_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the sticker set to which the sticker belongs',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'premium_animation',
      type: {
        type: 'api-type',
        name: 'File',
      },
      description: {
        markdown: 'For premium regular stickers, premium animation for the sticker',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'mask_position',
      type: {
        type: 'api-type',
        name: 'MaskPosition',
      },
      description: {
        markdown: 'For mask stickers, the position where the mask should be placed',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'custom_emoji_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'For custom emoji stickers, unique identifier of the custom emoji',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'needs_repainting',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'File size in bytes',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const StickerSet = t({
  name: 'StickerSet',
  description: {
    markdown: 'This object represents a sticker set.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Sticker set title',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of stickers in the set, currently one of “regular”, “mask”, “custom\\_emoji”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'stickers',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'Sticker',
        },
      },
      description: {
        markdown: 'List of all set stickers',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail',
      type: {
        type: 'api-type',
        name: 'PhotoSize',
      },
      description: {
        markdown: 'Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const MaskPosition = t({
  name: 'MaskPosition',
  description: {
    markdown: 'This object describes the position on faces where a mask should be placed by default.',
  },
  fields: [
    {
      name: 'point',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'x_shift',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'y_shift',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'scale',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Mask scaling coefficient. For example, 2.0 means double size.',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const InputSticker = t({
  name: 'InputSticker',
  description: {
    markdown: 'This object describes a sticker to be added to a sticker set.',
  },
  fields: [
    {
      name: 'sticker',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The added sticker. Pass a _file\\_id_ as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass “attach://<file\\_attach\\_name>” to upload a new file using multipart/form-data under <file\\_attach\\_name> name. Animated and video stickers can\'t be uploaded via HTTP URL. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'format',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Format of the added sticker, must be one of “static” for a **.WEBP** or **.PNG** image, “animated” for a **.TGS** animation, “video” for a **.WEBM** video',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'emoji_list',
      type: {
        type: 'array',
        of: {
          type: 'str',
        },
      },
      description: {
        markdown: 'List of 1-20 emoji associated with the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mask_position',
      type: {
        type: 'api-type',
        name: 'MaskPosition',
      },
      description: {
        markdown: 'Position where the mask should be placed on faces. For “mask” stickers only.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'keywords',
      type: {
        type: 'array',
        of: {
          type: 'str',
        },
      },
      description: {
        markdown: 'List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom\\_emoji” stickers only.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQuery = t({
  name: 'InlineQuery',
  description: {
    markdown: 'This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this query',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Sender',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'query',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the query (up to 256 characters)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'offset',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Offset of the results to be returned, can be controlled by the bot',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'Location',
      },
      description: {
        markdown: 'Sender location, only for bots that request user location',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultsButton = t({
  name: 'InlineQueryResultsButton',
  description: {
    markdown: 'This object represents a button to be shown above inline query results. You **must** use exactly one of the optional fields.',
  },
  fields: [
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Label text on the button',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'web_app',
      type: {
        type: 'api-type',
        name: 'WebAppInfo',
      },
      description: {
        markdown: 'Description of the [Web App](https://core.telegram.org/bots/webapps) that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method [switchInlineQuery](https://core.telegram.org/bots/webapps#initializing-mini-apps) inside the Web App.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'start_parameter',
      type: {
        type: 'str',
      },
      description: {
        markdown: '[Deep-linking](https://core.telegram.org/bots/features#deep-linking) parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.\n\n_Example:_ An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a \'Connect your YouTube account\' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a [_switch\\_inline_](https://core.telegram.org/bots/api#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot\'s inline capabilities.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResult = t({
  name: 'InlineQueryResult',
  description: {
    markdown: 'This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:\n\n-   [InlineQueryResultCachedAudio](https://core.telegram.org/bots/api#inlinequeryresultcachedaudio)\n-   [InlineQueryResultCachedDocument](https://core.telegram.org/bots/api#inlinequeryresultcacheddocument)\n-   [InlineQueryResultCachedGif](https://core.telegram.org/bots/api#inlinequeryresultcachedgif)\n-   [InlineQueryResultCachedMpeg4Gif](https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif)\n-   [InlineQueryResultCachedPhoto](https://core.telegram.org/bots/api#inlinequeryresultcachedphoto)\n-   [InlineQueryResultCachedSticker](https://core.telegram.org/bots/api#inlinequeryresultcachedsticker)\n-   [InlineQueryResultCachedVideo](https://core.telegram.org/bots/api#inlinequeryresultcachedvideo)\n-   [InlineQueryResultCachedVoice](https://core.telegram.org/bots/api#inlinequeryresultcachedvoice)\n-   [InlineQueryResultArticle](https://core.telegram.org/bots/api#inlinequeryresultarticle)\n-   [InlineQueryResultAudio](https://core.telegram.org/bots/api#inlinequeryresultaudio)\n-   [InlineQueryResultContact](https://core.telegram.org/bots/api#inlinequeryresultcontact)\n-   [InlineQueryResultGame](https://core.telegram.org/bots/api#inlinequeryresultgame)\n-   [InlineQueryResultDocument](https://core.telegram.org/bots/api#inlinequeryresultdocument)\n-   [InlineQueryResultGif](https://core.telegram.org/bots/api#inlinequeryresultgif)\n-   [InlineQueryResultLocation](https://core.telegram.org/bots/api#inlinequeryresultlocation)\n-   [InlineQueryResultMpeg4Gif](https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif)\n-   [InlineQueryResultPhoto](https://core.telegram.org/bots/api#inlinequeryresultphoto)\n-   [InlineQueryResultVenue](https://core.telegram.org/bots/api#inlinequeryresultvenue)\n-   [InlineQueryResultVideo](https://core.telegram.org/bots/api#inlinequeryresultvideo)\n-   [InlineQueryResultVoice](https://core.telegram.org/bots/api#inlinequeryresultvoice)\n\n**Note:** All URLs passed in inline query results will be available to end users and therefore must be assumed to be **public**.',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedAudio',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedDocument',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedGif',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedMpeg4Gif',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedPhoto',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedSticker',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedVideo',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultCachedVoice',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultArticle',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultAudio',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultContact',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultGame',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultDocument',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultGif',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultLocation',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultMpeg4Gif',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultPhoto',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultVenue',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultVideo',
    },
    {
      type: 'api-type',
      name: 'InlineQueryResultVoice',
    },
  ],
})

const InlineQueryResultArticle = t({
  name: 'InlineQueryResultArticle',
  description: {
    markdown: 'Represents a link to an article or web page.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _article_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 Bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'URL of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short description of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Url of the thumbnail for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail height',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultPhoto = t({
  name: 'InlineQueryResultPhoto',
  description: {
    markdown: 'Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the photo.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _photo_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid URL of the photo. Photo must be in **JPEG** format. Photo size must not exceed 5MB',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'URL of the thumbnail for the photo',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Width of the photo',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Height of the photo',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short description of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the photo to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the photo',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultGif = t({
  name: 'InlineQueryResultGif',
  description: {
    markdown: 'Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the animation.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _gif_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gif_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid URL for the GIF file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gif_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Width of the GIF',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'gif_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Height of the GIF',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'gif_duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Duration of the GIF in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the GIF file to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the GIF animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultMpeg4Gif = t({
  name: 'InlineQueryResultMpeg4Gif',
  description: {
    markdown: 'Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the animation.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _mpeg4\\_gif_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mpeg4_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid URL for the MPEG4 file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mpeg4_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'mpeg4_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'mpeg4_duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video duration in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the video animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultVideo = t({
  name: 'InlineQueryResultVideo',
  description: {
    markdown: 'Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the video.\n\n> If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you **must** replace its content using _input\\_message\\_content_.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _video_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'video_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid URL for the embedded video player or video file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the content of the video URL, “text/html” or “video/mp4”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'URL of the thumbnail (JPEG only) for the video',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the video to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video height',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'video_duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Video duration in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short description of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the video. This field is **required** if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultAudio = t({
  name: 'InlineQueryResultAudio',
  description: {
    markdown: 'Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the audio.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _audio_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'audio_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid URL for the audio file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'performer',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Performer',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'audio_duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Audio duration in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the audio',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultVoice = t({
  name: 'InlineQueryResultVoice',
  description: {
    markdown: 'Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the the voice message.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _voice_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'voice_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid URL for the voice recording',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Recording title',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'voice_duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Recording duration in seconds',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the voice recording',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultDocument = t({
  name: 'InlineQueryResultDocument',
  description: {
    markdown: 'Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the file. Currently, only **.PDF** and **.ZIP** files can be sent using this method.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _document_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the document to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'document_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid URL for the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mime_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'MIME type of the content of the file, either “application/pdf” or “application/zip”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short description of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: 'Inline keyboard attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'URL of the thumbnail (JPEG only) for the file',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail height',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultLocation = t({
  name: 'InlineQueryResultLocation',
  description: {
    markdown: 'Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the location.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _location_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 Bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'latitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Location latitude in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Location longitude in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Location title',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'horizontal_accuracy',
      type: {
        type: 'float',
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
        type: 'int32',
      },
      description: {
        markdown: 'Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'heading',
      type: {
        type: 'int32',
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
        type: 'int32',
      },
      description: {
        markdown: 'For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the location',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Url of the thumbnail for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail height',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultVenue = t({
  name: 'InlineQueryResultVenue',
  description: {
    markdown: 'Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the venue.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _venue_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 Bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'latitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Latitude of the venue location in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Longitude of the venue location in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the venue',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'address',
      type: {
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Foursquare identifier of the venue if known',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'foursquare_type',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the venue',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Url of the thumbnail for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail height',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultContact = t({
  name: 'InlineQueryResultContact',
  description: {
    markdown: 'Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the contact.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _contact_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 Bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'phone_number',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the contact',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Url of the thumbnail for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_width',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail width',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'thumbnail_height',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Thumbnail height',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultGame = t({
  name: 'InlineQueryResultGame',
  description: {
    markdown: 'Represents a [Game](https://core.telegram.org/bots/api#games).',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _game_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'game_short_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short name of the game',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedPhoto = t({
  name: 'InlineQueryResultCachedPhoto',
  description: {
    markdown: 'Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the photo.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _photo_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier of the photo',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short description of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the photo to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the photo',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedGif = t({
  name: 'InlineQueryResultCachedGif',
  description: {
    markdown: 'Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with specified content instead of the animation.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _gif_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gif_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier for the GIF file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the GIF file to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the GIF animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedMpeg4Gif = t({
  name: 'InlineQueryResultCachedMpeg4Gif',
  description: {
    markdown: 'Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the animation.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _mpeg4\\_gif_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'mpeg4_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier for the MPEG4 file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the video animation',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedSticker = t({
  name: 'InlineQueryResultCachedSticker',
  description: {
    markdown: 'Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the sticker.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _sticker_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sticker_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier of the sticker',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the sticker',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedDocument = t({
  name: 'InlineQueryResultCachedDocument',
  description: {
    markdown: 'Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the file.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _document_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'document_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier for the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short description of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the document to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the file',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedVideo = t({
  name: 'InlineQueryResultCachedVideo',
  description: {
    markdown: 'Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the video.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _video_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'video_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier for the video file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title for the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Short description of the result',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption of the video to be sent, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'show_caption_above_media',
      type: {
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_, if the caption must be shown above the message media',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the video',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedVoice = t({
  name: 'InlineQueryResultCachedVoice',
  description: {
    markdown: 'Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the voice message.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _voice_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'voice_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier for the voice message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Voice message title',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the voice message',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InlineQueryResultCachedAudio = t({
  name: 'InlineQueryResultCachedAudio',
  description: {
    markdown: 'Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use _input\\_message\\_content_ to send a message with the specified content instead of the audio.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the result, must be _audio_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this result, 1-64 bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'audio_file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A valid file identifier for the audio file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'caption',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Caption, 0-1024 characters after entities parsing',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in the caption, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reply_markup',
      type: {
        type: 'api-type',
        name: 'InlineKeyboardMarkup',
      },
      description: {
        markdown: '[Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'input_message_content',
      type: {
        type: 'api-type',
        name: 'InputMessageContent',
      },
      description: {
        markdown: 'Content of the message to be sent instead of the audio',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputMessageContent = t({
  name: 'InputMessageContent',
  description: {
    markdown: 'This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:\n\n-   [InputTextMessageContent](https://core.telegram.org/bots/api#inputtextmessagecontent)\n-   [InputLocationMessageContent](https://core.telegram.org/bots/api#inputlocationmessagecontent)\n-   [InputVenueMessageContent](https://core.telegram.org/bots/api#inputvenuemessagecontent)\n-   [InputContactMessageContent](https://core.telegram.org/bots/api#inputcontactmessagecontent)\n-   [InputInvoiceMessageContent](https://core.telegram.org/bots/api#inputinvoicemessagecontent)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'InputTextMessageContent',
    },
    {
      type: 'api-type',
      name: 'InputLocationMessageContent',
    },
    {
      type: 'api-type',
      name: 'InputVenueMessageContent',
    },
    {
      type: 'api-type',
      name: 'InputContactMessageContent',
    },
    {
      type: 'api-type',
      name: 'InputInvoiceMessageContent',
    },
  ],
})

const InputTextMessageContent = t({
  name: 'InputTextMessageContent',
  description: {
    markdown: 'Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a text message to be sent as the result of an inline query.',
  },
  fields: [
    {
      name: 'message_text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Text of the message to be sent, 1-4096 characters',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'parse_mode',
      type: {
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'List of special entities that appear in message text, which can be specified instead of _parse\\_mode_',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'link_preview_options',
      type: {
        type: 'api-type',
        name: 'LinkPreviewOptions',
      },
      description: {
        markdown: 'Link preview generation options for the message',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputLocationMessageContent = t({
  name: 'InputLocationMessageContent',
  description: {
    markdown: 'Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a location message to be sent as the result of an inline query.',
  },
  fields: [
    {
      name: 'latitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Latitude of the location in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Longitude of the location in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'horizontal_accuracy',
      type: {
        type: 'float',
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
        type: 'int32',
      },
      description: {
        markdown: 'Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'heading',
      type: {
        type: 'int32',
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
        type: 'int32',
      },
      description: {
        markdown: 'For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputVenueMessageContent = t({
  name: 'InputVenueMessageContent',
  description: {
    markdown: 'Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a venue message to be sent as the result of an inline query.',
  },
  fields: [
    {
      name: 'latitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Latitude of the venue in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'longitude',
      type: {
        type: 'float',
      },
      description: {
        markdown: 'Longitude of the venue in degrees',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Foursquare identifier of the venue, if known',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'foursquare_type',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputContactMessageContent = t({
  name: 'InputContactMessageContent',
  description: {
    markdown: 'Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a contact message to be sent as the result of an inline query.',
  },
  fields: [
    {
      name: 'phone_number',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
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
        type: 'str',
      },
      description: {
        markdown: 'Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const InputInvoiceMessageContent = t({
  name: 'InputInvoiceMessageContent',
  description: {
    markdown: 'Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of an invoice message to be sent as the result of an inline query.',
  },
  fields: [
    {
      name: 'title',
      type: {
        type: 'str',
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
        type: 'str',
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
        type: 'str',
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
        type: 'str',
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
        type: 'str',
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
        type: 'array',
        of: {
          type: 'api-type',
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
        type: 'int32',
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
        type: 'array',
        of: {
          type: 'int32',
        },
      },
      description: {
        markdown: 'An array of suggested amounts of tip in the _smallest units_ of the currency (integer, **not** float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed _max\\_tip\\_amount_.',
      },
      required: false,
      jsonSerialized: true,
    },
    {
      name: 'provider_data',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'photo_url',
      type: {
        type: 'str',
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
        type: 'int32',
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
        type: 'int32',
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
        type: 'int32',
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
        type: 'bool',
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
        type: 'bool',
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
        type: 'bool',
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
        type: 'bool',
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
        type: 'bool',
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
        type: 'bool',
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
        type: 'bool',
      },
      description: {
        markdown: 'Pass _True_ if the final price depends on the shipping method. Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ChosenInlineResult = t({
  name: 'ChosenInlineResult',
  description: {
    markdown: 'Represents a [result](https://core.telegram.org/bots/api#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.\n\n**Note:** It is necessary to enable [inline feedback](https://core.telegram.org/bots/inline#collecting-feedback) via [@BotFather](https://t.me/botfather) in order to receive these objects in updates.',
  },
  fields: [
    {
      name: 'result_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The unique identifier for the result that was chosen',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'The user that chose the result',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'location',
      type: {
        type: 'api-type',
        name: 'Location',
      },
      description: {
        markdown: 'Sender location, only for bots that require user location',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'inline_message_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.telegram.org/bots/api#inlinekeyboardmarkup) attached to the message. Will be also received in [callback queries](https://core.telegram.org/bots/api#callbackquery) and can be used to [edit](https://core.telegram.org/bots/api#updating-messages) the message.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'query',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The query that was used to obtain the result',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const SentWebAppMessage = t({
  name: 'SentWebAppMessage',
  description: {
    markdown: 'Describes an inline message sent by a [Web App](https://core.telegram.org/bots/webapps) on behalf of a user.',
  },
  fields: [
    {
      name: 'inline_message_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.telegram.org/bots/api#inlinekeyboardmarkup) attached to the message.',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const PreparedInlineMessage = t({
  name: 'PreparedInlineMessage',
  description: {
    markdown: 'Describes an inline message to be sent by a user of a Mini App.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the prepared message',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'expiration_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const LabeledPrice = t({
  name: 'LabeledPrice',
  description: {
    markdown: 'This object represents a portion of the price for goods or services.',
  },
  fields: [
    {
      name: 'label',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Portion label',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Price of the product in the _smallest units_ of the [currency](https://core.telegram.org/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const Invoice = t({
  name: 'Invoice',
  description: {
    markdown: 'This object contains basic information about an invoice.',
  },
  fields: [
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Product name',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Product description',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'start_parameter',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique bot deep-linking parameter that can be used to generate this invoice',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'currency',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'total_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Total price in the _smallest units_ of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const ShippingAddress = t({
  name: 'ShippingAddress',
  description: {
    markdown: 'This object represents a shipping address.',
  },
  fields: [
    {
      name: 'country_code',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'state',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'State, if applicable',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'city',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'City',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'street_line1',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'First line for the address',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'street_line2',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Second line for the address',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'post_code',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Address post code',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const OrderInfo = t({
  name: 'OrderInfo',
  description: {
    markdown: 'This object represents information about an order.',
  },
  fields: [
    {
      name: 'name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User name',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'phone_number',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User\'s phone number',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'email',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User email',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'shipping_address',
      type: {
        type: 'api-type',
        name: 'ShippingAddress',
      },
      description: {
        markdown: 'User shipping address',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ShippingOption = t({
  name: 'ShippingOption',
  description: {
    markdown: 'This object represents one shipping option.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Shipping option identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Option title',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'prices',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'LabeledPrice',
        },
      },
      description: {
        markdown: 'List of price portions',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const SuccessfulPayment = t({
  name: 'SuccessfulPayment',
  description: {
    markdown: 'This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram\'s control.',
  },
  fields: [
    {
      name: 'currency',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'total_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Total price in the _smallest units_ of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invoice_payload',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bot-specified invoice payload',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'subscription_expiration_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Expiration date of the subscription, in Unix time; for recurring payments only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_recurring',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the payment is a recurring payment for a subscription',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'is_first_recurring',
      type: {
        type: 'bool',
        literal: true,
      },
      description: {
        markdown: '_True_, if the payment is the first payment for a subscription',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'shipping_option_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier of the shipping option chosen by the user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'order_info',
      type: {
        type: 'api-type',
        name: 'OrderInfo',
      },
      description: {
        markdown: 'Order information provided by the user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'telegram_payment_charge_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Telegram payment identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'provider_payment_charge_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Provider payment identifier',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const RefundedPayment = t({
  name: 'RefundedPayment',
  description: {
    markdown: 'This object contains basic information about a refunded payment.',
  },
  fields: [
    {
      name: 'currency',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90). Currently, always “XTR”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'total_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Total refunded price in the _smallest units_ of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45`, `total_amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invoice_payload',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bot-specified invoice payload',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'telegram_payment_charge_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Telegram payment identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'provider_payment_charge_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Provider payment identifier',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const ShippingQuery = t({
  name: 'ShippingQuery',
  description: {
    markdown: 'This object contains information about an incoming shipping query.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique query identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User who sent the query',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invoice_payload',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bot-specified invoice payload',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'shipping_address',
      type: {
        type: 'api-type',
        name: 'ShippingAddress',
      },
      description: {
        markdown: 'User specified shipping address',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PreCheckoutQuery = t({
  name: 'PreCheckoutQuery',
  description: {
    markdown: 'This object contains information about an incoming pre-checkout query.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique query identifier',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User who sent the query',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'currency',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90)',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'total_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Total price in the _smallest units_ of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'invoice_payload',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bot-specified invoice payload',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'shipping_option_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier of the shipping option chosen by the user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'order_info',
      type: {
        type: 'api-type',
        name: 'OrderInfo',
      },
      description: {
        markdown: 'Order information provided by the user',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const PaidMediaPurchased = t({
  name: 'PaidMediaPurchased',
  description: {
    markdown: 'This object contains information about a paid media purchase.',
  },
  fields: [
    {
      name: 'from',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User who purchased the media',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'paid_media_payload',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bot-specified paid media payload',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const RevenueWithdrawalState = t({
  name: 'RevenueWithdrawalState',
  description: {
    markdown: 'This object describes the state of a revenue withdrawal operation. Currently, it can be one of\n\n-   [RevenueWithdrawalStatePending](https://core.telegram.org/bots/api#revenuewithdrawalstatepending)\n-   [RevenueWithdrawalStateSucceeded](https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded)\n-   [RevenueWithdrawalStateFailed](https://core.telegram.org/bots/api#revenuewithdrawalstatefailed)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'RevenueWithdrawalStatePending',
    },
    {
      type: 'api-type',
      name: 'RevenueWithdrawalStateSucceeded',
    },
    {
      type: 'api-type',
      name: 'RevenueWithdrawalStateFailed',
    },
  ],
})

const RevenueWithdrawalStatePending = t({
  name: 'RevenueWithdrawalStatePending',
  description: {
    markdown: 'The withdrawal is in progress.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the state, always “pending”',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const RevenueWithdrawalStateSucceeded = t({
  name: 'RevenueWithdrawalStateSucceeded',
  description: {
    markdown: 'The withdrawal succeeded.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the state, always “succeeded”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the withdrawal was completed in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'url',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'An HTTPS URL that can be used to see transaction details',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const RevenueWithdrawalStateFailed = t({
  name: 'RevenueWithdrawalStateFailed',
  description: {
    markdown: 'The withdrawal failed and the transaction was refunded.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the state, always “failed”',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const AffiliateInfo = t({
  name: 'AffiliateInfo',
  description: {
    markdown: 'Contains information about the affiliate that received a commission via this transaction.',
  },
  fields: [
    {
      name: 'affiliate_user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'The bot or the user that received an affiliate commission if it was received by a bot or a user',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'affiliate_chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'The chat that received an affiliate commission if it was received by a chat',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'commission_per_mille',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'nanostar_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const TransactionPartner = t({
  name: 'TransactionPartner',
  description: {
    markdown: 'This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of\n\n-   [TransactionPartnerUser](https://core.telegram.org/bots/api#transactionpartneruser)\n-   [TransactionPartnerChat](https://core.telegram.org/bots/api#transactionpartnerchat)\n-   [TransactionPartnerAffiliateProgram](https://core.telegram.org/bots/api#transactionpartneraffiliateprogram)\n-   [TransactionPartnerFragment](https://core.telegram.org/bots/api#transactionpartnerfragment)\n-   [TransactionPartnerTelegramAds](https://core.telegram.org/bots/api#transactionpartnertelegramads)\n-   [TransactionPartnerTelegramApi](https://core.telegram.org/bots/api#transactionpartnertelegramapi)\n-   [TransactionPartnerOther](https://core.telegram.org/bots/api#transactionpartnerother)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'TransactionPartnerUser',
    },
    {
      type: 'api-type',
      name: 'TransactionPartnerChat',
    },
    {
      type: 'api-type',
      name: 'TransactionPartnerAffiliateProgram',
    },
    {
      type: 'api-type',
      name: 'TransactionPartnerFragment',
    },
    {
      type: 'api-type',
      name: 'TransactionPartnerTelegramAds',
    },
    {
      type: 'api-type',
      name: 'TransactionPartnerTelegramApi',
    },
    {
      type: 'api-type',
      name: 'TransactionPartnerOther',
    },
  ],
})

const TransactionPartnerUser = t({
  name: 'TransactionPartnerUser',
  description: {
    markdown: 'Describes a transaction with a user.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction partner, always “user”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'transaction_type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction, currently one of “invoice\\_payment” for payments via invoices, “paid\\_media\\_payment” for payments for paid media, “gift\\_purchase” for gifts sent by the bot, “premium\\_purchase” for Telegram Premium subscriptions gifted by the bot, “business\\_account\\_transfer” for direct transfers from managed business accounts',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the user',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'affiliate',
      type: {
        type: 'api-type',
        name: 'AffiliateInfo',
      },
      description: {
        markdown: 'Information about the affiliate that received a commission via this transaction. Can be available only for “invoice\\_payment” and “paid\\_media\\_payment” transactions.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'invoice_payload',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bot-specified invoice payload. Can be available only for “invoice\\_payment” transactions.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'subscription_period',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The duration of the paid subscription. Can be available only for “invoice\\_payment” transactions.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'paid_media',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PaidMedia',
        },
      },
      description: {
        markdown: 'Information about the paid media bought by the user; for “paid\\_media\\_payment” transactions only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'paid_media_payload',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Bot-specified paid media payload. Can be available only for “paid\\_media\\_payment” transactions.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'gift',
      type: {
        type: 'api-type',
        name: 'Gift',
      },
      description: {
        markdown: 'The gift sent to the user by the bot; for “gift\\_purchase” transactions only',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'premium_subscription_duration',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Number of months the gifted Telegram Premium subscription will be active for; for “premium\\_purchase” transactions only',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const TransactionPartnerChat = t({
  name: 'TransactionPartnerChat',
  description: {
    markdown: 'Describes a transaction with a chat.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction partner, always “chat”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'chat',
      type: {
        type: 'api-type',
        name: 'Chat',
      },
      description: {
        markdown: 'Information about the chat',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'gift',
      type: {
        type: 'api-type',
        name: 'Gift',
      },
      description: {
        markdown: 'The gift sent to the chat by the bot',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const TransactionPartnerAffiliateProgram = t({
  name: 'TransactionPartnerAffiliateProgram',
  description: {
    markdown: 'Describes the affiliate program that issued the affiliate commission received via this transaction.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction partner, always “affiliate\\_program”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'sponsor_user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'Information about the bot that sponsored the affiliate program',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'commission_per_mille',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const TransactionPartnerFragment = t({
  name: 'TransactionPartnerFragment',
  description: {
    markdown: 'Describes a withdrawal transaction with Fragment.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction partner, always “fragment”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'withdrawal_state',
      type: {
        type: 'api-type',
        name: 'RevenueWithdrawalState',
      },
      description: {
        markdown: 'State of the transaction if the transaction is outgoing',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const TransactionPartnerTelegramAds = t({
  name: 'TransactionPartnerTelegramAds',
  description: {
    markdown: 'Describes a withdrawal transaction to the Telegram Ads platform.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction partner, always “telegram\\_ads”',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const TransactionPartnerTelegramApi = t({
  name: 'TransactionPartnerTelegramApi',
  description: {
    markdown: 'Describes a transaction with payment for [paid broadcasting](https://core.telegram.org/bots/api#paid-broadcasts).',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction partner, always “telegram\\_api”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'request_count',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of successful requests that exceeded regular limits and were therefore billed',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const TransactionPartnerOther = t({
  name: 'TransactionPartnerOther',
  description: {
    markdown: 'Describes a transaction with an unknown source or recipient.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of the transaction partner, always “other”',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const StarTransaction = t({
  name: 'StarTransaction',
  description: {
    markdown: 'Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction, the refunded Stars will be deducted from the bot\'s balance. This is outside of Telegram\'s control.',
  },
  fields: [
    {
      name: 'id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with _SuccessfulPayment.telegram\\_payment\\_charge\\_id_ for successful incoming payments from users.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Integer amount of Telegram Stars transferred by the transaction',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'nanostar_amount',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Date the transaction was created in Unix time',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'source',
      type: {
        type: 'api-type',
        name: 'TransactionPartner',
      },
      description: {
        markdown: 'Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'receiver',
      type: {
        type: 'api-type',
        name: 'TransactionPartner',
      },
      description: {
        markdown: 'Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const StarTransactions = t({
  name: 'StarTransactions',
  description: {
    markdown: 'Contains a list of Telegram Star transactions.',
  },
  fields: [
    {
      name: 'transactions',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'StarTransaction',
        },
      },
      description: {
        markdown: 'The list of transactions',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportData = t({
  name: 'PassportData',
  description: {
    markdown: 'Describes Telegram Passport data shared with the bot by the user.',
  },
  fields: [
    {
      name: 'data',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'EncryptedPassportElement',
        },
      },
      description: {
        markdown: 'Array with information about documents and other Telegram Passport elements that was shared with the bot',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'credentials',
      type: {
        type: 'api-type',
        name: 'EncryptedCredentials',
      },
      description: {
        markdown: 'Encrypted credentials required to decrypt the data',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportFile = t({
  name: 'PassportFile',
  description: {
    markdown: 'This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don\'t exceed 10MB.',
  },
  fields: [
    {
      name: 'file_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Identifier for this file, which can be used to download or reuse the file',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_unique_id',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Unique identifier for this file, which is supposed to be the same over time and for different bots. Can\'t be used to download or reuse the file.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_size',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'File size in bytes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_date',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Unix time when the file was uploaded',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const EncryptedPassportElement = t({
  name: 'EncryptedPassportElement',
  description: {
    markdown: 'Describes documents or other Telegram Passport elements shared with the bot by the user.',
  },
  fields: [
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Element type. One of “personal\\_details”, “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “address”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration”, “phone\\_number”, “email”.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'data',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal\\_details”, “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'phone_number',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User\'s verified phone number; available only for “phone\\_number” type',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'email',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'User\'s verified email address; available only for “email” type',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'files',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PassportFile',
        },
      },
      description: {
        markdown: 'Array of encrypted files with documents provided by the user; available only for “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration” and “temporary\\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'front_side',
      type: {
        type: 'api-type',
        name: 'PassportFile',
      },
      description: {
        markdown: 'Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver\\_license”, “identity\\_card” and “internal\\_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'reverse_side',
      type: {
        type: 'api-type',
        name: 'PassportFile',
      },
      description: {
        markdown: 'Encrypted file with the reverse side of the document, provided by the user; available only for “driver\\_license” and “identity\\_card”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'selfie',
      type: {
        type: 'api-type',
        name: 'PassportFile',
      },
      description: {
        markdown: 'Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver\\_license”, “identity\\_card” and “internal\\_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'translation',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PassportFile',
        },
      },
      description: {
        markdown: 'Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration” and “temporary\\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded element hash for using in [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified)',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const EncryptedCredentials = t({
  name: 'EncryptedCredentials',
  description: {
    markdown: 'Describes data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes.',
  },
  fields: [
    {
      name: 'data',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded encrypted JSON-serialized data with unique user\'s payload, data hashes and secrets required for [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement) decryption and authentication',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded data hash for data authentication',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'secret',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded secret, encrypted with the bot\'s public RSA key, required for data decryption',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementError = t({
  name: 'PassportElementError',
  description: {
    markdown: 'This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:\n\n-   [PassportElementErrorDataField](https://core.telegram.org/bots/api#passportelementerrordatafield)\n-   [PassportElementErrorFrontSide](https://core.telegram.org/bots/api#passportelementerrorfrontside)\n-   [PassportElementErrorReverseSide](https://core.telegram.org/bots/api#passportelementerrorreverseside)\n-   [PassportElementErrorSelfie](https://core.telegram.org/bots/api#passportelementerrorselfie)\n-   [PassportElementErrorFile](https://core.telegram.org/bots/api#passportelementerrorfile)\n-   [PassportElementErrorFiles](https://core.telegram.org/bots/api#passportelementerrorfiles)\n-   [PassportElementErrorTranslationFile](https://core.telegram.org/bots/api#passportelementerrortranslationfile)\n-   [PassportElementErrorTranslationFiles](https://core.telegram.org/bots/api#passportelementerrortranslationfiles)\n-   [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified)',
  },
  oneOf: [
    {
      type: 'api-type',
      name: 'PassportElementErrorDataField',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorFrontSide',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorReverseSide',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorSelfie',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorFile',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorFiles',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorTranslationFile',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorTranslationFiles',
    },
    {
      type: 'api-type',
      name: 'PassportElementErrorUnspecified',
    },
  ],
})

const PassportElementErrorDataField = t({
  name: 'PassportElementErrorDataField',
  description: {
    markdown: 'Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field\'s value changes.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _data_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The section of the user\'s Telegram Passport which has the error, one of “personal\\_details”, “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “address”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'field_name',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Name of the data field which has the error',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'data_hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded data hash',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorFrontSide = t({
  name: 'PassportElementErrorFrontSide',
  description: {
    markdown: 'Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _front\\_side_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The section of the user\'s Telegram Passport which has the issue, one of “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded hash of the file with the front side of the document',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorReverseSide = t({
  name: 'PassportElementErrorReverseSide',
  description: {
    markdown: 'Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _reverse\\_side_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The section of the user\'s Telegram Passport which has the issue, one of “driver\\_license”, “identity\\_card”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded hash of the file with the reverse side of the document',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorSelfie = t({
  name: 'PassportElementErrorSelfie',
  description: {
    markdown: 'Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _selfie_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The section of the user\'s Telegram Passport which has the issue, one of “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded hash of the file with the selfie',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorFile = t({
  name: 'PassportElementErrorFile',
  description: {
    markdown: 'Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _file_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The section of the user\'s Telegram Passport which has the issue, one of “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded file hash',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorFiles = t({
  name: 'PassportElementErrorFiles',
  description: {
    markdown: 'Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _files_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'The section of the user\'s Telegram Passport which has the issue, one of “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_hashes',
      type: {
        type: 'array',
        of: {
          type: 'str',
        },
      },
      description: {
        markdown: 'List of base64-encoded file hashes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorTranslationFile = t({
  name: 'PassportElementErrorTranslationFile',
  description: {
    markdown: 'Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _translation\\_file_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of element of the user\'s Telegram Passport which has the issue, one of “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded file hash',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorTranslationFiles = t({
  name: 'PassportElementErrorTranslationFiles',
  description: {
    markdown: 'Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _translation\\_files_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of element of the user\'s Telegram Passport which has the issue, one of “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration”',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'file_hashes',
      type: {
        type: 'array',
        of: {
          type: 'str',
        },
      },
      description: {
        markdown: 'List of base64-encoded file hashes',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const PassportElementErrorUnspecified = t({
  name: 'PassportElementErrorUnspecified',
  description: {
    markdown: 'Represents an issue in an unspecified place. The error is considered resolved when new data is added.',
  },
  fields: [
    {
      name: 'source',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error source, must be _unspecified_',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'type',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Type of element of the user\'s Telegram Passport which has the issue',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'element_hash',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Base64-encoded element hash',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Error message',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

const Game = t({
  name: 'Game',
  description: {
    markdown: 'This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.',
  },
  fields: [
    {
      name: 'title',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Title of the game',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'description',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Description of the game',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'photo',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'PhotoSize',
        },
      },
      description: {
        markdown: 'Photo that will be displayed in the game message in chats.',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'text',
      type: {
        type: 'str',
      },
      description: {
        markdown: 'Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.telegram.org/bots/api#setgamescore), or manually edited using [editMessageText](https://core.telegram.org/bots/api#editmessagetext). 0-4096 characters.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'text_entities',
      type: {
        type: 'array',
        of: {
          type: 'api-type',
          name: 'MessageEntity',
        },
      },
      description: {
        markdown: 'Special entities that appear in _text_, such as usernames, URLs, bot commands, etc.',
      },
      required: false,
      jsonSerialized: false,
    },
    {
      name: 'animation',
      type: {
        type: 'api-type',
        name: 'Animation',
      },
      description: {
        markdown: 'Animation that will be displayed in the game message in chats. Upload via [BotFather](https://t.me/botfather)',
      },
      required: false,
      jsonSerialized: false,
    },
  ],
})

const CallbackGame = t({
  name: 'CallbackGame',
  description: {
    markdown: 'A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game.',
  },
  fields: [],
})

const GameHighScore = t({
  name: 'GameHighScore',
  description: {
    markdown: 'This object represents one row of the high scores table for a game.',
  },
  fields: [
    {
      name: 'position',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Position in high score table for the game',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'user',
      type: {
        type: 'api-type',
        name: 'User',
      },
      description: {
        markdown: 'User',
      },
      required: true,
      jsonSerialized: false,
    },
    {
      name: 'score',
      type: {
        type: 'int32',
      },
      description: {
        markdown: 'Score',
      },
      required: true,
      jsonSerialized: false,
    },
  ],
})

/**
 * Definition of all Bot API types as an object.
 * Properties are created in the same order as they appear in the docs.
 */
export const types = {
  Update,
  WebhookInfo,
  User,
  Chat,
  ChatFullInfo,
  Message,
  MessageId,
  InaccessibleMessage,
  MaybeInaccessibleMessage,
  MessageEntity,
  TextQuote,
  ExternalReplyInfo,
  ReplyParameters,
  MessageOrigin,
  MessageOriginUser,
  MessageOriginHiddenUser,
  MessageOriginChat,
  MessageOriginChannel,
  PhotoSize,
  Animation,
  Audio,
  Document,
  Story,
  Video,
  VideoNote,
  Voice,
  PaidMediaInfo,
  PaidMedia,
  PaidMediaPreview,
  PaidMediaPhoto,
  PaidMediaVideo,
  Contact,
  Dice,
  PollOption,
  InputPollOption,
  PollAnswer,
  Poll,
  ChecklistTask,
  Checklist,
  InputChecklistTask,
  InputChecklist,
  ChecklistTasksDone,
  ChecklistTasksAdded,
  Location,
  Venue,
  WebAppData,
  ProximityAlertTriggered,
  MessageAutoDeleteTimerChanged,
  ChatBoostAdded,
  BackgroundFill,
  BackgroundFillSolid,
  BackgroundFillGradient,
  BackgroundFillFreeformGradient,
  BackgroundType,
  BackgroundTypeFill,
  BackgroundTypeWallpaper,
  BackgroundTypePattern,
  BackgroundTypeChatTheme,
  ChatBackground,
  ForumTopicCreated,
  ForumTopicClosed,
  ForumTopicEdited,
  ForumTopicReopened,
  GeneralForumTopicHidden,
  GeneralForumTopicUnhidden,
  SharedUser,
  UsersShared,
  ChatShared,
  WriteAccessAllowed,
  VideoChatScheduled,
  VideoChatStarted,
  VideoChatEnded,
  VideoChatParticipantsInvited,
  PaidMessagePriceChanged,
  DirectMessagePriceChanged,
  SuggestedPostApproved,
  SuggestedPostApprovalFailed,
  SuggestedPostDeclined,
  SuggestedPostPaid,
  SuggestedPostRefunded,
  GiveawayCreated,
  Giveaway,
  GiveawayWinners,
  GiveawayCompleted,
  LinkPreviewOptions,
  SuggestedPostPrice,
  SuggestedPostInfo,
  SuggestedPostParameters,
  DirectMessagesTopic,
  UserProfilePhotos,
  File,
  WebAppInfo,
  ReplyKeyboardMarkup,
  KeyboardButton,
  KeyboardButtonRequestUsers,
  KeyboardButtonRequestChat,
  KeyboardButtonPollType,
  ReplyKeyboardRemove,
  InlineKeyboardMarkup,
  InlineKeyboardButton,
  LoginUrl,
  SwitchInlineQueryChosenChat,
  CopyTextButton,
  CallbackQuery,
  ForceReply,
  ChatPhoto,
  ChatInviteLink,
  ChatAdministratorRights,
  ChatMemberUpdated,
  ChatMember,
  ChatMemberOwner,
  ChatMemberAdministrator,
  ChatMemberMember,
  ChatMemberRestricted,
  ChatMemberLeft,
  ChatMemberBanned,
  ChatJoinRequest,
  ChatPermissions,
  Birthdate,
  BusinessIntro,
  BusinessLocation,
  BusinessOpeningHoursInterval,
  BusinessOpeningHours,
  UserRating,
  StoryAreaPosition,
  LocationAddress,
  StoryAreaType,
  StoryAreaTypeLocation,
  StoryAreaTypeSuggestedReaction,
  StoryAreaTypeLink,
  StoryAreaTypeWeather,
  StoryAreaTypeUniqueGift,
  StoryArea,
  ChatLocation,
  ReactionType,
  ReactionTypeEmoji,
  ReactionTypeCustomEmoji,
  ReactionTypePaid,
  ReactionCount,
  MessageReactionUpdated,
  MessageReactionCountUpdated,
  ForumTopic,
  GiftBackground,
  Gift,
  Gifts,
  UniqueGiftModel,
  UniqueGiftSymbol,
  UniqueGiftBackdropColors,
  UniqueGiftBackdrop,
  UniqueGiftColors,
  UniqueGift,
  GiftInfo,
  UniqueGiftInfo,
  OwnedGift,
  OwnedGiftRegular,
  OwnedGiftUnique,
  OwnedGifts,
  AcceptedGiftTypes,
  StarAmount,
  BotCommand,
  BotCommandScope,
  BotCommandScopeDefault,
  BotCommandScopeAllPrivateChats,
  BotCommandScopeAllGroupChats,
  BotCommandScopeAllChatAdministrators,
  BotCommandScopeChat,
  BotCommandScopeChatAdministrators,
  BotCommandScopeChatMember,
  BotName,
  BotDescription,
  BotShortDescription,
  MenuButton,
  MenuButtonCommands,
  MenuButtonWebApp,
  MenuButtonDefault,
  ChatBoostSource,
  ChatBoostSourcePremium,
  ChatBoostSourceGiftCode,
  ChatBoostSourceGiveaway,
  ChatBoost,
  ChatBoostUpdated,
  ChatBoostRemoved,
  UserChatBoosts,
  BusinessBotRights,
  BusinessConnection,
  BusinessMessagesDeleted,
  ResponseParameters,
  InputMedia,
  InputMediaPhoto,
  InputMediaVideo,
  InputMediaAnimation,
  InputMediaAudio,
  InputMediaDocument,
  InputPaidMedia,
  InputPaidMediaPhoto,
  InputPaidMediaVideo,
  InputProfilePhoto,
  InputProfilePhotoStatic,
  InputProfilePhotoAnimated,
  InputStoryContent,
  InputStoryContentPhoto,
  InputStoryContentVideo,
  Sticker,
  StickerSet,
  MaskPosition,
  InputSticker,
  InlineQuery,
  InlineQueryResultsButton,
  InlineQueryResult,
  InlineQueryResultArticle,
  InlineQueryResultPhoto,
  InlineQueryResultGif,
  InlineQueryResultMpeg4Gif,
  InlineQueryResultVideo,
  InlineQueryResultAudio,
  InlineQueryResultVoice,
  InlineQueryResultDocument,
  InlineQueryResultLocation,
  InlineQueryResultVenue,
  InlineQueryResultContact,
  InlineQueryResultGame,
  InlineQueryResultCachedPhoto,
  InlineQueryResultCachedGif,
  InlineQueryResultCachedMpeg4Gif,
  InlineQueryResultCachedSticker,
  InlineQueryResultCachedDocument,
  InlineQueryResultCachedVideo,
  InlineQueryResultCachedVoice,
  InlineQueryResultCachedAudio,
  InputMessageContent,
  InputTextMessageContent,
  InputLocationMessageContent,
  InputVenueMessageContent,
  InputContactMessageContent,
  InputInvoiceMessageContent,
  ChosenInlineResult,
  SentWebAppMessage,
  PreparedInlineMessage,
  LabeledPrice,
  Invoice,
  ShippingAddress,
  OrderInfo,
  ShippingOption,
  SuccessfulPayment,
  RefundedPayment,
  ShippingQuery,
  PreCheckoutQuery,
  PaidMediaPurchased,
  RevenueWithdrawalState,
  RevenueWithdrawalStatePending,
  RevenueWithdrawalStateSucceeded,
  RevenueWithdrawalStateFailed,
  AffiliateInfo,
  TransactionPartner,
  TransactionPartnerUser,
  TransactionPartnerChat,
  TransactionPartnerAffiliateProgram,
  TransactionPartnerFragment,
  TransactionPartnerTelegramAds,
  TransactionPartnerTelegramApi,
  TransactionPartnerOther,
  StarTransaction,
  StarTransactions,
  PassportData,
  PassportFile,
  EncryptedPassportElement,
  EncryptedCredentials,
  PassportElementError,
  PassportElementErrorDataField,
  PassportElementErrorFrontSide,
  PassportElementErrorReverseSide,
  PassportElementErrorSelfie,
  PassportElementErrorFile,
  PassportElementErrorFiles,
  PassportElementErrorTranslationFile,
  PassportElementErrorTranslationFiles,
  PassportElementErrorUnspecified,
  Game,
  CallbackGame,
  GameHighScore,
}
