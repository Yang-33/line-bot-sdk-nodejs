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



    import { DeliveryContext } from './deliveryContext.js';import { Event } from './event.js';import { EventMode } from './eventMode.js';import { Source } from './source.js';import { ThingsContent } from './thingsContent.js';

    
/**
 * Indicates that a user linked a device with LINE.
 */
import { EventBase } from './models.js';

        
export type ThingsEvent = EventBase &  { 
type: "things",
        /**
            * Reply token used to send reply message to this event
            */
    'replyToken': string/**/;
        /**
            */
    'things': ThingsContent/**/;
        
}
    

    
export namespace ThingsEvent {
        
        
        
}
    

    


