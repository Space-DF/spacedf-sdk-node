import type { SpacedfSDK } from './index';

export class APIResource {
    protected _client: SpacedfSDK;

    protected authPath: string;
    protected dashboardPath: string;
    protected devicePath: string;

    constructor(client: SpacedfSDK) {
        this._client = client;

        this.authPath = 'auth/api';
        this.dashboardPath = 'dashboard/api';
        this.devicePath = 'device/api';
    }
}
