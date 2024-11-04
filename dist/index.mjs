var _a;
import * as Errors from "./error.mjs";
import * as Core from "./core.mjs";
import * as API from "./resources/index.mjs";
/**
 * API Client for interfacing with the SpaceDF SDK API.
 */
export class SpaceDFSDK extends Core.APIClient {
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
    constructor({ baseURL = Core.readEnv('SPACEDF_SDK_BASE_URL'), organization = Core.readEnv('SPACEDF_ORG_ID') ?? null, allowMultipleOrganizations = false, ...opts } = {}) {
        if (!allowMultipleOrganizations) {
            if (baseURL && organization)
                throw new Errors.SpaceDFError('`baseURL` will be overridden by `organization`. You should only configure a single property.');
            if (organization) {
                baseURL = `https://${organization}.api.v0.spacedf.net/`;
            }
        }
        const options = {
            organization,
            ...opts,
            baseURL: baseURL || `https://api.v0.spacedf.net/`,
        };
        super({
            baseURL: options.baseURL,
            timeout: options.timeout ?? 60 * 1000 /* 1 minute */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            allowMultipleOrganizations,
            fetch: options.fetch,
        });
        this.auth = new API.Auth(this);
        this.spacePolicies = new API.SpacePolicies(this);
        this.spaceRoleUsers = new API.SpaceRoleUsers(this);
        this.spaceRoles = new API.SpaceRoles(this);
        this.spaces = new API.Spaces(this);
        this.dashboards = new API.Dashboards(this);
        this.deviceStates = new API.DeviceStates(this);
        this.oauth2 = new API.OAuth2(this);
        this._options = options;
        this.organization = organization;
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(opts) {
        return {
            ...super.defaultHeaders(opts),
            ...this._options.defaultHeaders,
        };
    }
}
_a = SpaceDFSDK;
SpaceDFSDK.SpaceDFSDK = _a;
SpaceDFSDK.DEFAULT_TIMEOUT = 60 * 1000; // 1 minute
SpaceDFSDK.SpaceDFError = Errors.SpaceDFError;
SpaceDFSDK.APIError = Errors.APIError;
SpaceDFSDK.APIConnectionError = Errors.APIConnectionError;
SpaceDFSDK.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
SpaceDFSDK.APIUserAbortError = Errors.APIUserAbortError;
SpaceDFSDK.NotFoundError = Errors.NotFoundError;
SpaceDFSDK.ConflictError = Errors.ConflictError;
SpaceDFSDK.RateLimitError = Errors.RateLimitError;
SpaceDFSDK.BadRequestError = Errors.BadRequestError;
SpaceDFSDK.AuthenticationError = Errors.AuthenticationError;
SpaceDFSDK.InternalServerError = Errors.InternalServerError;
SpaceDFSDK.PermissionDeniedError = Errors.PermissionDeniedError;
SpaceDFSDK.UnprocessableEntityError = Errors.UnprocessableEntityError;
export const { SpaceDFError, APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError, } = Errors;
export default SpaceDFSDK;
//# sourceMappingURL=index.mjs.map