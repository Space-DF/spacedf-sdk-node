import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class DeviceSpaces extends APIResource {
    create(params: DeviceSpacesParams, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesParams> {
        const { ...body } = params;
        return this._client.post(`/device-spaces/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<DeviceSpacesListResponse> {
        const { ...query } = params;
        return this._client.get(`/device-spaces/`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/device-spaces/${id}/`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }
}

export interface DeviceSpacesParams {
    name: string;
    dev_eui: string;
    description: string;
}

export type DeviceSpacesListResponse = ListResponse<DeviceSpacesParams>;
