import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Users extends APIResource {
    getMe(options?: Core.RequestOptions): Core.APIPromise<Profile> {
        return this._client.get(`/users/me`, options);
    }

    updateMe(body: Profile, options?: Core.RequestOptions): Core.APIPromise<Profile> {
        return this._client.put(`/users/me`, { body, ...options });
    }

    deleteMe(options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/users/me`, options);
    }
}

export interface Profile {
    id?: string;

    first_name?: string;

    last_name?: string;

    email?: string;

    location?: string;

    avatar?: string;

    company_name?: string;

    title?: string;

    is_owner?: boolean;
}
