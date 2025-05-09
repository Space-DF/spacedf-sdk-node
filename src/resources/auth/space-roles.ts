import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class SpaceRoles extends APIResource {
    create(params: SpaceRoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.post(`/space-roles`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    retrieve(id: number, params: SpaceParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole> {
        const { 'X-Space': xspace } = params;
        return this._client.get(`/space-roles/${id}`, {
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    update(id: number, params: SpaceRoleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.put(`/space-roles/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    partialUpdate(id: number, params: SpaceRoleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.patch(`/space-roles/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    list(spaceName: string, params: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleListResponse> {
        const { ...query } = params;
        return this._client.get(`/space-roles`, {
            query,
            ...options,
            headers: { ...options?.headers, 'X-Space': spaceName, },
        });
    }

    delete(id: number, params: SpaceParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xspace } = params;
        return this._client.delete(`/space-roles/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers, 'X-Space': xspace },
        });
    }
}

export interface SpaceRole {
    name: string;

    policies: Array<number>;

    id?: number;

    readonly created_at?: string;

    space?: number;

    updated_at?: string;
}

export type SpaceRoleListResponse = ListResponse<SpaceRole>;

export interface SpaceRoleCreateParams {
    /**
     * Body param:
     */
    name: string;

    /**
     * Body param:
     */
    policies: Array<number>;

    /**
     * Header param:
     */
    'X-Space': string
}

export interface SpaceRoleUpdateParams {
    /**
     * Body param:
     */
    name: string;

    /**
     * Body param:
     */
    policies: Array<number>;
    /**
     * Header param:
     */
    'X-Space': string
}

export interface SpaceParams {
    'X-Space': string
}
