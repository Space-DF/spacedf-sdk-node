// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DailyAPI from './daily';
import { DeviceStateListParams, DeviceStateListResponse } from './device-states';

export class Daily extends APIResource {
  retrieve(
    params: DailyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DailyRetrieveResponse> {
    const { 'X-Space': xSpace, ...query } = params;
    return this._client.get('/device-states/daily', {
      query,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }
}

export interface DailyRetrieveResponse extends DeviceStateListResponse<DailyRetrieveResponse.Result> {}

export namespace DailyRetrieveResponse {
  export interface Result {
    device_slug_name: string;

    from_timestamp: string;

    space: number;

    state_name: string;

    value: string;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
  }
}

export interface DailyRetrieveParams extends DeviceStateListParams {}

export namespace Daily {
  export import DailyRetrieveResponse = DailyAPI.DailyRetrieveResponse;
  export import DailyRetrieveParams = DailyAPI.DailyRetrieveParams;
}
