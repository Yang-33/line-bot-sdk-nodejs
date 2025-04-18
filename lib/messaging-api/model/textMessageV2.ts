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

import { Message } from "./message.js";
import { QuickReply } from "./quickReply.js";
import { Sender } from "./sender.js";
import { SubstitutionObject } from "./substitutionObject.js";

import { MessageBase } from "./models.js";

export type TextMessageV2 = MessageBase & {
  type: "textV2";
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#text-message-v2">text Documentation</a>
   */
  text: string /**/;
  /**
   * A mapping that specifies substitutions for parts enclosed in {} within the `text` field.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#text-message-v2">substitution Documentation</a>
   */
  substitution?: { [key: string]: SubstitutionObject } /**/;
  /**
   * Quote token of the message you want to quote.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#text-message-v2">quoteToken Documentation</a>
   */
  quoteToken?: string /**/;
};
