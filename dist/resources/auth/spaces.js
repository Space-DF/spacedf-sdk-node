"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spaces = void 0;
const resource_1 = require("../../resource.js");
const core_1 = require("../../core.js");
class Spaces extends resource_1.APIResource {
    create(body, options) {
        return this._client.post(`${this.authPath}/spaces`, { body, ...options });
    }
    update(params, options) {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.authPath}/spaces`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    list(params = {}, options) {
        if ((0, core_1.isRequestOptions)(params)) {
            return this.list({}, params);
        }
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.authPath}/spaces`, {
            query,
            ...options,
            headers: { ...(xSpace != null ? { 'X-Space': xSpace } : undefined), ...options?.headers },
        });
    }
    delete(params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.authPath}/spaces`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }
}
exports.Spaces = Spaces;
//# sourceMappingURL=spaces.js.map