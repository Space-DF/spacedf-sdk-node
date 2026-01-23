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
     *
     * @default false
     */
    allowMultiOrgs?: boolean;

    /**
     * By default, use the development environment.
     *
     * @default false
     */
    development?: boolean;
}

/**
 * API Client for interfacing with the SpaceDF SDK API.
 */
export class SpaceDFSDK extends Core.APIClient {
    organization: string | null;
    accessToken: string | null | undefined;

    private _options: ClientOptions;

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
     * @param {boolean} [opts.allowMultiOrgs=false] - Only set this option to `true` if you handle it on the server side or using multiple organizations.
     */
    constructor({
        baseURL = Core.readEnv('SPACEDF_SDK_BASE_URL'),
        organization = Core.readEnv('SPACEDF_ORG_ID') ?? null,
        allowMultiOrgs = false,
        ...opts
    }: ClientOptions = {}) {
        const options: ClientOptions = {
            organization,
            baseURL,
            ...opts,
        };

        super({
            baseURL: options.baseURL!,
            timeout: options.timeout ?? 60 * 1000 /* 1 minute */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            allowMultiOrgs,
            fetch: options.fetch,
        });

        this._options = options;
        this.organization = organization;
    }

    auth: API.Auth = new API.Auth(this);
    spacePolicies: API.SpacePolicies = new API.SpacePolicies(this);
    spaceRoleUsers: API.SpaceRoleUsers = new API.SpaceRoleUsers(this);
    spaceRoles: API.SpaceRoles = new API.SpaceRoles(this);
    spaces: API.Spaces = new API.Spaces(this);
    dashboards: API.Dashboards = new API.Dashboards(this);
    widgets: API.Widgets = new API.Widgets(this);
    deviceStates: API.DeviceStates = new API.DeviceStates(this);
    oauth2: API.OAuth2 = new API.OAuth2(this);
    credentials: API.Credentials = new API.Credentials(this);
    users: API.Users = new API.Users(this);
    presignedUrl: API.PresignedUrl = new API.PresignedUrl(this);
    deviceConnector: API.DeviceConnector = new API.DeviceConnector(this);
    deviceModel: API.DeviceModel = new API.DeviceModel(this);
    device: API.Device = new API.Device(this);
    manufacturers: API.Manufacturers = new API.Manufacturers(this);
    networkServer: API.NetworkServer = new API.NetworkServer(this);
    deviceSpaces: API.DeviceSpaces = new API.DeviceSpaces(this);
    trip: API.Trip = new API.Trip(this);
    organizations: API.Organizations = new API.Organizations(this);
    telemetry: API.Telemetry = new API.Telemetry(this);

    protected override defaultQuery(): Core.DefaultQuery | undefined {
        return this._options.defaultQuery;
    }

    protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
        return {
            ...super.defaultHeaders(opts),
            ...this._options.defaultHeaders,
        };
    }

    protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
        const accessToken = (this.allowMultiOrgs && opts.accessToken) || this.accessToken || '';
        const Authorization = `Bearer ${accessToken}`;

        return accessToken ? { Authorization } : {};
    }

    public setAccessToken(token: string | null): void {
        this.accessToken = token;
    }

    static SpaceDFSDK = this;
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

export default SpaceDFSDK;
