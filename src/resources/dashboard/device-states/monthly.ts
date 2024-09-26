// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MonthlyAPI from './monthly';
import { DeviceStateListParams } from './device-states';
import { ListResponse } from '../../../types';

export class Monthly extends APIResource {
  retrieve(
    params: MonthlyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonthlyRetrieveResponse> {
    const { 'X-Space': xSpace, ...query } = params;
    return this._client.get('/device-states/monthly', {
      query,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }
}

export interface MonthlyRetrieveResponse extends  ListResponse<MonthlyRetrieveResponse.Result> {}

export namespace MonthlyRetrieveResponse {
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

export interface MonthlyRetrieveParams extends DeviceStateListParams {}

export namespace Monthly {
  export import MonthlyRetrieveResponse = MonthlyAPI.MonthlyRetrieveResponse;
  export import MonthlyRetrieveParams = MonthlyAPI.MonthlyRetrieveParams;
}
