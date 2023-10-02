/**
 * LIFF server API
 * LIFF Server API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LiffBotPrompt } from "./liffBotPrompt";
import { LiffFeatures } from "./liffFeatures";
import { LiffScope } from "./liffScope";
import { LiffView } from "./liffView";

export type AddLiffAppRequest = {
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">view Documentation</a>
   */
  view: LiffView /**/;
  /**
   * Name of the LIFF app.  The LIFF app name can\'t include \"LINE\" or similar strings, or inappropriate strings.
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">description Documentation</a>
   */
  description?: string /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">features Documentation</a>
   */
  features?: LiffFeatures /**/;
  /**
   * How additional information in LIFF URLs is handled. Specify `concat`.
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">permanentLinkPattern Documentation</a>
   */
  permanentLinkPattern?: string /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">scope Documentation</a>
   */
  scope?: Array<LiffScope> /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">botPrompt Documentation</a>
   */
  botPrompt?: LiffBotPrompt /**/;
};

export namespace AddLiffAppRequest {}
