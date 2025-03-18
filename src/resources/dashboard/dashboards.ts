import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Dashboards extends APIResource {
    create(params: DashboardCreateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
        const { ...body } = params;
        return this._client.post(`/dashboards`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
        return this._client.get(`/dashboards/${id}`, {
            ...options,
            headers: { ...options?.headers },
        });
    }

    update(id: number, params: DashboardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
        const { ...body } = params;
        return this._client.put(`/dashboards/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    partialUpdate(id: number, params: DashboardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
        const { ...body } = params;
        return this._client.patch(`/dashboards/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<DashboardListResponse> {
        const { ...query } = params;
        return this._client.get(`/dashboards`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/dashboards/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }

    createWidget(dashboardId: string, params: WidgetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
        const { ...body } = params;
        return this._client.post(`/dashboards/${dashboardId}/widgets`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieveWidget(dashboardId: string, id: number, options?: Core.RequestOptions): Core.APIPromise<Widget> {
        return this._client.get(`/dashboards/${dashboardId}/widgets/${id}`, {
            ...options,
            headers: { ...options?.headers },
        });
    }

    updateWidget(dashboardId: string, id: number, params: WidgetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
        const { ...body } = params;
        return this._client.put(`/dashboards/${dashboardId}/widgets/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    partialUpdateWidget(dashboardId: string, id: number, params: WidgetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
        const { ...body } = params;
        return this._client.patch(`/dashboards/${dashboardId}/widgets/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    listWidgets(dashboardId: string, params: WidgetListParams, options?: Core.RequestOptions): Core.APIPromise<WidgetListResponse> {
        const { ...query } = params;
        return this._client.get(`/dashboards/${dashboardId}/widgets`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    deleteWidget(dashboardId: string, id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/dashboards/${dashboardId}/widgets/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
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
}

export interface DashboardUpdateParams {
    /**
     * Body param:
     */
    name: string;
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
}

export interface WidgetUpdateParams {
    /**
     * Body param:
     */
    configuration: any;
}

export interface WidgetListParams {
    /**
     * Query param: Which field to use when ordering the results.
     */
    ordering?: string;
}
