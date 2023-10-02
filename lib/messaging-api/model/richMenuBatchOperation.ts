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

import { RichMenuBatchLinkOperation } from "./models";
import { RichMenuBatchUnlinkOperation } from "./models";
import { RichMenuBatchUnlinkAllOperation } from "./models";

export type RichMenuBatchOperation =
  | RichMenuBatchLinkOperation // link
  | RichMenuBatchUnlinkOperation // unlink
  | RichMenuBatchUnlinkAllOperation // unlinkAll
  | UnknownRichMenuBatchOperation;

export type UnknownRichMenuBatchOperation = RichMenuBatchOperationBase & {
  [key: string]: unknown;
};

/**
 * Rich menu operation object represents the batch operation to the rich menu linked to the user.
 */
export type RichMenuBatchOperationBase = {
  /**
   * The type of operation to the rich menu linked to the user. One of link, unlink, or unlinkAll.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users-operations">type Documentation</a>
   */
  type: string /**/;
};
