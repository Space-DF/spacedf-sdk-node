import { APIResource } from "../../resource.mjs";
import { rstripBase64, toBase64, toSHA256, uuid4 } from "../../libs/utils.mjs";
export class OAuth2 extends APIResource {
    async authorize(body, options) {
        const verifier = rstripBase64(toBase64(uuid4()));
        const codeChallenge = rstripBase64(toBase64(await toSHA256(verifier)));
        const oAuth2AuthorizeBody = {
            ...body,
            response_type: 'code',
            code_challenge: codeChallenge,
            code_challenge_method: 'S256',
        };
        return this._client.post(`${this.consolePath}/auth/login`, { body: oAuth2AuthorizeBody, ...options })._thenUnwrap((obj) => ({ ...obj.data, verifier }));
    }
    token(body, options) {
        return this._client.post(`${this.consolePath}/auth/oauth2/google`, { body, ...options });
    }
}
//# sourceMappingURL=oauth2.mjs.map