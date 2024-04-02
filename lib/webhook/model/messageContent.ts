/**
 * Webhook Type Definition
 * Webhook event definition of the LINE Messaging API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AudioMessageContent } from "./models.js";
import { FileMessageContent } from "./models.js";
import { ImageMessageContent } from "./models.js";
import { LocationMessageContent } from "./models.js";
import { StickerMessageContent } from "./models.js";
import { TextMessageContent } from "./models.js";
import { VideoMessageContent } from "./models.js";

export type MessageContent =
  | AudioMessageContent // audio
  | FileMessageContent // file
  | ImageMessageContent // image
  | LocationMessageContent // location
  | StickerMessageContent // sticker
  | TextMessageContent // text
  | VideoMessageContent // video
  | UnknownMessageContent;

export type UnknownMessageContent = MessageContentBase & {
  [key: string]: unknown;
};

export type MessageContentBase = {
  /**
   * Type
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#message-event">type Documentation</a>
   */
  type: string /**/;
  /**
   * Message ID
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#message-event">id Documentation</a>
   */
  id: string /**/;
};
