import { APIResource } from '../../resource';
import * as Core from '../../core';

export class CustomDomain extends APIResource {
    resolve(host: string, options?: Core.RequestOptions): Core.APIPromise<ResolveResponse> {
        return this._client.get(`/custom-domains/resolve?host=${host}`, {
            ...options,
        });
    }
}

interface ResolveResponse {
    org_slug: string;
    org_name: string;
}
