import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Device extends APIResource {
    create(params: DeviceParams, options?: Core.RequestOptions): Core.APIPromise<DeviceParams> {
        const { ...body } = params;
        return this._client.post(`/devices/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DeviceParams> {
        return this._client.get(`/devices/${id}/`, {
            ...options,
            headers: { ...options?.headers },
        });
    }
    
    update(id: string, params: DeviceParams, options?: Core.RequestOptions): Core.APIPromise<DeviceParams> {
        const { ...body } = params;
        return this._client.put(`/devices/${id}/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }
    
    partialUpdate(id: number, params: DeviceParams, options?: Core.RequestOptions): Core.APIPromise<DeviceParams> {
        const { ...body } = params;
        return this._client.patch(`/devices/${id}/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }
    
    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<DeviceListResponse> {
        const { ...query } = params;
        return this._client.get(`/devices/`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
    
    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/devices/${id}/`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }

}

export interface DeviceParams {
    status?: string;
    device_connector: string;
    device_model: string;
}

export type DeviceListResponse = ListResponse<DeviceParams>;
