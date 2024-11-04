"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2 = void 0;
const resource_1 = require("../../resource.js");
const utils_1 = require("../../libs/utils.js");
class OAuth2 extends resource_1.APIResource {
    async authorize(body, options) {
        const verifier = (0, utils_1.rstripBase64)((0, utils_1.toBase64)((0, utils_1.uuid4)()));
        const codeChallenge = (0, utils_1.rstripBase64)((0, utils_1.toBase64)(await (0, utils_1.toSHA256)(verifier)));
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
exports.OAuth2 = OAuth2;
//# sourceMappingURL=oauth2.js.map