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

import { ContentProvider } from "./contentProvider.js";
import { ImageSet } from "./imageSet.js";
import { MessageContent } from "./messageContent.js";

import { MessageContentBase } from "./models.js";

export type ImageMessageContent = MessageContentBase & {
  type: "image";
  /**
   */
  contentProvider: ContentProvider /**/;
  /**
   */
  imageSet?: ImageSet /**/;
  /**
   * Quote token to quote this message.
   */
  quoteToken: string /**/;
};
