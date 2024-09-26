import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types';
import * as Core from '../../core';
import * as OrganizationRoleUsersAPI from './organization-role-users';

export class OrganizationRoleUsers extends APIResource {
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleUser> {
    return this._client.get(`/organization-role-users/${id}`, options);
  }

  list(
    query?: OrganizationRoleUserListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRoleUserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleUserListResponse>;
  list(
    query: OrganizationRoleUserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRoleUserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/organization-role-users', { query, ...options });
  }

  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/organization-role-users/${id}`, {
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

export interface OrganizationRoleUserListResponse extends ListResponse<OrganizationRoleUser> {}

export interface OrganizationRoleUserListParams extends ListParamsResponse {}

export namespace OrganizationRoleUsers {
  export import OrganizationRoleUser = OrganizationRoleUsersAPI.OrganizationRoleUser;
  export import OrganizationRoleUserListResponse = OrganizationRoleUsersAPI.OrganizationRoleUserListResponse;
  export import OrganizationRoleUserListParams = OrganizationRoleUsersAPI.OrganizationRoleUserListParams;
}
