// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MinutelyAPI from './minutely';
import { DeviceStateListParams } from './device-states';
import { ListResponse } from '../../../types';

export class Minutely extends APIResource {
  retrieve(
    params: MinutelyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinutelyRetrieveResponse> {
    const { 'X-Space': xSpace, ...query } = params;
    return this._client.get('/device-states/minutely', {
      query,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }
}

export interface MinutelyRetrieveResponse extends ListResponse<MinutelyRetrieveResponse.Result> {}

export namespace MinutelyRetrieveResponse {
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

export interface MinutelyRetrieveParams extends DeviceStateListParams {}

export namespace Minutely {
  export import MinutelyRetrieveResponse = MinutelyAPI.MinutelyRetrieveResponse;
  export import MinutelyRetrieveParams = MinutelyAPI.MinutelyRetrieveParams;
}
