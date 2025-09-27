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

const MessageId = $todo()

const InaccessibleMessage = $todo()

const MaybeInaccessibleMessage = $todo()

const MessageEntity = $todo()

const TextQuote = $todo()

const ExternalReplyInfo = $todo()

const ReplyParameters = $todo()

const MessageOrigin = $todo()

const MessageOriginUser = $todo()

const MessageOriginHiddenUser = $todo()

const MessageOriginChat = $todo()

const MessageOriginChannel = $todo()

const PhotoSize = $todo()

const Animation = $todo()

const Audio = $todo()

const Document = $todo()

const Story = $todo()

const Video = $todo()

const VideoNote = $todo()

const Voice = $todo()

const PaidMediaInfo = $todo()

const PaidMedia = $todo()

const PaidMediaPreview = $todo()

const PaidMediaPhoto = $todo()

const PaidMediaVideo = $todo()

const Contact = $todo()

const Dice = $todo()

const PollOption = $todo()

const InputPollOption = $todo()

const PollAnswer = $todo()

const Poll = $todo()

const ChecklistTask = $todo()

const Checklist = $todo()

const InputChecklistTask = $todo()

const InputChecklist = $todo()

const ChecklistTasksDone = $todo()

const ChecklistTasksAdded = $todo()

const Location = $todo()

const Venue = $todo()

const WebAppData = $todo()

const ProximityAlertTriggered = $todo()

const MessageAutoDeleteTimerChanged = $todo()

const ChatBoostAdded = $todo()

const BackgroundFill = $todo()

const BackgroundFillSolid = $todo()

const BackgroundFillGradient = $todo()

const BackgroundFillFreeformGradient = $todo()

const BackgroundType = $todo()

const BackgroundTypeFill = $todo()

const BackgroundTypeWallpaper = $todo()

const BackgroundTypePattern = $todo()

const BackgroundTypeChatTheme = $todo()

const ChatBackground = $todo()

const ForumTopicCreated = $todo()

const ForumTopicClosed = $todo()

const ForumTopicEdited = $todo()

const ForumTopicReopened = $todo()

const GeneralForumTopicHidden = $todo()

const GeneralForumTopicUnhidden = $todo()

const SharedUser = $todo()

const UsersShared = $todo()

const ChatShared = $todo()

const WriteAccessAllowed = $todo()

const VideoChatScheduled = $todo()

const VideoChatStarted = $todo()

const VideoChatEnded = $todo()

const VideoChatParticipantsInvited = $todo()

const PaidMessagePriceChanged = $todo()

const DirectMessagePriceChanged = $todo()

const SuggestedPostApproved = $todo()

const SuggestedPostApprovalFailed = $todo()

const SuggestedPostDeclined = $todo()

const SuggestedPostPaid = $todo()

const SuggestedPostRefunded = $todo()

const GiveawayCreated = $todo()

const Giveaway = $todo()

const GiveawayWinners = $todo()

const GiveawayCompleted = $todo()

const LinkPreviewOptions = $todo()

const SuggestedPostPrice = $todo()

const SuggestedPostInfo = $todo()

const SuggestedPostParameters = $todo()

const DirectMessagesTopic = $todo()

const UserProfilePhotos = $todo()

const File = $todo()

const WebAppInfo = $todo()

const ReplyKeyboardMarkup = $todo()

const KeyboardButton = $todo()

const KeyboardButtonRequestUsers = $todo()

const KeyboardButtonRequestChat = $todo()

const KeyboardButtonPollType = $todo()

const ReplyKeyboardRemove = $todo()

const InlineKeyboardMarkup = $todo()

const InlineKeyboardButton = $todo()

const LoginUrl = $todo()

const SwitchInlineQueryChosenChat = $todo()

const CopyTextButton = $todo()

const CallbackQuery = $todo()

const ForceReply = $todo()

const ChatPhoto = $todo()

const ChatInviteLink = $todo()

const ChatAdministratorRights = $todo()

const ChatMemberUpdated = $todo()

const ChatMember = $todo()

const ChatMemberOwner = $todo()

const ChatMemberAdministrator = $todo()

const ChatMemberMember = $todo()

const ChatMemberRestricted = $todo()

const ChatMemberLeft = $todo()

const ChatMemberBanned = $todo()

const ChatJoinRequest = $todo()

const ChatPermissions = $todo()

const Birthdate = $todo()

const BusinessIntro = $todo()

const BusinessLocation = $todo()

const BusinessOpeningHoursInterval = $todo()

const BusinessOpeningHours = $todo()

const StoryAreaPosition = $todo()

const LocationAddress = $todo()

const StoryAreaType = $todo()

const StoryAreaTypeLocation = $todo()

const StoryAreaTypeSuggestedReaction = $todo()

const StoryAreaTypeLink = $todo()

const StoryAreaTypeWeather = $todo()

const StoryAreaTypeUniqueGift = $todo()

const StoryArea = $todo()

const ChatLocation = $todo()

const ReactionType = $todo()

const ReactionTypeEmoji = $todo()

const ReactionTypeCustomEmoji = $todo()

const ReactionTypePaid = $todo()

const ReactionCount = $todo()

const MessageReactionUpdated = $todo()

const MessageReactionCountUpdated = $todo()

const ForumTopic = $todo()

const Gift = $todo()

const Gifts = $todo()

const UniqueGiftModel = $todo()

const UniqueGiftSymbol = $todo()

const UniqueGiftBackdropColors = $todo()

const UniqueGiftBackdrop = $todo()

const UniqueGift = $todo()

const GiftInfo = $todo()

const UniqueGiftInfo = $todo()

const OwnedGift = $todo()

const OwnedGiftRegular = $todo()

const OwnedGiftUnique = $todo()

const OwnedGifts = $todo()

const AcceptedGiftTypes = $todo()

const StarAmount = $todo()

const BotCommand = $todo()

const BotCommandScope = $todo()

const BotCommandScopeDefault = $todo()

const BotCommandScopeAllPrivateChats = $todo()

const BotCommandScopeAllGroupChats = $todo()

const BotCommandScopeAllChatAdministrators = $todo()

const BotCommandScopeChat = $todo()

const BotCommandScopeChatAdministrators = $todo()

const BotCommandScopeChatMember = $todo()

const BotName = $todo()

const BotDescription = $todo()

const BotShortDescription = $todo()

const MenuButton = $todo()

const MenuButtonCommands = $todo()

const MenuButtonWebApp = $todo()

const MenuButtonDefault = $todo()

const ChatBoostSource = $todo()

const ChatBoostSourcePremium = $todo()

const ChatBoostSourceGiftCode = $todo()

const ChatBoostSourceGiveaway = $todo()

const ChatBoost = $todo()

const ChatBoostUpdated = $todo()

const ChatBoostRemoved = $todo()

const UserChatBoosts = $todo()

const BusinessBotRights = $todo()

const BusinessConnection = $todo()

const BusinessMessagesDeleted = $todo()

const ResponseParameters = $todo()

const InputMedia = $todo()

const InputMediaPhoto = $todo()

const InputMediaVideo = $todo()

const InputMediaAnimation = $todo()

const InputMediaAudio = $todo()

const InputMediaDocument = $todo()

const InputFile = $todo()

const InputPaidMedia = $todo()

const InputPaidMediaPhoto = $todo()

const InputPaidMediaVideo = $todo()

const InputProfilePhoto = $todo()

const InputProfilePhotoStatic = $todo()

const InputProfilePhotoAnimated = $todo()

const InputStoryContent = $todo()

const InputStoryContentPhoto = $todo()

const InputStoryContentVideo = $todo()

const Sticker = $todo()

const StickerSet = $todo()

const MaskPosition = $todo()

const InputSticker = $todo()

const InlineQuery = $todo()

const InlineQueryResultsButton = $todo()

const InlineQueryResult = $todo()

const InlineQueryResultArticle = $todo()

const InlineQueryResultPhoto = $todo()

const InlineQueryResultGif = $todo()

const InlineQueryResultMpeg4Gif = $todo()

const InlineQueryResultVideo = $todo()

const InlineQueryResultAudio = $todo()

const InlineQueryResultVoice = $todo()

const InlineQueryResultDocument = $todo()

const InlineQueryResultLocation = $todo()

const InlineQueryResultVenue = $todo()

const InlineQueryResultContact = $todo()

const InlineQueryResultGame = $todo()

const InlineQueryResultCachedPhoto = $todo()

const InlineQueryResultCachedGif = $todo()

const InlineQueryResultCachedMpeg4Gif = $todo()

const InlineQueryResultCachedSticker = $todo()

const InlineQueryResultCachedDocument = $todo()

const InlineQueryResultCachedVideo = $todo()

const InlineQueryResultCachedVoice = $todo()

const InlineQueryResultCachedAudio = $todo()

const InputMessageContent = $todo()

const InputTextMessageContent = $todo()

const InputLocationMessageContent = $todo()

const InputVenueMessageContent = $todo()

const InputContactMessageContent = $todo()

const InputInvoiceMessageContent = $todo()

const ChosenInlineResult = $todo()

const SentWebAppMessage = $todo()

const PreparedInlineMessage = $todo()

const LabeledPrice = $todo()

const Invoice = $todo()

const ShippingAddress = $todo()

const OrderInfo = $todo()

const ShippingOption = $todo()

const SuccessfulPayment = $todo()

const RefundedPayment = $todo()

const ShippingQuery = $todo()

const PreCheckoutQuery = $todo()

const PaidMediaPurchased = $todo()

const RevenueWithdrawalState = $todo()

const RevenueWithdrawalStatePending = $todo()

const RevenueWithdrawalStateSucceeded = $todo()

const RevenueWithdrawalStateFailed = $todo()

const AffiliateInfo = $todo()

const TransactionPartner = $todo()

const TransactionPartnerUser = $todo()

const TransactionPartnerChat = $todo()

const TransactionPartnerAffiliateProgram = $todo()

const TransactionPartnerFragment = $todo()

const TransactionPartnerTelegramAds = $todo()

const TransactionPartnerTelegramApi = $todo()

const TransactionPartnerOther = $todo()

const StarTransaction = $todo()

const StarTransactions = $todo()

const PassportData = $todo()

const PassportFile = $todo()

const EncryptedPassportElement = $todo()

const EncryptedCredentials = $todo()

const PassportElementError = $todo()

const PassportElementErrorDataField = $todo()

const PassportElementErrorFrontSide = $todo()

const PassportElementErrorReverseSide = $todo()

const PassportElementErrorSelfie = $todo()

const PassportElementErrorFile = $todo()

const PassportElementErrorFiles = $todo()

const PassportElementErrorTranslationFile = $todo()

const PassportElementErrorTranslationFiles = $todo()

const PassportElementErrorUnspecified = $todo()

const Game = $todo()

const CallbackGame = $todo()

const GameHighScore = $todo()

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
  Gift,
  Gifts,
  UniqueGiftModel,
  UniqueGiftSymbol,
  UniqueGiftBackdropColors,
  UniqueGiftBackdrop,
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
  InputFile,
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
  Gift,
  Gifts,
  UniqueGiftModel,
  UniqueGiftSymbol,
  UniqueGiftBackdropColors,
  UniqueGiftBackdrop,
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
  InputFile,
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
]
