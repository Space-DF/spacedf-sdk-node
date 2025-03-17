import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Credentials extends APIResource {
    retrieve(options?: Core.RequestOptions): Core.APIPromise<OAuthCredentials> {
        return this._client.get(`/credentials`, options);
    }
}

export interface OAuthCredentials {
    client_id: string;
}
