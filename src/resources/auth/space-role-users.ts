import { APIResource } from '../../resource';
import { ListParamsResponse, ListResponse } from '../../types';
import * as Core from '../../core';
import * as SpaceRoleUsersAPI from './space-role-users';

export class SpaceRoleUsers extends APIResource {
  retrieve(
    id: number,
    params: SpaceRoleUserRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpaceRoleUser> {
    const { 'X-Space': xSpace } = params;
    return this._client.get(`/space-role-users/${id}`, {
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  list(
    params: SpaceRoleUserListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpaceRoleUserListResponse> {
    const { 'X-Space': xSpace, ...query } = params;
    return this._client.get('/space-role-users', {
      query,
      ...options,
      headers: { 'X-Space': xSpace, ...options?.headers },
    });
  }

  delete(
    id: number,
    params: SpaceRoleUserDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { 'X-Space': xSpace } = params;
    return this._client.delete(`/space-role-users/${id}`, {
      ...options,
      headers: { Accept: '*/*', 'X-Space': xSpace, ...options?.headers },
    });
  }
}

export interface SpaceRoleUser {
  organization_user: number;

  space_role: number;

  id?: number;

  readonly created_at?: string;

  readonly updated_at?: string;
}

export interface SpaceRoleUserListResponse extends ListResponse<SpaceRoleUser> {}

export interface SpaceRoleUserRetrieveParams {
  /**
   * Space slug name
   */
  'X-Space': string;
}

export interface SpaceRoleUserListParams extends ListParamsResponse {
  /**
   * Header param: Space slug name
   */
  'X-Space': string;
}

export interface SpaceRoleUserDeleteParams {
  /**
   * Space slug name
   */
  'X-Space': string;
}

export namespace SpaceRoleUsers {
  export import SpaceRoleUser = SpaceRoleUsersAPI.SpaceRoleUser;
  export import SpaceRoleUserListResponse = SpaceRoleUsersAPI.SpaceRoleUserListResponse;
  export import SpaceRoleUserRetrieveParams = SpaceRoleUsersAPI.SpaceRoleUserRetrieveParams;
  export import SpaceRoleUserListParams = SpaceRoleUsersAPI.SpaceRoleUserListParams;
  export import SpaceRoleUserDeleteParams = SpaceRoleUsersAPI.SpaceRoleUserDeleteParams;
}
