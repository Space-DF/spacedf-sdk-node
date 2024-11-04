"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceRoleUsers = void 0;
const resource_1 = require("../../resource.js");
class SpaceRoleUsers extends resource_1.APIResource {
    retrieve(id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.get(`${this.authPath}/space-role-users/${id}`, {
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    list(params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.authPath}/space-role-users`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    delete(id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.authPath}/space-role-users/${id}`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }
}
exports.SpaceRoleUsers = SpaceRoleUsers;
//# sourceMappingURL=space-role-users.js.map