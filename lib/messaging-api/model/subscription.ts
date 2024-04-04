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

import { SubscribedMembershipPlan } from "./subscribedMembershipPlan.js";
import { SubscribedMembershipUser } from "./subscribedMembershipUser.js";

/**
 * An array of memberships.
 */
export type Subscription = {
  /**
   */
  membership: SubscribedMembershipPlan /**/;
  /**
   */
  user: SubscribedMembershipUser /**/;
};