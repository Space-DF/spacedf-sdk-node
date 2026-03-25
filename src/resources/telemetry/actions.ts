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

export interface ActionsListParams extends ListParamsResponse {
    limit?: number;
    offset?: number;
    search?: string;
}

export class Actions extends APIResource {
    list(params: ActionsListParams, options?: Core.RequestOptions): Core.APIPromise<ActionsListResponse> {
        const { ...query } = params;
        return this._client.get(`/telemetry/v1/actions`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
}
