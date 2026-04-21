import { APIResource } from '../../resource';
import * as Core from '../../core';
import { Floor, FloorCreateParams } from '../building';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Floors extends APIResource {
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Floor> {
        return this._client.get(`/floors/${id}`, {
            ...options,
        });
    }

    update(id: string, params: FloorUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Floor> {
        const { ...body } = params;
        return this._client.put(`/floors/${id}`, {
            body,
            ...options,
        });
    }

    partialUpdate(id: string, params: FloorUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Floor> {
        const { ...body } = params;
        return this._client.patch(`/floors/${id}`, {
            body,
            ...options,
        });
    }

    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/floors/${id}`, {
            ...options,
        });
    }

    listRooms(floorId: string, params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<RoomListResponse> {
        const { ...query } = params;
        return this._client.get(`/floors/${floorId}/areas`, {
            query,
            ...options,
        });
    }

    createRoom(floorId: string, params: RoomCreateParams, options?: Core.RequestOptions): Core.APIPromise<Room> {
        const { ...body } = params;
        return this._client.post(`/floors/${floorId}/areas`, {
            body,
            ...options,
        });
    }
}
export type FloorUpdateParams = FloorCreateParams;

export interface Room {
    id?: string;
    name: string;
    description?: string;
    area_type: string;
    scene_asset: string;
}

export type RoomListResponse = ListResponse<Room>;

export interface RoomCreateParams {
    name: string;
    description?: string;
    area_type: string;
    scene_asset: string;
}
