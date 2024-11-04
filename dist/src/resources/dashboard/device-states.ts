import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class DeviceStates extends APIResource {
    retrieveDaily(params: DailyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<DailyRetrieveResponse> {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/daily`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    retrieveHourly(params: HourlyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<HourlyRetrieveResponse> {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/hourly`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    retrieveMinutely(params: MinutelyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<MinutelyRetrieveResponse> {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/minutely`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    retrieveMonthly(params: MonthlyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<MonthlyRetrieveResponse> {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.dashboardPath}/device-states/monthly`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }
}

export type DeviceStateListResponse<T> = ListResponse<T>;

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
