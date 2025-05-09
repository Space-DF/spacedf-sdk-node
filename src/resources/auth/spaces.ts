import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class Spaces extends APIResource {
    create(body: SpaceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        return this._client.post(`/spaces`, { body, ...options });
    }

    update(params: SpaceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.put(`/spaces`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    partialUpdate(params: SpaceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.patch(`/spaces`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    list(params?: ListParamsResponse, options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse>;
    list(options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse>;
    list(params: ListParamsResponse | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse> {
        if (isRequestOptions(params)) {
            return this.list({}, params);
        }
        const { ...query } = params;
        return this._client.get(`/spaces`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
    delete(params: SpaceParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { 'X-Space': xspace } = params;
        return this._client.delete(`/spaces`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers, 'X-Space': xspace },
        });
    }

    invitation(params: OAuthInvitationParams, options?: Core.RequestOptions): Core.APIPromise<OAuthInvitationParams> {
        const { 'X-Space': xspace, ...body } = params;
        return this._client.post(`/spaces/invitation`, {
            body,
            ...options,
            headers: { ...options?.headers, 'X-Space': xspace },
        });
    }

    joinSpace(token: string, options?: Core.RequestOptions): Core.APIPromise<JoinSpaceResponse> {
        return this._client.get(`/spaces/join-space/${token}`, options);
    }
}

export interface Space {
    logo: string;

    name: string;

    slug_name: string;

    id?: number;

    created_by?: number | null;

    is_active?: boolean;

    total_devices: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type SpaceListResponse = ListResponse<Space>;

export interface SpaceCreateParams {
    logo: string;

    name: string;

    slug_name: string;
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
     * Header param:
     */
    'X-Space': string;
}

export interface SpaceParams {
    'X-Space': string;
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
     * Body param:
     */
    is_active?: boolean;
}

export interface OAuthInvitationParams {
    receiver_list: Receiver[];
    'X-Space': string;
}

export interface Receiver {
    email: string;
    space_role_id: string;
}

export interface JoinSpaceResponse {
    error?: string;
    result?: string;
}
