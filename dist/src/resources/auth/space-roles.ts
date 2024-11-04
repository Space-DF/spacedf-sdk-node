import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class SpaceRoles extends APIResource {
    create(params: SpaceRoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole> {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.post(`${this.authPath}/space-roles`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    retrieve(id: number, params: SpaceRoleRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole> {
        const { 'X-Space': xSpace } = params;
        return this._client.get(`${this.authPath}/space-roles/${id}`, {
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    update(id: number, params: SpaceRoleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole> {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.authPath}/space-roles/${id}`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    list(params: SpaceRoleListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleListResponse> {
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.authPath}/space-roles`, {
            query,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    delete(id: number, params: SpaceRoleDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.authPath}/space-roles/${id}`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
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
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface SpaceRoleRetrieveParams {
    /**
     * Space slug name
     */
    'X-Space': string;
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
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface SpaceRoleListParams extends ListParamsResponse {
    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}

export interface SpaceRoleDeleteParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
