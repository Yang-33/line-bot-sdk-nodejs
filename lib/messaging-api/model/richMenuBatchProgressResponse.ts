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



    import { RichMenuBatchProgressPhase } from './richMenuBatchProgressPhase.js';

    
export type RichMenuBatchProgressResponse =  { 
        /**
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status-response">phase Documentation</a>
            */
    'phase': RichMenuBatchProgressPhase/**/;
        /**
            * The accepted time in milliseconds of the request of batch control the rich menu.  Format: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z) Timezone: UTC 
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status-response">acceptedTime Documentation</a>
            */
    'acceptedTime': Date/**/;
        /**
            * The completed time in milliseconds of rich menu batch control. Returned when the phase property is succeeded or failed.  Format: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z) Timezone: UTC 
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status-response">completedTime Documentation</a>
            */
    'completedTime'?: Date/**/;
        
}
    

    
export namespace RichMenuBatchProgressResponse {
        
        
        
        
}
    

    


