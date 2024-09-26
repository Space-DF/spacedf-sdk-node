// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as HourlyAPI from './hourly';
import { DeviceStateListParams } from './device-states';
import { ListResponse } from '../../../types';

export class Hourly extends APIResource {
  retrieve(
    params: HourlyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HourlyRetrieveResponse> {
    const { 'X-Space': xSpace, ...query } = params;
    return this._client.get('/device-states/hourly', {
      query,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }
}

export interface HourlyRetrieveResponse extends ListResponse<HourlyRetrieveResponse.Result> {}

export namespace HourlyRetrieveResponse {
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

export interface HourlyRetrieveParams extends DeviceStateListParams {}

export namespace Hourly {
  export import HourlyRetrieveResponse = HourlyAPI.HourlyRetrieveResponse;
  export import HourlyRetrieveParams = HourlyAPI.HourlyRetrieveParams;
}
