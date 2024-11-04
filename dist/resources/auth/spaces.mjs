import { APIResource } from "../../resource.mjs";
import { isRequestOptions } from "../../core.mjs";
export class Spaces extends APIResource {
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
        if (isRequestOptions(params)) {
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
//# sourceMappingURL=spaces.mjs.map