/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { QuickReply } from "./quickReply.js";
import { Sender } from "./sender.js";

import { AudioMessage } from "./models.js";
import { FlexMessage } from "./models.js";
import { ImageMessage } from "./models.js";
import { ImagemapMessage } from "./models.js";
import { LocationMessage } from "./models.js";
import { StickerMessage } from "./models.js";
import { TemplateMessage } from "./models.js";
import { TextMessage } from "./models.js";
import { TextMessageV2 } from "./models.js";
import { VideoMessage } from "./models.js";

export type Message =
  | AudioMessage // audio
  | FlexMessage // flex
  | ImageMessage // image
  | ImagemapMessage // imagemap
  | LocationMessage // location
  | StickerMessage // sticker
  | TemplateMessage // template
  | TextMessage // text
  | TextMessageV2 // textV2
  | VideoMessage; // video

export type MessageBase = {
  /**
   * Type of message
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#message-common-properties">type Documentation</a>
   */
  type: string /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#message-common-properties">quickReply Documentation</a>
   */
  quickReply?: QuickReply /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#message-common-properties">sender Documentation</a>
   */
  sender?: Sender /**/;
};
