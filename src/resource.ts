import type { SpaceDFSDK } from './index';

export class APIResource {
    protected _client: SpaceDFSDK;

    constructor(client: SpaceDFSDK) {
        this._client = client;
    }
}
