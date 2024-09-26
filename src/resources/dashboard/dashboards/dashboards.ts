// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DashboardsAPI from './dashboards';
import * as WidgetsAPI from './widgets';
import { ListParamsResponse, ListResponse } from '../../../types/api';

export class Dashboards extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);

  create(params: DashboardCreateParams, options?: Core.RequestOptions): Core.APIPromise<Dashboard> {
    const { 'X-Space': xSpace, ...body } = params;
    return this._client.post('/dashboards', {
      body,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  retrieve(
    id: number,
    params: DashboardRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Dashboard> {
    const { 'X-Space': xSpace } = params;
    return this._client.get(`/dashboards/${id}`, {
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  update(
    id: number,
    params: DashboardUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Dashboard> {
    const { 'X-Space': xSpace, ...body } = params;
    return this._client.patch(`/dashboards/${id}`, {
      body,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  list(params: DashboardListParams, options?: Core.RequestOptions): Core.APIPromise<DashboardListResponse> {
    const { 'X-Space': xSpace, ...query } = params;
    return this._client.get('/dashboards', {
      query,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  delete(id: number, params: DashboardDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-Space': xSpace } = params;
    return this._client.delete(`/dashboards/${id}`, {
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

export interface DashboardListResponse extends ListResponse<Dashboard> {}

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

export namespace Dashboards {
  export import Dashboard = DashboardsAPI.Dashboard;
  export import DashboardListResponse = DashboardsAPI.DashboardListResponse;
  export import DashboardCreateParams = DashboardsAPI.DashboardCreateParams;
  export import DashboardRetrieveParams = DashboardsAPI.DashboardRetrieveParams;
  export import DashboardUpdateParams = DashboardsAPI.DashboardUpdateParams;
  export import DashboardListParams = DashboardsAPI.DashboardListParams;
  export import DashboardDeleteParams = DashboardsAPI.DashboardDeleteParams;
  export import Widgets = WidgetsAPI.Widgets;
  export import Widget = WidgetsAPI.Widget;
  export import WidgetListResponse = WidgetsAPI.WidgetListResponse;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetRetrieveParams = WidgetsAPI.WidgetRetrieveParams;
  export import WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetDeleteParams = WidgetsAPI.WidgetDeleteParams;
}
