import * as Core from '../../core';
import { APIResource } from '../../resource';

export class Organizations extends APIResource {
    checkSlugName(slugName: string, options?: Core.RequestOptions): Core.APIPromise<CheckSlugNameResponse> {
        return this._client.get(`/organizations/check/${slugName}`, options);
    }
}

export interface CheckSlugNameResponse {
    result: string;
}
