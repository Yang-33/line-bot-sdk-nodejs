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



    import { DeliveryContext } from './deliveryContext.js';import { Event } from './event.js';import { EventMode } from './eventMode.js';import { LinkContent } from './linkContent.js';import { Source } from './source.js';

    
/**
 * Event object for when a user has linked their LINE account with a provider\'s service account. You can reply to account link events.
 */
import { EventBase } from './models.js';

        
export type AccountLinkEvent = EventBase &  { 
type: "accountLink",
        /**
            * Reply token used to send reply message to this event. This property won\'t be included if linking the account has failed.
            */
    'replyToken'?: string/**/;
        /**
            */
    'link': LinkContent/**/;
        
}
    

    
export namespace AccountLinkEvent {
        
        
        
}
    

    


