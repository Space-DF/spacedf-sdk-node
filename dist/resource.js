"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResource = void 0;
class APIResource {
    constructor(client) {
        this._client = client;
        this.authPath = 'auth/api';
        this.dashboardPath = 'dashboard/api';
        this.devicePath = 'device/api';
        this.consolePath = 'console/api';
    }
}
exports.APIResource = APIResource;
//# sourceMappingURL=resource.js.map