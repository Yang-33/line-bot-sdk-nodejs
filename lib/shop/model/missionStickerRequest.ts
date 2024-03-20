/**
 * Mission Stickers API
 * This document describes LINE Mission Stickers API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



    

    
/**
 * Send mission stickers (v3)
 */
export type MissionStickerRequest =  { 
        /**
            * Destination user ID
            * 
     * @see <a href="https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3">to Documentation</a>
            */
    'to': string/**/;
        /**
            * Package ID for a set of stickers
            * 
     * @see <a href="https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3">productId Documentation</a>
            */
    'productId': string/**/;
        /**
            * `STICKER`
            * 
     * @see <a href="https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3">productType Documentation</a>
            */
    'productType': string/**/;
        /**
            * `false`
            * 
     * @see <a href="https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3">sendPresentMessage Documentation</a>
            */
    'sendPresentMessage': boolean/**/;
        
}
    

    

    


