"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const resource_1 = require("../../resource.js");
class Auth extends resource_1.APIResource {
    login(body, options) {
        return this._client.post(`${this.authPath}/auth/login`, { body, ...options });
    }
    oauth2Google(body, options) {
        return this._client.post(`${this.authPath}/auth/oauth2/google`, { body, ...options });
    }
    refreshToken(body, options) {
        return this._client.post(`${this.authPath}/auth/refresh-token`, { body, ...options });
    }
    register(body, options) {
        return this._client.post(`${this.authPath}/auth/register`, { body, ...options });
    }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map