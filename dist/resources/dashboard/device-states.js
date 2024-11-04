"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceStates = void 0;
const resource_1 = require("../../resource.js");
class DeviceStates extends resource_1.APIResource {
    retrieveDaily(params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/daily`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    retrieveHourly(params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/hourly`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    retrieveMinutely(params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/minutely`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    retrieveMonthly(params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/monthly`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
}
exports.DeviceStates = DeviceStates;
//# sourceMappingURL=device-states.js.map