import { APIResource } from "../../resource.mjs";
export class Auth extends APIResource {
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
//# sourceMappingURL=auth.mjs.map