import { APIResource } from '../../resource';
import * as Core from '../../core';

export interface NotificationsSubscribeParams {
    auth: string;
    endpoint: string;
    p256dh: string;
}

export type NotificationsSubscribeResponse = unknown;

export class Notifications extends APIResource {
    subscribe(params: NotificationsSubscribeParams, options?: Core.RequestOptions): Core.APIPromise<NotificationsSubscribeResponse> {
        const { ...body } = params;
        return this._client.post(`/telemetry/v1/notifications/subscribe`, {
            body,
            ...options,
        });
    }
}
