import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class Spaces extends APIResource {
    create(body: SpaceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        return this._client.post(`/spaces`, { body, ...options });
    }

    update(params: SpaceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        const { ...body } = params;
        return this._client.put(`/spaces`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    partialUpdate(params: SpaceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Space> {
        const { ...body } = params;
        return this._client.patch(`/spaces`, {
            body,
            ...options,
            headers: { ...options?.headers },
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

    delete(options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/spaces`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }

    invitation(slug_name: string, body: OAuthInvitation, options?: Core.RequestOptions): Core.APIPromise<OAuthInvitation> {
        return this._client.post(`/spaces/invitation/${slug_name}`, { body, ...options });
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

export interface OAuthInvitation {
    receiver_list: Receiver[];
}

export interface Receiver {
    email: string;
    space_role_id: string;
}

export interface JoinSpaceResponse {
    error?: string;
    result?: string;
}