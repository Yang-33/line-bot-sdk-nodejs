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



    import { Action } from './action.js';import { AltUri } from './altUri.js';

    
import { ActionBase } from './models.js';

        
export type URIAction = ActionBase &  { 
type: "uri",
        /**
            */
    'uri'?: string/**/;
        /**
            */
    'altUri'?: AltUri/**/;
        
}
    

    

    


