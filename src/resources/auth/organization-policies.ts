import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ListParamsResponse, ListResponse } from '../../types';
import * as Core from '../../core';
import * as OrganizationPoliciesAPI from './organization-policies';

export class OrganizationPolicies extends APIResource {
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<OrganizationPolicy> {
    return this._client.get(`/organization-policies/${id}`, options);
  }

  list(
    query?: OrganizationPolicyListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationPolicyListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OrganizationPolicyListResponse>;
  list(
    query: OrganizationPolicyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationPolicyListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/organization-policies', { query, ...options });
  }
}

export interface OrganizationPolicy {
  description: string;

  name: string;

  permissions: Array<
    | 'UPDATE_ORGANIZATION'
    | 'DELETE_ORGANIZATION'
    | 'READ_ORGANIZATION_ROLE'
    | 'CREATE_ORGANIZATION_ROLE'
    | 'UPDATE_ORGANIZATION_ROLE'
    | 'DELETE_ORGANIZATION_ROLE'
    | 'READ_ORGANIZATION_MEMBER'
    | 'INVITE_ORGANIZATION_MEMBER'
    | 'UPDATE_ORGANIZATION_MEMBER_ROLE'
    | 'REMOVE_ORGANIZATION_MEMBER'
  >;

  tags: Array<string>;

  id?: number;

  readonly created_at?: string;

  readonly updated_at?: string;
}

export interface OrganizationPolicyListResponse extends ListResponse<OrganizationPolicy> {}

export interface OrganizationPolicyListParams extends ListParamsResponse {}

export namespace OrganizationPolicies {
  export import OrganizationPolicy = OrganizationPoliciesAPI.OrganizationPolicy;
  export import OrganizationPolicyListResponse = OrganizationPoliciesAPI.OrganizationPolicyListResponse;
  export import OrganizationPolicyListParams = OrganizationPoliciesAPI.OrganizationPolicyListParams;
}
