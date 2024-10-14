import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

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
     */
    allowMultipleOrganizations?: boolean;
}

/**
 * API Client for interfacing with the SpaceDF SDK API.
 */
export class SpacedfSDK extends Core.APIClient {
    organization: string | null;

    private _options: ClientOptions;

    /**
     * API Client for interfacing with the Spacedf SDK API.
     *
     * @param {string | undefined} [opts.apiKey=process.env['SPACEDF_API_KEY'] ?? undefined]
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
    constructor({
        baseURL = Core.readEnv('SPACEDF_SDK_BASE_URL'),
        organization = Core.readEnv('SPACEDF_ORG_ID') ?? null,
        allowMultipleOrganizations = false,
        ...opts
    }: ClientOptions = {}) {
        if (!allowMultipleOrganizations) {
            if (baseURL && organization) throw new Errors.SpaceDFError('Only 1 out of 2');

            if (organization) {
                baseURL = `https://${organization}.api.v0.spacedf.net/`;
            }
        }

        const options: ClientOptions = {
            organization,
            ...opts,
            baseURL: baseURL || `https://api.v0.spacedf.net/`,
        };

        super({
            baseURL: options.baseURL!,
            timeout: options.timeout ?? 60 * 1000 /* 1 minute */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            allowMultipleOrganizations,
            fetch: options.fetch,
        });

        this._options = options;
        this.organization = organization;
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
    static DEFAULT_TIMEOUT = 60 * 1000; // 1 minute

    static SpaceDFError = Errors.SpaceDFError;
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
}

export const {
    SpaceDFError,
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

export default SpacedfSDK;
