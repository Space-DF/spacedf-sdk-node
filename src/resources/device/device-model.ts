import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class DeviceModel extends APIResource {
    create(params: DeviceModelParams, options?: Core.RequestOptions): Core.APIPromise<DeviceModelParams> {
        const { ...body } = params;
        return this._client.post(`/device-models/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DeviceModelParams> {
        return this._client.get(`/device-models/${id}/`, {
           ...options,
           headers: { ...options?.headers },
         });
     }
    
     update(id: string, params: DeviceModelParams, options?: Core.RequestOptions): Core.APIPromise<DeviceModelParams> {
         const { ...body } = params;
         return this._client.put(`/device-models/${id}/`, {
            body,
            ...options,
            headers: { ...options?.headers },
         });
     }
    
     partialUpdate(id: number, params: DeviceModelParams, options?: Core.RequestOptions): Core.APIPromise<DeviceModelParams> {
         const { ...body } = params;
         return this._client.patch(`/device-models/${id}/`, {
            body,
            ...options,
            headers: { ...options?.headers },
         });
     }
    
     list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<DeviceModelListResponse> {
         const { ...query } = params;
         return this._client.get(`/device-models/`, {
            query,
            ...options,
            headers: { ...options?.headers },
         });
     }
    
     delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
         return this._client.delete(`/device-models/${id}/`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
         });
     }

}

export interface DeviceModelParams {
    name: string;
    alias: string;
    image_url: string;
    default_config: object;
    manufacture: string;
}

export type DeviceModelListResponse = ListResponse<DeviceModelParams>;
