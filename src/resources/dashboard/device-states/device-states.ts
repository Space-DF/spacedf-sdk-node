// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as DailyAPI from './daily';
import * as HourlyAPI from './hourly';
import * as MinutelyAPI from './minutely';
import * as MonthlyAPI from './monthly';
import { APIResource } from '../../../resource';
import { ListParamsResponse, ListResponse } from '../../../types';

export class DeviceStates extends APIResource {
  daily: DailyAPI.Daily = new DailyAPI.Daily(this._client);
  hourly: HourlyAPI.Hourly = new HourlyAPI.Hourly(this._client);
  minutely: MinutelyAPI.Minutely = new MinutelyAPI.Minutely(this._client);
  monthly: MonthlyAPI.Monthly = new MonthlyAPI.Monthly(this._client);
}

export interface DeviceStateListResponse<T> extends ListResponse<T> {}

export interface DeviceStateListParams extends Omit<ListParamsResponse, 'search'> {
  /**
   * Header param: Space slug name
   */
  'X-Space': string;

  /**
   * Query param: device_slug_name
   */
  device_slug_name?: string;

  /**
   * Query param: state_name
   */
  state_name?: string;
}

export namespace DeviceStates {
  export import Daily = DailyAPI.Daily;
  export import DailyRetrieveResponse = DailyAPI.DailyRetrieveResponse;
  export import DailyRetrieveParams = DailyAPI.DailyRetrieveParams;
  export import Hourly = HourlyAPI.Hourly;
  export import HourlyRetrieveResponse = HourlyAPI.HourlyRetrieveResponse;
  export import HourlyRetrieveParams = HourlyAPI.HourlyRetrieveParams;
  export import Minutely = MinutelyAPI.Minutely;
  export import MinutelyRetrieveResponse = MinutelyAPI.MinutelyRetrieveResponse;
  export import MinutelyRetrieveParams = MinutelyAPI.MinutelyRetrieveParams;
  export import Monthly = MonthlyAPI.Monthly;
  export import MonthlyRetrieveResponse = MonthlyAPI.MonthlyRetrieveResponse;
  export import MonthlyRetrieveParams = MonthlyAPI.MonthlyRetrieveParams;
}
