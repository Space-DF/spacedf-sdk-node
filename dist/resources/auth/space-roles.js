"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceRoles = void 0;
const resource_1 = require("../../resource.js");
class SpaceRoles extends resource_1.APIResource {
    create(params, options) {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.post(`${this.authPath}/space-roles`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    retrieve(id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.get(`${this.authPath}/space-roles/${id}`, {
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    update(id, params, options) {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.authPath}/space-roles/${id}`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    list(params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.authPath}/space-roles`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    delete(id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.authPath}/space-roles/${id}`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }
}
exports.SpaceRoles = SpaceRoles;
//# sourceMappingURL=space-roles.js.map