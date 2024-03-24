

/**
 * Channel Access Token API
 * This document describes Channel Access Token API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/* tslint:disable:no-unused-locals */
import { ChannelAccessTokenKeyIdsResponse } from '../model/channelAccessTokenKeyIdsResponse.js';
import { ErrorResponse } from '../model/errorResponse.js';
import { IssueChannelAccessTokenResponse } from '../model/issueChannelAccessTokenResponse.js';
import { IssueShortLivedChannelAccessTokenResponse } from '../model/issueShortLivedChannelAccessTokenResponse.js';
import { IssueStatelessChannelAccessTokenResponse } from '../model/issueStatelessChannelAccessTokenResponse.js';
import { VerifyChannelAccessTokenResponse } from '../model/verifyChannelAccessTokenResponse.js';

import * as Types from "../../types.js";
import {ensureJSON} from "../../utils.js";
import {Readable} from "node:stream";

import HTTPFetchClient, { convertResponseToReadable } from "../../http-fetch.js";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

interface httpClientConfig {
    baseURL?: string;
    // TODO support defaultHeaders?
}


export class ChannelAccessTokenClient {
    private httpClient: HTTPFetchClient;

    constructor(config: httpClientConfig) {
        if (!config.baseURL) {
            config.baseURL = 'https://api.line.me';
        }
        this.httpClient = new HTTPFetchClient({
            defaultHeaders: {
                },
            baseURL: config.baseURL,
        });
    }

    private async parseHTTPResponse(response: Response) {
        const { LINE_REQUEST_ID_HTTP_HEADER_NAME } = Types;
        let resBody: Record<string, any> = {
            ...await response.json(),
        };
        if (response.headers.get(LINE_REQUEST_ID_HTTP_HEADER_NAME)) {
            resBody[LINE_REQUEST_ID_HTTP_HEADER_NAME] =
                response.headers.get(LINE_REQUEST_ID_HTTP_HEADER_NAME);
        }
        return resBody;
    }

/**
     * Gets all valid channel access token key IDs.
    * @param clientAssertionType `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`
    * @param clientAssertion A JSON Web Token (JWT) (opens new window)the client needs to create and sign with the private key.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1"> Documentation</a>
    */
    public async getsAllValidChannelAccessTokenKeyIds(clientAssertionType: string, clientAssertion: string, ) : Promise<ChannelAccessTokenKeyIdsResponse> {
        return (await this.getsAllValidChannelAccessTokenKeyIdsWithHttpInfo(clientAssertionType, clientAssertion, )).body;
    }

    /**
     * Gets all valid channel access token key IDs..
     * This method includes HttpInfo object to return additional information.
    * @param clientAssertionType `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`
    * @param clientAssertion A JSON Web Token (JWT) (opens new window)the client needs to create and sign with the private key.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1"> Documentation</a>
    */
    public async getsAllValidChannelAccessTokenKeyIdsWithHttpInfo(clientAssertionType: string, clientAssertion: string, ) : Promise<Types.ApiResponseType<ChannelAccessTokenKeyIdsResponse>> {
    
        


    const queryParams = {
        "clientAssertionType": clientAssertionType,
        "clientAssertion": clientAssertion,
        
        };
        Object.keys(queryParams).forEach((key: keyof typeof queryParams) => {
          if (queryParams[key] === undefined) {
            delete queryParams[key];
          }
        });
    
    

        const res = await this.httpClient.get(
            "/oauth2/v2.1/tokens/kid"
        ,

            queryParams,
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }
/**
     * Issue short-lived channel access token
    * @param grantType `client_credentials`
    * @param clientId Channel ID.
    * @param clientSecret Channel secret.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token"> Documentation</a>
    */
    public async issueChannelToken(grantType?: string, clientId?: string, clientSecret?: string, ) : Promise<IssueShortLivedChannelAccessTokenResponse> {
        return (await this.issueChannelTokenWithHttpInfo(grantType, clientId, clientSecret, )).body;
    }

    /**
     * Issue short-lived channel access token.
     * This method includes HttpInfo object to return additional information.
    * @param grantType `client_credentials`
    * @param clientId Channel ID.
    * @param clientSecret Channel secret.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token"> Documentation</a>
    */
    public async issueChannelTokenWithHttpInfo(grantType?: string, clientId?: string, clientSecret?: string, ) : Promise<Types.ApiResponseType<IssueShortLivedChannelAccessTokenResponse>> {
    
        


    const formParams = {
        "grant_type": grantType,
        "client_id": clientId,
        "client_secret": clientSecret,
        
        };
        Object.keys(formParams).forEach((key: keyof typeof formParams) => {
          if (formParams[key] === undefined) {
            delete formParams[key];
          }
        });
    
    

        const res = await this.httpClient.postForm(
            "/v2/oauth/accessToken"
        ,

            formParams,
            
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }
/**
     * Issues a channel access token that allows you to specify a desired expiration date. This method lets you use JWT assertion for authentication.
    * @param grantType client_credentials
    * @param clientAssertionType urn:ietf:params:oauth:client-assertion-type:jwt-bearer
    * @param clientAssertion A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1"> Documentation</a>
    */
    public async issueChannelTokenByJWT(grantType?: string, clientAssertionType?: string, clientAssertion?: string, ) : Promise<IssueChannelAccessTokenResponse> {
        return (await this.issueChannelTokenByJWTWithHttpInfo(grantType, clientAssertionType, clientAssertion, )).body;
    }

    /**
     * Issues a channel access token that allows you to specify a desired expiration date. This method lets you use JWT assertion for authentication..
     * This method includes HttpInfo object to return additional information.
    * @param grantType client_credentials
    * @param clientAssertionType urn:ietf:params:oauth:client-assertion-type:jwt-bearer
    * @param clientAssertion A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1"> Documentation</a>
    */
    public async issueChannelTokenByJWTWithHttpInfo(grantType?: string, clientAssertionType?: string, clientAssertion?: string, ) : Promise<Types.ApiResponseType<IssueChannelAccessTokenResponse>> {
    
        


    const formParams = {
        "grant_type": grantType,
        "client_assertion_type": clientAssertionType,
        "client_assertion": clientAssertion,
        
        };
        Object.keys(formParams).forEach((key: keyof typeof formParams) => {
          if (formParams[key] === undefined) {
            delete formParams[key];
          }
        });
    
    

        const res = await this.httpClient.postForm(
            "/oauth2/v2.1/token"
        ,

            formParams,
            
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }
/**
     * Issues a new stateless channel access token, which doesn\'t have max active token limit unlike the other token types. The newly issued token is only valid for 15 minutes but can not be revoked until it naturally expires. 
    * @param grantType `client_credentials`
    * @param clientAssertionType URL-encoded value of `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`
    * @param clientAssertion A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.
    * @param clientId Channel ID.
    * @param clientSecret Channel secret.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token"> Documentation</a>
    */
    public async issueStatelessChannelToken(grantType?: string, clientAssertionType?: string, clientAssertion?: string, clientId?: string, clientSecret?: string, ) : Promise<IssueStatelessChannelAccessTokenResponse> {
        return (await this.issueStatelessChannelTokenWithHttpInfo(grantType, clientAssertionType, clientAssertion, clientId, clientSecret, )).body;
    }

    /**
     * Issues a new stateless channel access token, which doesn\'t have max active token limit unlike the other token types. The newly issued token is only valid for 15 minutes but can not be revoked until it naturally expires. .
     * This method includes HttpInfo object to return additional information.
    * @param grantType `client_credentials`
    * @param clientAssertionType URL-encoded value of `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`
    * @param clientAssertion A JSON Web Token the client needs to create and sign with the private key of the Assertion Signing Key.
    * @param clientId Channel ID.
    * @param clientSecret Channel secret.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token"> Documentation</a>
    */
    public async issueStatelessChannelTokenWithHttpInfo(grantType?: string, clientAssertionType?: string, clientAssertion?: string, clientId?: string, clientSecret?: string, ) : Promise<Types.ApiResponseType<IssueStatelessChannelAccessTokenResponse>> {
    
        


    const formParams = {
        "grant_type": grantType,
        "client_assertion_type": clientAssertionType,
        "client_assertion": clientAssertion,
        "client_id": clientId,
        "client_secret": clientSecret,
        
        };
        Object.keys(formParams).forEach((key: keyof typeof formParams) => {
          if (formParams[key] === undefined) {
            delete formParams[key];
          }
        });
    
    

        const res = await this.httpClient.postForm(
            "/oauth2/v3/token"
        ,

            formParams,
            
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }
/**
     * Revoke short-lived or long-lived channel access token
    * @param accessToken Channel access token
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token"> Documentation</a>
    */
    public async revokeChannelToken(accessToken?: string, ) : Promise<Types.MessageAPIResponseBase> {
        return (await this.revokeChannelTokenWithHttpInfo(accessToken, )).body;
    }

    /**
     * Revoke short-lived or long-lived channel access token.
     * This method includes HttpInfo object to return additional information.
    * @param accessToken Channel access token
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token"> Documentation</a>
    */
    public async revokeChannelTokenWithHttpInfo(accessToken?: string, ) : Promise<Types.ApiResponseType<Types.MessageAPIResponseBase>> {
    
        


    const formParams = {
        "access_token": accessToken,
        
        };
        Object.keys(formParams).forEach((key: keyof typeof formParams) => {
          if (formParams[key] === undefined) {
            delete formParams[key];
          }
        });
    
    

        const res = await this.httpClient.postForm(
            "/v2/oauth/revoke"
        ,

            formParams,
            
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }
/**
     * Revoke channel access token v2.1
    * @param clientId Channel ID
    * @param clientSecret Channel Secret
    * @param accessToken Channel access token
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1"> Documentation</a>
    */
    public async revokeChannelTokenByJWT(clientId?: string, clientSecret?: string, accessToken?: string, ) : Promise<Types.MessageAPIResponseBase> {
        return (await this.revokeChannelTokenByJWTWithHttpInfo(clientId, clientSecret, accessToken, )).body;
    }

    /**
     * Revoke channel access token v2.1.
     * This method includes HttpInfo object to return additional information.
    * @param clientId Channel ID
    * @param clientSecret Channel Secret
    * @param accessToken Channel access token
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1"> Documentation</a>
    */
    public async revokeChannelTokenByJWTWithHttpInfo(clientId?: string, clientSecret?: string, accessToken?: string, ) : Promise<Types.ApiResponseType<Types.MessageAPIResponseBase>> {
    
        


    const formParams = {
        "client_id": clientId,
        "client_secret": clientSecret,
        "access_token": accessToken,
        
        };
        Object.keys(formParams).forEach((key: keyof typeof formParams) => {
          if (formParams[key] === undefined) {
            delete formParams[key];
          }
        });
    
    

        const res = await this.httpClient.postForm(
            "/oauth2/v2.1/revoke"
        ,

            formParams,
            
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }
/**
     * Verify the validity of short-lived and long-lived channel access tokens
    * @param accessToken A short-lived or long-lived channel access token.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#verfiy-channel-access-token"> Documentation</a>
    */
    public async verifyChannelToken(accessToken?: string, ) : Promise<VerifyChannelAccessTokenResponse> {
        return (await this.verifyChannelTokenWithHttpInfo(accessToken, )).body;
    }

    /**
     * Verify the validity of short-lived and long-lived channel access tokens.
     * This method includes HttpInfo object to return additional information.
    * @param accessToken A short-lived or long-lived channel access token.
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#verfiy-channel-access-token"> Documentation</a>
    */
    public async verifyChannelTokenWithHttpInfo(accessToken?: string, ) : Promise<Types.ApiResponseType<VerifyChannelAccessTokenResponse>> {
    
        


    const formParams = {
        "access_token": accessToken,
        
        };
        Object.keys(formParams).forEach((key: keyof typeof formParams) => {
          if (formParams[key] === undefined) {
            delete formParams[key];
          }
        });
    
    

        const res = await this.httpClient.postForm(
            "/v2/oauth/verify"
        ,

            formParams,
            
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }
/**
     * You can verify whether a Channel access token with a user-specified expiration (Channel Access Token v2.1) is valid.
    * @param accessToken Channel access token with a user-specified expiration (Channel Access Token v2.1).
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#verfiy-channel-access-token-v2-1"> Documentation</a>
    */
    public async verifyChannelTokenByJWT(accessToken: string, ) : Promise<VerifyChannelAccessTokenResponse> {
        return (await this.verifyChannelTokenByJWTWithHttpInfo(accessToken, )).body;
    }

    /**
     * You can verify whether a Channel access token with a user-specified expiration (Channel Access Token v2.1) is valid..
     * This method includes HttpInfo object to return additional information.
    * @param accessToken Channel access token with a user-specified expiration (Channel Access Token v2.1).
    * 
     * @see <a href="https://developers.line.biz/en/reference/messaging-api/#verfiy-channel-access-token-v2-1"> Documentation</a>
    */
    public async verifyChannelTokenByJWTWithHttpInfo(accessToken: string, ) : Promise<Types.ApiResponseType<VerifyChannelAccessTokenResponse>> {
    
        


    const queryParams = {
        "accessToken": accessToken,
        
        };
        Object.keys(queryParams).forEach((key: keyof typeof queryParams) => {
          if (queryParams[key] === undefined) {
            delete queryParams[key];
          }
        });
    
    

        const res = await this.httpClient.get(
            "/oauth2/v2.1/verify"
        ,

            queryParams,
            
        );
        return {httpResponse: res, body: await res.json()};


    
    }

}
