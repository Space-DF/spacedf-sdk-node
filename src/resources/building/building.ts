import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Buildings extends APIResource {
    create(params: BuildingCreateParams, options?: Core.RequestOptions): Core.APIPromise<Building> {
        const { ...body } = params;
        return this._client.post(`/buildings`, {
            body,
            ...options,
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Building> {
        return this._client.get(`/buildings/${id}`, {
            ...options,
        });
    }

    update(id: string, params: Partial<BuildingCreateParams>, options?: Core.RequestOptions): Core.APIPromise<Building> {
        const { ...body } = params;
        return this._client.put(`/buildings/${id}`, {
            body,
            ...options,
        });
    }

    partialUpdate(id: string, params: Partial<BuildingCreateParams>, options?: Core.RequestOptions): Core.APIPromise<Building> {
        const { ...body } = params;
        return this._client.patch(`/buildings/${id}`, {
            body,
            ...options,
        });
    }

    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<BuildingListResponse> {
        const { ...query } = params;
        return this._client.get(`/buildings`, {
            query,
            ...options,
        });
    }

    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/buildings/${id}`, {
            ...options,
        });
    }

    createFloor(buildingId: string, params: FloorCreateParams, options?: Core.RequestOptions): Core.APIPromise<Floor> {
        const { ...body } = params;
        return this._client.post(`/buildings/${buildingId}/floors`, {
            body,
            ...options,
        });
    }

    listFloors(buildingId: number, params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<FloorListResponse> {
        const { ...query } = params;
        return this._client.get(`/buildings/${buildingId}/floors`, {
            query,
            ...options,
        });
    }
}

export interface Building {
    id: string;
    name: string;
    description: string;
    location: {
        latitude: number;
        longitude: number;
    };
}

export type BuildingListResponse = ListResponse<Building>;

export interface BuildingCreateParams {
    name: string;
    description: string;
    location: {
        latitude?: number;
        longitude?: number;
    };
}

export interface Floor {
    id: string;
    name: string;
    description: string;
    level: number;
    scene_asset: string;
}

export type FloorListResponse = ListResponse<Floor>;

export interface FloorCreateParams {
    name: string;
    description: string;
    level: number;
    scene_asset: string;
}
