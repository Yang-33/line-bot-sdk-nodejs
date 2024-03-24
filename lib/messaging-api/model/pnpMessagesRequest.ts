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



    import { Message } from './message.js';

    
export type PnpMessagesRequest =  { 
        /**
            * Message to be sent.
            * 
     * @see <a href="https://developers.line.biz/en/reference/partner-docs/#send-line-notification-message">messages Documentation</a>
            */
    'messages': Array<Message>/**/;
        /**
            * Message destination. Specify a phone number that has been normalized to E.164 format and hashed with SHA256.
            * 
     * @see <a href="https://developers.line.biz/en/reference/partner-docs/#send-line-notification-message">to Documentation</a>
            */
    'to': string/**/;
        /**
            * `true`: The user doesn’t receive a push notification when a message is sent. `false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device). The default value is false. 
            * 
     * @see <a href="https://developers.line.biz/en/reference/partner-docs/#send-line-notification-message">notificationDisabled Documentation</a>
            */
    'notificationDisabled'?: boolean/* = false*/;
        
}
    

    

    


