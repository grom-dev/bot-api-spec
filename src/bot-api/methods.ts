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

const deleteWebhook = $todo()

const getWebhookInfo = $todo()

const getMe = $todo()

const logOut = $todo()

const close = $todo()

const sendMessage = $todo()

const forwardMessage = $todo()

const forwardMessages = $todo()

const copyMessage = $todo()

const copyMessages = $todo()

const sendPhoto = $todo()

const sendAudio = $todo()

const sendDocument = $todo()

const sendVideo = $todo()

const sendAnimation = $todo()

const sendVoice = $todo()

const sendVideoNote = $todo()

const sendPaidMedia = $todo()

const sendMediaGroup = $todo()

const sendLocation = $todo()

const sendVenue = $todo()

const sendContact = $todo()

const sendPoll = $todo()

const sendChecklist = $todo()

const sendDice = $todo()

const sendChatAction = $todo()

const setMessageReaction = $todo()

const getUserProfilePhotos = $todo()

const setUserEmojiStatus = $todo()

const getFile = $todo()

const banChatMember = $todo()

const unbanChatMember = $todo()

const restrictChatMember = $todo()

const promoteChatMember = $todo()

const setChatAdministratorCustomTitle = $todo()

const banChatSenderChat = $todo()

const unbanChatSenderChat = $todo()

const setChatPermissions = $todo()

const exportChatInviteLink = $todo()

const createChatInviteLink = $todo()

const editChatInviteLink = $todo()

const createChatSubscriptionInviteLink = $todo()

const editChatSubscriptionInviteLink = $todo()

const revokeChatInviteLink = $todo()

const approveChatJoinRequest = $todo()

const declineChatJoinRequest = $todo()

const setChatPhoto = $todo()

const deleteChatPhoto = $todo()

const setChatTitle = $todo()

const setChatDescription = $todo()

const pinChatMessage = $todo()

const unpinChatMessage = $todo()

const unpinAllChatMessages = $todo()

const leaveChat = $todo()

const getChat = $todo()

const getChatAdministrators = $todo()

const getChatMemberCount = $todo()

const getChatMember = $todo()

const setChatStickerSet = $todo()

const deleteChatStickerSet = $todo()

const getForumTopicIconStickers = $todo()

const createForumTopic = $todo()

const editForumTopic = $todo()

const closeForumTopic = $todo()

const reopenForumTopic = $todo()

const deleteForumTopic = $todo()

const unpinAllForumTopicMessages = $todo()

const editGeneralForumTopic = $todo()

const closeGeneralForumTopic = $todo()

const reopenGeneralForumTopic = $todo()

const hideGeneralForumTopic = $todo()

const unhideGeneralForumTopic = $todo()

const unpinAllGeneralForumTopicMessages = $todo()

const answerCallbackQuery = $todo()

const getUserChatBoosts = $todo()

const getBusinessConnection = $todo()

const setMyCommands = $todo()

const deleteMyCommands = $todo()

const getMyCommands = $todo()

const setMyName = $todo()

const getMyName = $todo()

const setMyDescription = $todo()

const getMyDescription = $todo()

const setMyShortDescription = $todo()

const getMyShortDescription = $todo()

const setChatMenuButton = $todo()

const getChatMenuButton = $todo()

const setMyDefaultAdministratorRights = $todo()

const getMyDefaultAdministratorRights = $todo()

const getAvailableGifts = $todo()

const sendGift = $todo()

const giftPremiumSubscription = $todo()

const verifyUser = $todo()

const verifyChat = $todo()

const removeUserVerification = $todo()

const removeChatVerification = $todo()

const readBusinessMessage = $todo()

const deleteBusinessMessages = $todo()

const setBusinessAccountName = $todo()

const setBusinessAccountUsername = $todo()

const setBusinessAccountBio = $todo()

const setBusinessAccountProfilePhoto = $todo()

const removeBusinessAccountProfilePhoto = $todo()

const setBusinessAccountGiftSettings = $todo()

const getBusinessAccountStarBalance = $todo()

const transferBusinessAccountStars = $todo()

const getBusinessAccountGifts = $todo()

const convertGiftToStars = $todo()

const upgradeGift = $todo()

const transferGift = $todo()

const postStory = $todo()

const editStory = $todo()

const deleteStory = $todo()

const editMessageText = $todo()

const editMessageCaption = $todo()

const editMessageMedia = $todo()

const editMessageLiveLocation = $todo()

const stopMessageLiveLocation = $todo()

const editMessageChecklist = $todo()

const editMessageReplyMarkup = $todo()

const stopPoll = $todo()

const approveSuggestedPost = $todo()

const declineSuggestedPost = $todo()

const deleteMessage = $todo()

const deleteMessages = $todo()

const sendSticker = $todo()

const getStickerSet = $todo()

const getCustomEmojiStickers = $todo()

const uploadStickerFile = $todo()

const createNewStickerSet = $todo()

const addStickerToSet = $todo()

const setStickerPositionInSet = $todo()

const deleteStickerFromSet = $todo()

const replaceStickerInSet = $todo()

const setStickerEmojiList = $todo()

const setStickerKeywords = $todo()

const setStickerMaskPosition = $todo()

const setStickerSetTitle = $todo()

const setStickerSetThumbnail = $todo()

const setCustomEmojiStickerSetThumbnail = $todo()

const deleteStickerSet = $todo()

const answerInlineQuery = $todo()

const answerWebAppQuery = $todo()

const savePreparedInlineMessage = $todo()

const sendInvoice = $todo()

const createInvoiceLink = $todo()

const answerShippingQuery = $todo()

const answerPreCheckoutQuery = $todo()

const getMyStarBalance = $todo()

const getStarTransactions = $todo()

const refundStarPayment = $todo()

const editUserStarSubscription = $todo()

const setPassportDataErrors = $todo()

const sendGame = $todo()

const setGameScore = $todo()

const getGameHighScores = $todo()

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
 * Definition of all Bot API methods as an array. Order of the methods is the
 * same as they appear in the official docs.
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
