import * as Errors from "./error.js";
import { type Agent } from "./_shims/index.js";
import * as Core from "./core.js";
import * as API from "./resources/index.js";
export interface ClientOptions {
    /**
     * Defaults to process.env['SPACEDF_ORG_ID'].
     */
    organization?: string | null | undefined;
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
    /**
     * By default, only use one instance per organization. If you want to use multiple organizations, use them on the server side.
     *
     * @default false
     */
    allowMultipleOrganizations?: boolean;
}
/**
 * API Client for interfacing with the SpaceDF SDK API.
 */
export declare class SpaceDFSDK extends Core.APIClient {
    organization: string | null;
    private _options;
    /**
     * API Client for interfacing with the Spacedf SDK API.
     *
     * @param {string | null | undefined} [opts.organization=process.env['SPACEDF_ORG_ID'] ?? null]
     * @param {string} [opts.baseURL=process.env['SPACEDF_SDK_BASE_URL'] ?? https://api.v0.spacedf.net/] - Override the default base URL for the API.
     * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.allowMultipleOrganizations=false] - Only set this option to `true` if you handle it on the server side.
     */
    constructor({ baseURL, organization, allowMultipleOrganizations, ...opts }?: ClientOptions);
    auth: API.Auth;
    spacePolicies: API.SpacePolicies;
    spaceRoleUsers: API.SpaceRoleUsers;
    spaceRoles: API.SpaceRoles;
    spaces: API.Spaces;
    dashboards: API.Dashboards;
    deviceStates: API.DeviceStates;
    oauth2: API.OAuth2;
    protected defaultQuery(): Core.DefaultQuery | undefined;
    protected defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers;
    static SpaceDFSDK: typeof SpaceDFSDK;
    static DEFAULT_TIMEOUT: number;
    static SpaceDFError: typeof Errors.SpaceDFError;
    static APIError: typeof Errors.APIError;
    static APIConnectionError: typeof Errors.APIConnectionError;
    static APIConnectionTimeoutError: typeof Errors.APIConnectionTimeoutError;
    static APIUserAbortError: typeof Errors.APIUserAbortError;
    static NotFoundError: typeof Errors.NotFoundError;
    static ConflictError: typeof Errors.ConflictError;
    static RateLimitError: typeof Errors.RateLimitError;
    static BadRequestError: typeof Errors.BadRequestError;
    static AuthenticationError: typeof Errors.AuthenticationError;
    static InternalServerError: typeof Errors.InternalServerError;
    static PermissionDeniedError: typeof Errors.PermissionDeniedError;
    static UnprocessableEntityError: typeof Errors.UnprocessableEntityError;
}
export declare const SpaceDFError: typeof Errors.SpaceDFError, APIError: typeof Errors.APIError, APIConnectionError: typeof Errors.APIConnectionError, APIConnectionTimeoutError: typeof Errors.APIConnectionTimeoutError, APIUserAbortError: typeof Errors.APIUserAbortError, NotFoundError: typeof Errors.NotFoundError, ConflictError: typeof Errors.ConflictError, RateLimitError: typeof Errors.RateLimitError, BadRequestError: typeof Errors.BadRequestError, AuthenticationError: typeof Errors.AuthenticationError, InternalServerError: typeof Errors.InternalServerError, PermissionDeniedError: typeof Errors.PermissionDeniedError, UnprocessableEntityError: typeof Errors.UnprocessableEntityError;
export default SpaceDFSDK;
//# sourceMappingURL=index.d.ts.map