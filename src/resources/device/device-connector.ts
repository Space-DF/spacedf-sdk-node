import { APIResource } from '../../resource';
import * as Core from '../../core';

export class DeviceConnector extends APIResource {
    create(params: DeviceConnectorParams, options?: Core.RequestOptions): Core.APIPromise<DeviceConnectorParams> {
        const { ...body } = params;
        return this._client.post(`/device-connector/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    testConnectionPreview(params: DeviceConnectorParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { ...body } = params;
        return this._client.post(`/device-connector/test-connection-preview/`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    testConnection(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.get(`/device-connector/${id}/`, {
            ...options,
            headers: { ...options?.headers },
        });
    }
}

export interface DeviceConnectorParams {
    network_server: string;
    name: string;
    connector_type: string;
    status?: string;
    deviceHttpConfig?: DeviceHttpConfig;
    deviceMqttConfig?: DeviceMqttConfig;
}

export interface DeviceHttpConfig {
    api_token: string;
    address_url: string;
}

export interface DeviceMqttConfig {
    mqtt_broker: string;
    username: string;
    password: string;
}
