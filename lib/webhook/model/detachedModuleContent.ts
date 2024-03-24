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



    import { ModuleContent } from './moduleContent.js';

    
import { ModuleContentBase } from './models.js';

        
export type DetachedModuleContent = ModuleContentBase &  { 
type: "detached",
        /**
            * Detached LINE Official Account bot user ID
            */
    'botId': string/**/;
        /**
            * Reason for detaching
            */
    'reason': DetachedModuleContent.ReasonEnum/**/;
        
}
    

    
export namespace DetachedModuleContent {
        
        export type ReasonEnum =
                'bot_deleted'
                    
                
    ;
            
        
}
    

    


