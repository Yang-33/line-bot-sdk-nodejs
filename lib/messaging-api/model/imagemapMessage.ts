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



    import { ImagemapAction } from './imagemapAction.js';import { ImagemapBaseSize } from './imagemapBaseSize.js';import { ImagemapVideo } from './imagemapVideo.js';import { Message } from './message.js';import { QuickReply } from './quickReply.js';import { Sender } from './sender.js';

    
import { MessageBase } from './models.js';

        
export type ImagemapMessage = MessageBase &  { 
type: "imagemap",
        /**
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#imagemap-message">baseUrl Documentation</a>
            */
    'baseUrl': string/**/;
        /**
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#imagemap-message">altText Documentation</a>
            */
    'altText': string/**/;
        /**
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#imagemap-message">baseSize Documentation</a>
            */
    'baseSize': ImagemapBaseSize/**/;
        /**
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#imagemap-message">actions Documentation</a>
            */
    'actions': Array<ImagemapAction>/**/;
        /**
            * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#imagemap-message">video Documentation</a>
            */
    'video'?: ImagemapVideo/**/;
        
}
    

    

    


