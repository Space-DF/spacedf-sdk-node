import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuthAPI from './auth';

export class Auth extends APIResource {
  login(body: AuthLoginParams, options?: Core.RequestOptions): Core.APIPromise<CustomTokenObtainPair> {
    return this._client.post('/auth/login', { body, ...options });
  }

  oauth2Google(body: AuthOauth2GoogleParams, options?: Core.RequestOptions): Core.APIPromise<OAuthLogin> {
    return this._client.post('/auth/oauth2/google', { body, ...options });
  }

  refreshToken(
    body: AuthRefreshTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomTokenRefresh> {
    return this._client.post('/auth/refresh-token', { body, ...options });
  }

  register(body: AuthRegisterParams, options?: Core.RequestOptions): Core.APIPromise<Registration> {
    return this._client.post('/auth/register', { body, ...options });
  }
}

export interface CustomTokenObtainPair {
  email: string;

  password: string;
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

export namespace Auth {
  export import CustomTokenObtainPair = AuthAPI.CustomTokenObtainPair;
  export import CustomTokenRefresh = AuthAPI.CustomTokenRefresh;
  export import OAuthLogin = AuthAPI.OAuthLogin;
  export import Registration = AuthAPI.Registration;
  export import AuthLoginParams = AuthAPI.AuthLoginParams;
  export import AuthOauth2GoogleParams = AuthAPI.AuthOauth2GoogleParams;
  export import AuthRefreshTokenParams = AuthAPI.AuthRefreshTokenParams;
  export import AuthRegisterParams = AuthAPI.AuthRegisterParams;
}
