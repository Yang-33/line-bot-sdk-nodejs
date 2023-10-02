/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AgeTile } from "./ageTile";
import { AppTypeTile } from "./appTypeTile";
import { AreaTile } from "./areaTile";
import { GenderTile } from "./genderTile";
import { SubscriptionPeriodTile } from "./subscriptionPeriodTile";

/**
 * Get friend demographics
 */
export type GetFriendsDemographicsResponse = {
  /**
   * true if friend demographic information is available.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic">available Documentation</a>
   */
  available?: boolean /**/;
  /**
   * Percentage per gender.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic">genders Documentation</a>
   */
  genders?: Array<GenderTile> /**/;
  /**
   * Percentage per age group.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic">ages Documentation</a>
   */
  ages?: Array<AgeTile> /**/;
  /**
   * Percentage per area.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic">areas Documentation</a>
   */
  areas?: Array<AreaTile> /**/;
  /**
   * Percentage by OS.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic">appTypes Documentation</a>
   */
  appTypes?: Array<AppTypeTile> /**/;
  /**
   * Percentage per friendship duration.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic">subscriptionPeriods Documentation</a>
   */
  subscriptionPeriods?: Array<SubscriptionPeriodTile> /**/;
};
