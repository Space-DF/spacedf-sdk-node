import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class OrganizationRoles extends APIResource {
    create(body: OrganizationRoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<OrganizationRole> {
        return this._client.post(`${this.authPath}/organization-roles`, { body, ...options });
    }

    retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<OrganizationRole> {
        return this._client.get(`${this.authPath}/organization-roles/${id}`, options);
    }

    update(id: number, body: OrganizationRoleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<OrganizationRole> {
        return this._client.patch(`${this.authPath}/organization-roles/${id}`, { body, ...options });
    }

    list(query?: OrganizationRoleListParams, options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleListResponse>;
    list(options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleListResponse>;
    list(query: OrganizationRoleListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleListResponse> {
        if (isRequestOptions(query)) {
            return this.list({}, query);
        }
        return this._client.get(`${this.authPath}/organization-roles`, { query, ...options });
    }

    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`${this.authPath}/organization-roles/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }
}

export interface OrganizationRole {
    name: string;

    policies: Array<number>;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type OrganizationRoleListResponse = ListResponse<OrganizationRole>;

export interface OrganizationRoleCreateParams {
    name: string;

    policies: Array<number>;
}

export interface OrganizationRoleUpdateParams {
    name: string;

    policies: Array<number>;
}

export type OrganizationRoleListParams = ListParamsResponse;
