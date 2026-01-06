import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export interface Alert {
    [key: string]: any;
}

export type AlertsListResponse = ListResponse<Alert>;

export interface AlertsListParams extends ListParamsResponse {
    device_id?: string;
    category?: string;
    start_date?: string;
    end_date?: string;
}

export class Alerts extends APIResource {
    list(params: AlertsListParams, options?: Core.RequestOptions): Core.APIPromise<AlertsListResponse> {
        const { ...query } = params;
        return this._client.get(`/telemetry/v1/alerts`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
}
