"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpacePolicies = void 0;
const resource_1 = require("../../resource.js");
const core_1 = require("../../core.js");
class SpacePolicies extends resource_1.APIResource {
    retrieve(id, options) {
        return this._client.get(`${this.authPath}/space-policies/${id}`, options);
    }
    list(query = {}, options) {
        if ((0, core_1.isRequestOptions)(query)) {
            return this.list({}, query);
        }
        return this._client.get(`${this.authPath}/space-policies`, { query, ...options });
    }
}
exports.SpacePolicies = SpacePolicies;
//# sourceMappingURL=space-policies.js.map