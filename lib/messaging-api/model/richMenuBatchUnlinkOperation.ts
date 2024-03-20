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



    import { RichMenuBatchOperation } from './richMenuBatchOperation.js';

    
/**
 * Unlink the rich menu for all users linked to the rich menu specified in the `from` property.
 */
import { RichMenuBatchOperationBase } from './models.js';

        
export type RichMenuBatchUnlinkOperation = RichMenuBatchOperationBase &  { 
type: "unlink",
        /**
            */
    'from': string/**/;
        
}
    

    

    


