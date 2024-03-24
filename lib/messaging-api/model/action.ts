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



    

    
        import { CameraAction } from './models.js';
        import { CameraRollAction } from './models.js';
        import { ClipboardAction } from './models.js';
        import { DatetimePickerAction } from './models.js';
        import { LocationAction } from './models.js';
        import { MessageAction } from './models.js';
        import { PostbackAction } from './models.js';
        import { RichMenuSwitchAction } from './models.js';
        import { URIAction } from './models.js';
        

export type Action =
        | CameraAction // camera
        | CameraRollAction // cameraRoll
        | ClipboardAction // clipboard
        | DatetimePickerAction // datetimepicker
        | LocationAction // location
        | MessageAction // message
        | PostbackAction // postback
        | RichMenuSwitchAction // richmenuswitch
        | URIAction // uri
        | UnknownAction
;

export type UnknownAction = ActionBase & {
    [key: string]: unknown;
};
    
/**
 * Action
 */
export type ActionBase =  { 
        /**
            * Type of action
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#action-objects">type Documentation</a>
            */
    'type'?: string/**/;
        /**
            * Label for the action.
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#action-objects">label Documentation</a>
            */
    'label'?: string/**/;
        
}
    

    

    


