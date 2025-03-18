import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class DeviceStates extends APIResource {
    retrieveDaily(params: DailyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<DailyRetrieveResponse> {
        const { ...query } = params;
        return this._client.get(`/device-states/daily`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieveHourly(params: HourlyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<HourlyRetrieveResponse> {
        const { ...query } = params;
        return this._client.get(`/device-states/hourly`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieveMinutely(params: MinutelyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<MinutelyRetrieveResponse> {
        const { ...query } = params;
        return this._client.get(`/device-states/minutely`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieveMonthly(params: MonthlyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<MonthlyRetrieveResponse> {
        const { ...query } = params;
        return this._client.get(`/device-states/monthly`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
}

export type DeviceStateListResponse<T> = ListResponse<T>;

export interface DeviceStateListParams extends Omit<ListParamsResponse, 'search'> {
    /**
     * Query param: device_slug_name
     */
    device_slug_name?: string;

    /**
     * Query param: state_name
     */
    state_name?: string;
}

export type DailyRetrieveResponse = DeviceStateListResponse<DailyRetrieveResult>;

export interface DailyRetrieveResult {
    device_slug_name: string;

    from_timestamp: string;

    space: number;

    state_name: string;

    value: string;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type DailyRetrieveParams = DeviceStateListParams;

export type MinutelyRetrieveResponse = ListResponse<MinutelyRetrieveResult>;

export interface MinutelyRetrieveResult {
    device_slug_name: string;

    from_timestamp: string;

    space: number;

    state_name: string;

    value: string;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type MinutelyRetrieveParams = DeviceStateListParams;

export type MonthlyRetrieveResponse = ListResponse<MonthlyRetrieveResult>;

export interface MonthlyRetrieveResult {
    device_slug_name: string;

    from_timestamp: string;

    space: number;

    state_name: string;

    value: string;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type MonthlyRetrieveParams = DeviceStateListParams;

export type HourlyRetrieveResponse = ListResponse<HourlyRetrieveResult>;
export interface HourlyRetrieveResult {
    device_slug_name: string;

    from_timestamp: string;

    space: number;

    state_name: string;

    value: string;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type HourlyRetrieveParams = DeviceStateListParams;
