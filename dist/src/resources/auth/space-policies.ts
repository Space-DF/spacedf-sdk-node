import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class SpacePolicies extends APIResource {
    retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SpacePolicy> {
        return this._client.get(`${this.authPath}/space-policies/${id}`, options);
    }

    list(query?: SpacePolicyListParams, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
    list(options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
    list(query: SpacePolicyListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse> {
        if (isRequestOptions(query)) {
            return this.list({}, query);
        }
        return this._client.get(`${this.authPath}/space-policies`, { query, ...options });
    }
}

export interface SpacePolicy {
    description: string;

    name: string;

    permissions: Array<
        | 'UPDATE_SPACE'
        | 'DELETE_SPACE'
        | 'READ_SPACE_ROLE'
        | 'CREATE_SPACE_ROLE'
        | 'UPDATE_SPACE_ROLE'
        | 'DELETE_SPACE_ROLE'
        | 'READ_SPACE_MEMBER'
        | 'INVITE_SPACE_MEMBER'
        | 'UPDATE_SPACE_MEMBER_ROLE'
        | 'REMOVE_SPACE_MEMBER'
        | 'READ_DASHBOARD'
        | 'CREATE_DASHBOARD'
        | 'UPDATE_DASHBOARD'
        | 'DELETE_DASHBOARD'
        | 'READ_DEVICE_STATE'
    >;

    tags: Array<string>;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type SpacePolicyListResponse = ListResponse<SpacePolicy>;

export type SpacePolicyListParams = ListParamsResponse;
