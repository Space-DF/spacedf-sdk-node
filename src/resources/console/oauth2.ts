import { APIResource } from '../../resource';
import * as Core from '../../core';
import { rstripBase64, toBase64, toSHA256, uuid4 } from '../../libs/utils';

export class OAuth2 extends APIResource {
    async authorize(body: OAuth2AuthorizeParams, options?: Core.RequestOptions): Promise<OAuth2Authorize> {
        const verifier = rstripBase64(toBase64(uuid4()));
        const codeChallenge = rstripBase64(toBase64(await toSHA256(verifier)));

        const oAuth2AuthorizeBody: OAuth2Authorize = {
            ...body,
            response_type: 'code',
            code_challenge: codeChallenge,
            code_challenge_method: 'S256',
        };

        return (
            this._client.post(`${this.consolePath}/auth/login`, { body: oAuth2AuthorizeBody, ...options }) as Core.APIPromise<{
                data: OAuth2Authorize;
            }>
        )._thenUnwrap((obj) => ({ ...obj.data, verifier }));
    }

    token(body: OAuth2Token, options?: Core.RequestOptions): Core.APIPromise<OAuth2Token> {
        return this._client.post(`${this.consolePath}/auth/oauth2/google`, { body, ...options });
    }
}

export type OAuth2AuthorizeParams = Pick<OAuth2Authorize, 'client_id' | 'redirect_uri' | 'scopes'>;

export interface OAuth2Authorize {
    /**
     * Response type
     */
    response_type: 'code';

    /**
     * Code challenge, require min length > 1
     */
    code_challenge: string;

    /**
     * Code challenge method
     */
    code_challenge_method: 'plain' | 'S256';

    /**
     * Client id
     */
    client_id: string;

    /**
     * Redirect uri
     */
    redirect_uri: string;

    scopes: Array<'organization'>;
}

export interface OAuth2Token {
    /**
     * Client id
     */
    client_id: string;

    /**
     * Client secret
     */
    client_secret: string;

    /**
     * Code
     */
    code: string;

    /**
     * Code verifier
     */
    code_verifier: string;

    readonly scopes?: Array<'organization'>;

    /**
     * Id token
     */
    readonly id_token?: string;
}
