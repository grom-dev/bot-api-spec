/**
 * This module contains all types specified in the Bot API. Each type is
 * defined as a constant with identifier equal to the name of the type. All
 * types and their fields are declared in the same order as they appear in the
 * official docs. {@link defineType} internal function is used to define a type.
 *
 * @todo Define all the missing types and fields.
 * @module
 */

import {
  $apiType,
  $descriptionMd,
  $int32,
  $todo,
  $unixTimestamp,
  defineType,
} from '../_internal'

const Update = defineType({
  name: 'Update',
  description: $descriptionMd(`This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.\nAt most **one** of the optional parameters can be present in any given update.`),
  fields: [
    {
      name: 'update_id',
      type: $int32(),
      required: true,
      description: $descriptionMd(`The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using [webhooks](https://core.telegram.org/bots/api#setwebhook), since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.`),
      jsonSerialized: false,
    },
    {
      name: 'message',
      type: $apiType('Message'),
      required: false,
      description: $descriptionMd(`New incoming message of any kind - text, photo, sticker, etc.`),
      jsonSerialized: false,
    },
    $todo('edited_message'),
    $todo('channel_post'),
    $todo('edited_channel_post'),
    $todo('business_connection'),
    $todo('business_message'),
    $todo('edited_business_message'),
    $todo('deleted_business_messages'),
    $todo('message_reaction'),
    $todo('message_reaction_count'),
    $todo('inline_query'),
    $todo('chosen_inline_result'),
    $todo('callback_query'),
    $todo('shipping_query'),
    $todo('pre_checkout_query'),
    $todo('purchased_paid_media'),
    $todo('poll'),
    $todo('poll_answer'),
    $todo('my_chat_member'),
    $todo('chat_member'),
    $todo('chat_join_request'),
    $todo('chat_boost'),
    $todo('removed_chat_boost'),
  ],
})

const WebhookInfo = $todo()

const User = $todo()

const Chat = $todo()

const ChatFullInfo = $todo()

const Message = defineType({
  name: 'Message',
  description: $descriptionMd(`This object represents a message.`),
  fields: [
    {
      name: 'message_id',
      type: $int32(),
      required: true,
      description: $descriptionMd(`Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent.`),
      jsonSerialized: false,
    },
    $todo('message_thread_id'),
    $todo('direct_messages_topic'),
    $todo('from'),
    $todo('sender_chat'),
    $todo('sender_boost_count'),
    $todo('sender_business_bot'),
    {
      name: 'date',
      type: $unixTimestamp(),
      required: true,
      description: $descriptionMd(`Date the message was sent in Unix time. It is always a positive number, representing a valid date.`),
      jsonSerialized: false,
    },
    $todo('business_connection_id'),
    $todo('chat'),
    $todo('forward_origin'),
    $todo('is_topic_message'),
    $todo('is_automatic_forward'),
    $todo('reply_to_message'),
    $todo('external_reply'),
    $todo('quote'),
    $todo('reply_to_story'),
    $todo('reply_to_checklist_task_id'),
    $todo('via_bot'),
    $todo('edit_date'),
    $todo('has_protected_content'),
    $todo('is_from_offline'),
    $todo('is_paid_post'),
    $todo('media_group_id'),
    $todo('author_signature'),
    $todo('paid_star_count'),
    $todo('text'),
    $todo('entities'),
    $todo('link_preview_options'),
    $todo('suggested_post_info'),
    $todo('effect_id'),
    $todo('animation'),
    $todo('audio'),
    $todo('document'),
    $todo('paid_media'),
    $todo('photo'),
    $todo('sticker'),
    $todo('story'),
    $todo('video'),
    $todo('video_note'),
    $todo('voice'),
    $todo('caption'),
    $todo('caption_entities'),
    $todo('show_caption_above_media'),
    $todo('has_media_spoiler'),
    $todo('checklist'),
    $todo('contact'),
    $todo('dice'),
    $todo('game'),
    $todo('poll'),
    $todo('venue'),
    $todo('location'),
    $todo('new_chat_members'),
    $todo('left_chat_member'),
    $todo('new_chat_title'),
    $todo('new_chat_photo'),
    $todo('delete_chat_photo'),
    $todo('group_chat_created'),
    $todo('supergroup_chat_created'),
    $todo('channel_chat_created'),
    $todo('message_auto_delete_timer_changed'),
    $todo('migrate_to_chat_id'),
    $todo('migrate_from_chat_id'),
    $todo('pinned_message'),
    $todo('invoice'),
    $todo('successful_payment'),
    $todo('refunded_payment'),
    $todo('users_shared'),
    $todo('chat_shared'),
    $todo('gift'),
    $todo('unique_gift'),
    $todo('connected_website'),
    $todo('write_access_allowed'),
    $todo('passport_data'),
    $todo('proximity_alert_triggered'),
    $todo('boost_added'),
    $todo('chat_background_set'),
    $todo('checklist_tasks_done'),
    $todo('checklist_tasks_added'),
    $todo('direct_message_price_changed'),
    $todo('forum_topic_created'),
    $todo('forum_topic_edited'),
    $todo('forum_topic_closed'),
    $todo('forum_topic_reopened'),
    $todo('general_forum_topic_hidden'),
    $todo('general_forum_topic_unhidden'),
    $todo('giveaway_created'),
    $todo('giveaway'),
    $todo('giveaway_winners'),
    $todo('giveaway_completed'),
    $todo('paid_message_price_changed'),
    $todo('suggested_post_approved'),
    $todo('suggested_post_approval_failed'),
    $todo('suggested_post_declined'),
    $todo('suggested_post_paid'),
    $todo('suggested_post_refunded'),
    $todo('video_chat_scheduled'),
    $todo('video_chat_started'),
    $todo('video_chat_ended'),
    $todo('video_chat_participants_invited'),
    $todo('web_app_data'),
    $todo('reply_markup'),
  ],
})

/**
 * Definition of all Bot API types as an object.
 */
export const object = {
  Update,
  WebhookInfo,
  User,
  Chat,
  ChatFullInfo,
  Message,
}

/**
 * Definition of all Bot API types as an array. Order of the types is the same
 * as they appear in the official docs.
 */
export const array = [
  Update,
  WebhookInfo,
  User,
  Chat,
  ChatFullInfo,
  Message,
]
