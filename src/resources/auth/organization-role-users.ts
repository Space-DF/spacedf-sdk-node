import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';
import * as Core from '../../core';

export class OrganizationRoleUsers extends APIResource {
    retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleUser> {
        return this._client.get(`${this.authPath}/organization-role-users/${id}`, options);
    }

    list(query?: OrganizationRoleUserListParams, options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleUserListResponse>;
    list(options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleUserListResponse>;
    list(query: OrganizationRoleUserListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleUserListResponse> {
        if (isRequestOptions(query)) {
            return this.list({}, query);
        }
        return this._client.get(`${this.authPath}/organization-role-users`, { query, ...options });
    }

    delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`${this.authPath}/organization-role-users/${id}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }
}

export interface OrganizationRoleUser {
    organization_role: number;

    organization_user: number;

    id?: number;

    readonly created_at?: string;

    readonly updated_at?: string;
}

export type OrganizationRoleUserListResponse = ListResponse<OrganizationRoleUser>;

export type OrganizationRoleUserListParams = ListParamsResponse;
