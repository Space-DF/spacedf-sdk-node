import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class Spaces extends APIResource {
    create(body: SpaceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        return this._client.post(`${this.authPath}/spaces`, { body, ...options });
    }

    update(params: SpaceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        const { 'X-Space': xSpace, ...body } = params;
        return this._client.patch(`${this.authPath}/spaces`, {
            body,
            ...options,
            headers: { 'X-Space': xSpace, ...options?.headers },
        });
    }

    list(params?: SpaceListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse>;
    list(options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse>;
    list(params: SpaceListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse> {
        if (isRequestOptions(params)) {
            return this.list({}, params);
        }
        const { 'X-Space': xSpace, ...query } = params;
        return this._client.get(`${this.authPath}/spaces`, {
            query,
            ...options,
            headers: { ...(xSpace != null ? { 'X-Space': xSpace } : undefined), ...options?.headers },
        });
    }

    delete(params: SpaceDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xSpace } = params;
        return this._client.delete(`${this.authPath}/spaces`, {
            ...options,
            headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
        });
    }
}

export interface Space {
    logo: string;

    name: string;

    slug_name: string;

    id?: number;

    created_by?: number | null;

    is_active?: boolean;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type SpaceListResponse = ListResponse<Space>;

export interface SpaceCreateParams {
    logo: string;

    name: string;

    slug_name: string;

    is_active?: boolean;
}

export interface SpaceUpdateParams {
    /**
     * Body param:
     */
    logo: string;

    /**
     * Body param:
     */
    name: string;

    /**
     * Body param:
     */
    slug_name: string;

    /**
     * Header param: Space slug name
     */
    'X-Space': string;

    /**
     * Body param:
     */
    is_active?: boolean;
}

export interface SpaceListParams extends ListParamsResponse {
    /**
     * Header param: Space slug name
     */
    'X-Space'?: string;
}

export interface SpaceDeleteParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
