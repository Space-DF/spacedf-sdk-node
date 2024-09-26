import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types';
import * as Core from '../../core';
import * as OrganizationRolesAPI from './organization-roles';

export class OrganizationRoles extends APIResource {
  create(
    body: OrganizationRoleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRole> {
    return this._client.post('/organization-roles', { body, ...options });
  }

  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<OrganizationRole> {
    return this._client.get(`/organization-roles/${id}`, options);
  }

  update(
    id: number,
    body: OrganizationRoleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRole> {
    return this._client.patch(`/organization-roles/${id}`, { body, ...options });
  }

  list(
    query?: OrganizationRoleListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRoleListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OrganizationRoleListResponse>;
  list(
    query: OrganizationRoleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRoleListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/organization-roles', { query, ...options });
  }

  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/organization-roles/${id}`, {
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

export interface OrganizationRoleListResponse extends ListResponse<OrganizationRole> {}

export interface OrganizationRoleCreateParams {
  name: string;

  policies: Array<number>;
}

export interface OrganizationRoleUpdateParams {
  name: string;

  policies: Array<number>;
}

export interface OrganizationRoleListParams extends ListParamsResponse {}

export namespace OrganizationRoles {
  export import OrganizationRole = OrganizationRolesAPI.OrganizationRole;
  export import OrganizationRoleListResponse = OrganizationRolesAPI.OrganizationRoleListResponse;
  export import OrganizationRoleCreateParams = OrganizationRolesAPI.OrganizationRoleCreateParams;
  export import OrganizationRoleUpdateParams = OrganizationRolesAPI.OrganizationRoleUpdateParams;
  export import OrganizationRoleListParams = OrganizationRolesAPI.OrganizationRoleListParams;
}
