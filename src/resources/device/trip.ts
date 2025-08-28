import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

interface TripListParams extends ListParamsResponse {
    include_transformed_data?: boolean;
}

export class Trip extends APIResource {
    create(params: TripParams, options?: Core.RequestOptions): Core.APIPromise<TripParams> {
        const { ...body } = params;
        return this._client.post(`/trips/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: string, params: { include_transformed_data?: boolean }, options?: Core.RequestOptions): Core.APIPromise<TripParams> {
        const { ...query } = params;
        return this._client.get(`/trips/${id}/`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    list(params: TripListParams, options?: Core.RequestOptions): Core.APIPromise<TripListResponse> {
        const { ...query } = params;
        return this._client.get(`/trips/`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/trips/${id}/`, {
            ...options,
            headers: { ...options?.headers },
        });
    }

        return this._client.patch(`/trips/${id}/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    update(id: string, params: TripParams, options?: Core.RequestOptions): Core.APIPromise<TripParams> {
        const { ...body } = params;
        return this._client.put(`/trips/${id}/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }
}

export interface TripParams {
    space_device: string;
    start_at: string;
    ended_at: string;
}

export type TripListResponse = ListResponse<TripParams>;
