import { APIResource } from "../../resource.js";
import * as Core from "../../core.js";
import { ListParamsResponse, ListResponse } from "../../types/api.js";
export declare class Dashboards extends APIResource {
    create(params: DashboardCreateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard>;
    retrieve(id: number, params: DashboardRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard>;
    update(id: number, params: DashboardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard>;
    list(params: DashboardListParams, options?: Core.RequestOptions): Core.APIPromise<DashboardListResponse>;
    delete(id: number, params: DashboardDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
    createWidget(dashboardId: string, params: WidgetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Widget>;
    retrieveWidget(dashboardId: string, id: number, params: WidgetRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Widget>;
    updateWidget(dashboardId: string, id: number, params: WidgetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Widget>;
    listWidgets(dashboardId: string, params: WidgetListParams, options?: Core.RequestOptions): Core.APIPromise<WidgetListResponse>;
    deleteWidget(dashboardId: string, id: number, params: WidgetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
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
//# sourceMappingURL=dashboards.d.ts.map