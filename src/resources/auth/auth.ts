import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Auth extends APIResource {
    login(body: AuthLoginParams, options?: Core.RequestOptions): Core.APIPromise<AuthTokenPair> {
        return this._client.post(`/auth/login`, { body, ...options });
    }

    oauth2Google(body: OAuthLogin, options?: Core.RequestOptions): Core.APIPromise<OAuthLogin> {
        return this._client.post(`/auth/oauth2/google`, { body, ...options });
    }

    oauth2SpaceDF(body: OAuthSpaceDF, options?: Core.RequestOptions): Core.APIPromise<OAuthSpaceDF> {
        return this._client.post(`/auth/oauth2/spacedf-console`, { body, ...options });
    }

    refreshToken(body: AuthRefreshTokenParams, options?: Core.RequestOptions): Core.APIPromise<CustomTokenRefresh> {
        return this._client.post(`/auth/refresh-token`, { body, ...options });
    }

    register(body: AuthRegisterParams, options?: Core.RequestOptions): Core.APIPromise<Registration> {
        return this._client.post(`/auth/register`, { body, ...options });
    }

    switchSpaces(body: AuthRefreshTokenParams, options?: Core.RequestOptions): Core.APIPromise<CustomTokenRefresh> {
        return this._client.post(`/auth/spaces/switch`, { body, ...options });
    }
}

export interface AuthTokenPair {
    refresh: string;

    access: string;

    default_space: string;
}

export interface CustomTokenRefresh {
    refresh: string;

    access?: string;

    space?: string;
}

export interface OAuthLogin {
    authorization_code: string;

    code_verifier: string;
}

export interface OAuthSpaceDF {
    code_verifier: string;

    code: string;

    client_id: string;
}

export interface Registration {
    id?: number;

    first_name: string;

    last_name: string;

    email: string;

    default_space?: string;
}

export interface AuthLoginParams {
    email: string;

    password: string;
}

export interface AuthRefreshTokenParams {
    refresh: string;

    space: string;
}

export interface AuthRegisterParams {
    email: string;

    password: string;

    first_name: string;

    last_name: string;
}
