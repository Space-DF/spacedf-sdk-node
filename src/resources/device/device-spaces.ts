import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

interface DeviceSpacesListParams extends ListParamsResponse {
    include_latest_checkpoint?: boolean;
}

export class DeviceSpaces extends APIResource {
    create(params: DeviceSpacesParams, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesParams> {
        const { ...body } = params;
        return this._client.post(`/device-spaces`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    list(params: DeviceSpacesListParams, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesListResponse> {
        const { ...query } = params;
        return this._client.get(`/device-spaces`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    listPublic(params: ListParamsResponse = {}, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesListResponse> {
        return this._client.get(`/public/device-spaces`, {
            query: params,
            ...options,
        });
    }

    retrieveByDeviceId(deviceId: string, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesParams> {
        return this._client.get(`/device-spaces/device/${deviceId}`, options);
    }

    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/device-spaces/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }

    partialUpdate(id: string, params: DeviceSpacesParams, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesParams> {
        return this._client.patch(`/device-spaces/${id}`, {
            body: params,
            ...options,
        });
    }

    bulkUpdatePosition(params: DeviceSpacesBulkUpdatePositionParams[], options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.put(`/device-spaces/bulk-update`, {
            body: params,
            ...options,
        });
    }
}

export interface DeviceSpacesBulkUpdatePositionParams {
    id: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
}

export interface DeviceSpacesParams {
    name: string;
    dev_eui: string;
    description: string;
    building?: string;
    position?: {
        x: number;
        y: number;
        z: number;
    };
}

export type DeviceSpacesListResponse = ListResponse<DeviceSpacesParams>;
