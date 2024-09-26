import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SPACEDF_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the SpaceDF SDK API.
 */
export class SpacedfSDK extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Spacedf SDK API.
   *
   * @param {string} [opts.baseURL=process.env['SPACEDF_SDK_BASE_URL'] ?? http://localhost:8000/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('SPACEDF_SDK_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `https://api.v0.spacedf.net/`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60 * 1000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  auth: API.Auth = new API.Auth(this);
  organizationPolicies: API.OrganizationPolicies = new API.OrganizationPolicies(this);
  organizationRoleUsers: API.OrganizationRoleUsers = new API.OrganizationRoleUsers(this);
  organizationRoles: API.OrganizationRoles = new API.OrganizationRoles(this);
  spacePolicies: API.SpacePolicies = new API.SpacePolicies(this);
  spaceRoleUsers: API.SpaceRoleUsers = new API.SpaceRoleUsers(this);
  spaceRoles: API.SpaceRoles = new API.SpaceRoles(this);
  spaces: API.Spaces = new API.Spaces(this);
  dashboards: API.Dashboards = new API.Dashboards(this);
  deviceStates: API.DeviceStates = new API.DeviceStates(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static SpacedfSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static SpacedfSDKError = Errors.SpacedfSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  SpacedfSDKError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace SpacedfSDK {
  export import RequestOptions = Core.RequestOptions;

  export import Auth = API.Auth;
  export import CustomTokenObtainPair = API.CustomTokenObtainPair;
  export import CustomTokenRefresh = API.CustomTokenRefresh;
  export import OAuthLogin = API.OAuthLogin;
  export import Registration = API.Registration;
  export import AuthLoginParams = API.AuthLoginParams;
  export import AuthOauth2GoogleParams = API.AuthOauth2GoogleParams;
  export import AuthRefreshTokenParams = API.AuthRefreshTokenParams;
  export import AuthRegisterParams = API.AuthRegisterParams;

  export import OrganizationPolicies = API.OrganizationPolicies;
  export import OrganizationPolicy = API.OrganizationPolicy;
  export import OrganizationPolicyListResponse = API.OrganizationPolicyListResponse;
  export import OrganizationPolicyListParams = API.OrganizationPolicyListParams;

  export import OrganizationRoleUsers = API.OrganizationRoleUsers;
  export import OrganizationRoleUser = API.OrganizationRoleUser;
  export import OrganizationRoleUserListResponse = API.OrganizationRoleUserListResponse;
  export import OrganizationRoleUserListParams = API.OrganizationRoleUserListParams;

  export import OrganizationRoles = API.OrganizationRoles;
  export import OrganizationRole = API.OrganizationRole;
  export import OrganizationRoleListResponse = API.OrganizationRoleListResponse;
  export import OrganizationRoleCreateParams = API.OrganizationRoleCreateParams;
  export import OrganizationRoleUpdateParams = API.OrganizationRoleUpdateParams;
  export import OrganizationRoleListParams = API.OrganizationRoleListParams;

  export import SpacePolicies = API.SpacePolicies;
  export import SpacePolicy = API.SpacePolicy;
  export import SpacePolicyListResponse = API.SpacePolicyListResponse;
  export import SpacePolicyListParams = API.SpacePolicyListParams;

  export import SpaceRoleUsers = API.SpaceRoleUsers;
  export import SpaceRoleUser = API.SpaceRoleUser;
  export import SpaceRoleUserListResponse = API.SpaceRoleUserListResponse;
  export import SpaceRoleUserRetrieveParams = API.SpaceRoleUserRetrieveParams;
  export import SpaceRoleUserListParams = API.SpaceRoleUserListParams;
  export import SpaceRoleUserDeleteParams = API.SpaceRoleUserDeleteParams;

  export import SpaceRoles = API.SpaceRoles;
  export import SpaceRole = API.SpaceRole;
  export import SpaceRoleListResponse = API.SpaceRoleListResponse;
  export import SpaceRoleCreateParams = API.SpaceRoleCreateParams;
  export import SpaceRoleRetrieveParams = API.SpaceRoleRetrieveParams;
  export import SpaceRoleUpdateParams = API.SpaceRoleUpdateParams;
  export import SpaceRoleListParams = API.SpaceRoleListParams;
  export import SpaceRoleDeleteParams = API.SpaceRoleDeleteParams;

  export import Spaces = API.Spaces;
  export import Space = API.Space;
  export import SpaceListResponse = API.SpaceListResponse;
  export import SpaceCreateParams = API.SpaceCreateParams;
  export import SpaceUpdateParams = API.SpaceUpdateParams;
  export import SpaceListParams = API.SpaceListParams;
  export import SpaceDeleteParams = API.SpaceDeleteParams;
}

export default SpacedfSDK;
