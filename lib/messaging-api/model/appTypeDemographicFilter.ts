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

import { AppTypeDemographic } from "./appTypeDemographic.js";
import { DemographicFilter } from "./demographicFilter.js";

import { DemographicFilterBase } from "./models.js";

export type AppTypeDemographicFilter = DemographicFilterBase & {
  type: "appType";
  /**
   */
  oneOf?: Array<AppTypeDemographic> /**/;
};
