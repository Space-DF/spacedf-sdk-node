import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Dashboards extends APIResource {
    create(params: DashboardCreateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.post(`${this.dashboardPath}/dashboards`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    retrieve(id: number, params: DashboardRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
        const { 'X-Space': xSpace } = params;
        return this._client.get(`${this.dashboardPath}/dashboards/${id}`, {
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    update(id: number, params: DashboardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.dashboardPath}/dashboards/${id}`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    list(params: DashboardListParams, options?: Core.RequestOptions): Core.APIPromise<DashboardListResponse> {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/dashboards`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    delete(id: number, params: DashboardDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.dashboardPath}/dashboards/${id}`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }

    createWidget(dashboardId: string, params: WidgetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.post(`${this.dashboardPath}/dashboards/${dashboardId}/widgets`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    retrieveWidget(dashboardId: string, id: number, params: WidgetRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
        const { 'X-Space': xSpace } = params;
        return this._client.get(`${this.dashboardPath}/dashboards/${dashboardId}/widgets/${id}`, {
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    updateWidget(dashboardId: string, id: number, params: WidgetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.dashboardPath}/dashboards/${dashboardId}/widgets/${id}`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    listWidgets(dashboardId: string, params: WidgetListParams, options?: Core.RequestOptions): Core.APIPromise<WidgetListResponse> {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/dashboards/${dashboardId}/widgets`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    deleteWidget(dashboardId: string, id: number, params: WidgetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.dashboardPath}/dashboards/${dashboardId}/widgets/${id}`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }
}

export interface Dashboard {
    name: string;

    id?: number;

    space?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type DashboardListResponse = ListResponse<Dashboard>;

export interface DashboardCreateParams {
    /**
     * Body param:
     */
    name: string;

    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface DashboardRetrieveParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}

export interface DashboardUpdateParams {
    /**
     * Body param:
     */
    name: string;

    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface DashboardListParams extends ListParamsResponse {
    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface DashboardDeleteParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}

/** ------------------------------------
 * Widget type
 ---------------------------------------*/
export interface Widget {
    readonly id?: number;

    configuration: any;

    readonly dashboard?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type WidgetListResponse = Array<Widget>;

export interface WidgetCreateParams {
    /**
     * Body param:
     */
    configuration: any;

    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface WidgetRetrieveParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}

export interface WidgetUpdateParams {
    /**
     * Body param:
     */
    configuration: any;

    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface WidgetListParams {
    /**
     * Header param: Space slug name
     */
    'X-Space': string;

    /**
     * Query param: Which field to use when ordering the results.
     */
    ordering?: string;
}

export interface WidgetDeleteParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
