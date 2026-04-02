import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export interface Action {
    created_at?: string;
    data: {
        channel: string;
        message: string;
    };
    id: string;
    name: string;
    key: string;
}

export type ActionsListResponse = ListResponse<Action>;

export class Actions extends APIResource {
    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<ListResponse<Action>> {
        const { ...query } = params;
        return this._client.get(`/telemetry/v1/actions`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
}
