import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class SpaceRoleUsers extends APIResource {
    retrieve(id: number, params: SpaceRoleUsersParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUser> {
        const { 'X-Space': xspace } = params;
        return this._client.get(`/space-role-users/${id}`, {
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    list(spaceName: string, params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUserListResponse> {
        const { ...query } = params;
        return this._client.get(`/space-role-users`, {
            query,
            ...options,
            headers: { ...options?.headers, 'X-Space': spaceName },
        });
    }

    update(id: number, params: SpaceRoleUserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUserUpdateParams> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.put(`/space-role-users/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    partialUpdate(id: number, params: SpaceRoleUserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUserUpdateParams> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.patch(`/space-role-users/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    setSpaceDefault(id: String, params: SpaceRoleUsersParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xspace } = params;
        return this._client.post(`/space-role-users/${id}/default`, {
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    delete(id: number, params: SpaceRoleUsersParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xspace } = params;
        return this._client.delete(`/space-role-users/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers, 'X-Space': xspace },
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

export interface SpaceRoleUserUpdateParams {
    space_role: string;
    'X-Space': string;
}

export interface SpaceRoleUsersParams {
    'X-Space': string;
}

export type SpaceRoleUserListResponse = ListResponse<SpaceRoleUser>;
