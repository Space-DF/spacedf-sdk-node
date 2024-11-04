import { APIResource } from "../../resource.mjs";
export class Dashboards extends APIResource {
    create(params, options) {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.post(`${this.dashboardPath}/dashboards`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    retrieve(id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.get(`${this.dashboardPath}/dashboards/${id}`, {
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    update(id, params, options) {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.dashboardPath}/dashboards/${id}`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    list(params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/dashboards`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    delete(id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.dashboardPath}/dashboards/${id}`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }
    createWidget(dashboardId, params, options) {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.post(`${this.dashboardPath}/dashboards/${dashboardId}/widgets`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    retrieveWidget(dashboardId, id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.get(`${this.dashboardPath}/dashboards/${dashboardId}/widgets/${id}`, {
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    updateWidget(dashboardId, id, params, options) {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.dashboardPath}/dashboards/${dashboardId}/widgets/${id}`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    listWidgets(dashboardId, params, options) {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/dashboards/${dashboardId}/widgets`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
    deleteWidget(dashboardId, id, params, options) {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.dashboardPath}/dashboards/${dashboardId}/widgets/${id}`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }
}
//# sourceMappingURL=dashboards.mjs.map