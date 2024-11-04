import { APIResource } from "../../resource.js";
import * as Core from "../../core.js";
export declare class Auth extends APIResource {
    login(body: AuthLoginParams, options?: Core.RequestOptions): Core.APIPromise<TokenPair>;
    oauth2Google(body: AuthOauth2GoogleParams, options?: Core.RequestOptions): Core.APIPromise<OAuthLogin>;
    refreshToken(body: AuthRefreshTokenParams, options?: Core.RequestOptions): Core.APIPromise<CustomTokenRefresh>;
    register(body: AuthRegisterParams, options?: Core.RequestOptions): Core.APIPromise<Registration>;
}
export interface TokenPair {
    refresh: string;
    access: string;
}
export interface CustomTokenRefresh {
    refresh: string;
    access?: string;
}
export interface OAuthLogin {
    authorization_code: string;
    code_verifier: string;
}
export interface Registration {
    email: string;
    password: string;
    id?: number;
    first_name?: string;
    last_name?: string;
}
export interface AuthLoginParams {
    email: string;
    password: string;
}
export interface AuthOauth2GoogleParams {
    authorization_code: string;
    code_verifier: string;
}
export interface AuthRefreshTokenParams {
    refresh: string;
}
export interface AuthRegisterParams {
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
}
//# sourceMappingURL=auth.d.ts.map