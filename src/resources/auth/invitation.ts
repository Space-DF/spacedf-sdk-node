import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Invitation extends APIResource {
    create(id: number, body: OAuthInvitation, options?: Core.RequestOptions): Core.APIPromise<OAuthInvitation> {
        return this._client.post(`/invitation/${id}`, { body, ...options });
    }
}

export interface OAuthInvitation {
    receiver_list: Receiver[];
}

export interface Receiver {
    email: string;
    space_role_id: string;
}