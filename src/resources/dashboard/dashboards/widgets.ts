// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as WidgetsAPI from './widgets';

export class Widgets extends APIResource {
  create(
    dashboardId: string,
    params: WidgetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Widget> {
    const { 'X-Space': xSpace, ...body } = params;
    return this._client.post(`/dashboards/${dashboardId}/widgets`, {
      body,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  retrieve(
    dashboardId: string,
    id: number,
    params: WidgetRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Widget> {
    const { 'X-Space': xSpace } = params;
    return this._client.get(`/dashboards/${dashboardId}/widgets/${id}`, {
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  update(
    dashboardId: string,
    id: number,
    params: WidgetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Widget> {
    const { 'X-Space': xSpace, ...body } = params;
    return this._client.patch(`/dashboards/${dashboardId}/widgets/${id}`, {
      body,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  list(
    dashboardId: string,
    params: WidgetListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WidgetListResponse> {
    const { 'X-Space': xSpace, ...query } = params;
    return this._client.get(`/dashboards/${dashboardId}/widgets`, {
      query,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  delete(
    dashboardId: string,
    id: number,
    params: WidgetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { 'X-Space': xSpace } = params;
    return this._client.delete(`/dashboards/${dashboardId}/widgets/${id}`, {
      ...options,
      headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
    });
  }
}

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

export namespace Widgets {
  export import Widget = WidgetsAPI.Widget;
  export import WidgetListResponse = WidgetsAPI.WidgetListResponse;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetRetrieveParams = WidgetsAPI.WidgetRetrieveParams;
  export import WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetDeleteParams = WidgetsAPI.WidgetDeleteParams;
}
