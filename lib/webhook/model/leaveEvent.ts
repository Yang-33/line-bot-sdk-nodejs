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
 * Event object for when a user removes your LINE Official Account from a group chat or when your LINE Official Account leaves a group chat or multi-person chat.
 */
import { EventBase } from './models.js';

        
export type LeaveEvent = EventBase &  { 
type: "leave",
        
}
    

    
export namespace LeaveEvent {
        
}
    

    


