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

import { RichMenuBatchOperation } from "./richMenuBatchOperation.js";

/**
 * Replace the rich menu with the rich menu specified in the `to` property for all users linked to the rich menu specified in the `from` property.
 */
import { RichMenuBatchOperationBase } from "./models.js";

export type RichMenuBatchLinkOperation = RichMenuBatchOperationBase & {
  type: "link";
  /**
   */
  from: string /**/;
  /**
   */
  to: string /**/;
};
