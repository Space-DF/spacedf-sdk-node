import type { SpaceDFSDK } from './index';

export class APIResource {
    protected _client: SpaceDFSDK;

    protected authPath: string;
    protected dashboardPath: string;
    protected devicePath: string;
    protected consolePath: string;

    constructor(client: SpaceDFSDK) {
        this._client = client;

        this.authPath = 'auth/api';
        this.dashboardPath = 'dashboard/api';
        this.devicePath = 'device/api';
        this.consolePath = 'console/api';
    }
}
