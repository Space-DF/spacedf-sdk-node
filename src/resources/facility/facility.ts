import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Facilities extends APIResource {
    create(params: FacilityCreateParams, options?: Core.RequestOptions): Core.APIPromise<Facility> {
        const { ...body } = params;
        return this._client.post(`/facilities/`, {
            body,
            ...options,
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Facility> {
        return this._client.get(`/facilities/${id}/`, {
            ...options,
        });
    }

    update(id: string, params: FacilityUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Facility> {
        const { ...body } = params;
        return this._client.put(`/facilities/${id}/`, {
            body,
            ...options,
        });
    }

    partialUpdate(id: string, params: FacilityUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Facility> {
        const { ...body } = params;
        return this._client.patch(`/facilities/${id}/`, {
            body,
            ...options,
        });
    }

    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<FacilityListResponse> {
        const { ...query } = params;
        return this._client.get(`/facilities/`, {
            query,
            ...options,
        });
    }

    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/facilities/${id}/`, {
            ...options,
        });
    }
}

export interface FacilityCreateParams {
    name: string;
    description: string;
    location: {
        latitude: number;
        longitude: number;
    };
    scene_asset: string;
}

export interface Facility extends FacilityCreateParams {
    id?: string;
}

export type FacilityListResponse = ListResponse<Facility>;

export type FacilityUpdateParams = FacilityCreateParams;
