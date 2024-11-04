import { APIResource } from "../../resource.mjs";
export class SpaceRoles extends APIResource {
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
//# sourceMappingURL=space-roles.mjs.map