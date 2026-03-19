import { APIResource } from '@space-df/sdk/resource';
import * as Core from '../../core';
import { ListResponse } from '@space-df/sdk/types/api';

interface TelemetryEventGeofence {
    id: string;
    name: string;
    type_zone: string;
}

interface TelemetryAutomation {
    id: string;
    name: string;
}

interface TelemetryEventLocation {
    latitude: number;
    longitude: number;
}

interface TelemetryEvent {
    id: number;
    event_type: string;
    event_level: string;
    title: string;
    entity_id: string;
    time_fired: string;
    geofence?: TelemetryEventGeofence;
    automation?: TelemetryAutomation;
    location?: TelemetryEventLocation;
}

interface EventsListParams {
    limit?: number;
    offset?: number;
    search?: string;
}

export class Events extends APIResource {
    list(device_id: string, params: EventsListParams, options?: Core.RequestOptions): Core.APIPromise<ListResponse<TelemetryEvent>> {
        const { ...query } = params;
        return this._client.get(`/telemetry/v1/events/device/${device_id}`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
}
