/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



    

    
export type SubscriptionPeriodTile =  { 
        /**
            * Subscription period. Possible values: `within7days`, `within90days`, `unknown` etc.
            */
    'subscriptionPeriod'?: SubscriptionPeriodTile.SubscriptionPeriodEnum/**/;
        /**
            * Percentage. Possible values: [0.0,100.0] e.g. 0, 2.9, 37.6.
            */
    'percentage'?: number/**/;
        
}
    

    
export namespace SubscriptionPeriodTile {
        export type SubscriptionPeriodEnum =
                'within7days'
                    | 'within30days'
                    | 'within90days'
                    | 'within180days'
                    | 'within365days'
                    | 'over365days'
                    | 'unknown'
                    
                
    ;
            
        
        
}
    

    


