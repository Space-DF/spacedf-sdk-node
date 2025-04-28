import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class SpaceRoleUsers extends APIResource {
    retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUser> {
        return this._client.get(`/space-role-users/${id}`, {
            ...options,
            headers: { ...options?.headers },
        });
    }

    list(params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUserListResponse> {
        const { ...query } = params;
        return this._client.get(`/space-role-users`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }

    update(id: number, params: SpaceRoleParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleParams> {
        const { ...body } = params;
        return this._client.put(`/space-role-users/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    partialUpdate(id: number, params: SpaceRoleParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleParams> {
        const { ...body } = params;
        return this._client.patch(`/space-role-users/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    setSpaceDefault(id: String, options ?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.post(`/space-role-users/${id}/default`, {
            body: {},
            ...options,
            headers: {...options?.headers },
        });
    }

    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/space-role-users/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }
}

export interface SpaceRoleUser {
    organization_user: number;

    space_role: number;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export interface SpaceRoleParams {
    space_role: string; 
}

export type SpaceRoleUserListResponse = ListResponse<SpaceRoleUser>;
