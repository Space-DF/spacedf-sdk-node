import { APIResource } from "../../resource.js";
import * as Core from "../../core.js";
export declare class OAuth2 extends APIResource {
    authorize(body: OAuth2AuthorizeParams, options?: Core.RequestOptions): Promise<OAuth2Authorize>;
    token(body: OAuth2Token, options?: Core.RequestOptions): Core.APIPromise<OAuth2Token>;
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
//# sourceMappingURL=oauth2.d.ts.map