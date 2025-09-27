/**
 * This module contains all methods specified in the Bot API. Each method is
 * defined as a constant with identifier equal to the name of the method. All
 * methods and their parameters are declared in the same order as they appear
 * in the official docs. {@link defineMethod} internal function is used to
 * define a method.
 *
 * @todo Define all the missing methods and parameters.
 * @module
 */

import {
  $apiType,
  $arrayOf,
  $descriptionMd,
  $int32,
  $str,
  $todo,
  defineMethod,
} from '../_internal'

const getUpdates = defineMethod({
  name: 'getUpdates',
  description: $descriptionMd(`Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). Returns an Array of [Update](https://core.telegram.org/bots/api#update) objects.`),
  parameters: [
    {
      name: 'offset',
      type: $int32(),
      required: false,
      description: $descriptionMd(`Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api#getupdates) is called with an *offset* higher than its *update_id*. The negative offset can be specified to retrieve updates starting from *-offset* update from the end of the updates queue. All previous updates will be forgotten.`),
      jsonSerialized: false,
    },
    {
      name: 'limit',
      type: $int32(),
      required: false,
      description: $descriptionMd(`Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.`),
      jsonSerialized: false,
    },
    {
      name: 'timeout',
      type: $int32(),
      required: false,
      description: $descriptionMd(`Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.`),
      jsonSerialized: false,
    },
    {
      name: 'allowed_updates',
      type: $arrayOf($str()),
      required: false,
      description: $descriptionMd(`List of the update types you want your bot to receive. For example, specify \`["message", "edited_channel_post", "callback_query"]\` to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all update types except *chat_member*, *message_reaction*, and *message_reaction_count* (default). If not specified, the previous setting will be used.\n\nPlease note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.`),
      jsonSerialized: true,
    },
  ],
  returns: $arrayOf($apiType('Update')),
})

const setWebhook = $todo()

/**
 * Definition of all Bot API methods as an object.
 */
export const object = {
  getUpdates,
  setWebhook,
}

/**
 * Definition of all Bot API methods as an array. Order of the methods is the
 * same as they appear in the official docs.
 */
export const array = [
  getUpdates,
  setWebhook,
]
