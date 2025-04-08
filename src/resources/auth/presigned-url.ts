import { APIResource } from '../../resource';
import * as Core from '../../core';

export class PresignedUrl extends APIResource {
    get(options?: Core.RequestOptions): Core.APIPromise<PresignedUrlResponse> {
        return this._client.get('/presigned-url', options);
    }
}

export interface PresignedUrlResponse {
    presigned_url: string;
    file_name: string;
}