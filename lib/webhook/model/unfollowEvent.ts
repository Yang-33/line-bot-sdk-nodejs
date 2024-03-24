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



    import { DeliveryContext } from './deliveryContext.js';import { Event } from './event.js';import { EventMode } from './eventMode.js';import { Source } from './source.js';

    
/**
 * Event object for when your LINE Official Account is blocked.
 */
import { EventBase } from './models.js';

        
export type UnfollowEvent = EventBase &  { 
type: "unfollow",
        
}
    

    
export namespace UnfollowEvent {
        
}
    

    


