import { APIResource } from "../../resource.mjs";
export class SpaceRoleUsers extends APIResource {
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
//# sourceMappingURL=space-role-users.mjs.map