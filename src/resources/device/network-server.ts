import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class NetworkServer extends APIResource {
    create(params: NetworkServerParams, options?: Core.RequestOptions): Core.APIPromise<NetworkServerParams> {
        const { ...body } = params;
        return this._client.post(`/network-server/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<NetworkServerParams> {
            return this._client.get(`/network-server/${id}/`, {
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        update(id: string, params: NetworkServerParams, options?: Core.RequestOptions): Core.APIPromise<NetworkServerParams> {
            const { ...body } = params;
            return this._client.put(`/network-server/${id}/`, {
                body,
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        partialUpdate(id: number, params: NetworkServerParams, options?: Core.RequestOptions): Core.APIPromise<NetworkServerParams> {
            const { ...body } = params;
            return this._client.patch(`/network-server/${id}/`, {
                body,
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<NetworkServerListResponse> {
            const { ...query } = params;
            return this._client.get(`/network-server/`, {
                query,
                ...options,
                headers: { ...options?.headers },
            });
        }
    
        delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
            return this._client.delete(`/network-server/${id}/`, {
                ...options,
                headers: { Accept: '*/*', ...options?.headers },
            });
        }

}

export interface NetworkServerParams {
    name: string;
    logo: string;
    description: string;
    type_connect: string[];
}

export type NetworkServerListResponse = ListResponse<NetworkServerParams>;
