import { APIResource } from '../../resource';
import * as Core from '../../core';

export class JoinSpace extends APIResource {
    get(token: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.get(`/join-space/${token}`, options);
    }
}