import { APIResource } from "../../resource.mjs";
import { isRequestOptions } from "../../core.mjs";
export class SpacePolicies extends APIResource {
    retrieve(id, options) {
        return this._client.get(`${this.authPath}/space-policies/${id}`, options);
    }
    list(query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list({}, query);
        }
        return this._client.get(`${this.authPath}/space-policies`, { query, ...options });
    }
}
//# sourceMappingURL=space-policies.mjs.map