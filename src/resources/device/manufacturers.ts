import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Manufacturers extends APIResource {
    create(params: ManufacturersParams, options?: Core.RequestOptions): Core.APIPromise<ManufacturersParams> {
        const { ...body } = params;
        return this._client.post(`/manufacturers/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ManufacturersParams> {
            return this._client.get(`/manufacturers/${id}/`, {
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        update(id: string, params: ManufacturersParams, options?: Core.RequestOptions): Core.APIPromise<ManufacturersParams> {
            const { ...body } = params;
            return this._client.put(`/manufacturers/${id}/`, {
                body,
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        partialUpdate(id: number, params: ManufacturersParams, options?: Core.RequestOptions): Core.APIPromise<ManufacturersParams> {
            const { ...body } = params;
            return this._client.patch(`/manufacturers/${id}/`, {
                body,
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<ManufacturersListResponse> {
            const { ...query } = params;
            return this._client.get(`/manufacturers/`, {
                query,
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
            return this._client.delete(`/manufacturers/${id}/`, {
                ...options,
                headers: { Accept: '*/*', ...options?.headers },
            });
        }

}

export interface ManufacturersParams {
    name: string;
    location: string;
    description: string;
    portal_url: string;
    national: string;
}

export type ManufacturersListResponse = ListResponse<ManufacturersParams>;
