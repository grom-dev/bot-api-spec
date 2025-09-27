import {
  $apiType,
  $descriptionMd,
  $int32,
  $unixTimestamp,
  defineType,
} from '../internal'

/**
 * @todo Define all fields.
 */
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
  ],
})

/**
 * @todo Define all fields.
 */
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
    {
      name: 'date',
      type: $unixTimestamp(),
      required: true,
      description: $descriptionMd(`Date the message was sent in Unix time. It is always a positive number, representing a valid date.`),
      jsonSerialized: false,
    },
  ],
})

export default {
  Update,
  Message,
}
