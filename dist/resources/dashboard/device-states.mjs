import { APIResource } from "../../resource.mjs";
export class DeviceStates extends APIResource {
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
//# sourceMappingURL=device-states.mjs.map