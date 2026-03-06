import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

type Condition =
    | { time_between: { start: string; end: string } }
    | { weekday_in: number[] }
    | { distance_from_geofence_km: { lte: number } }
    | { and: Condition[] }
    | { or: Condition[] }
    | { not: Condition[] };

type Coordinate = [number, number];

type PolygonGeometry = {
    type: 'Polygon';
    coordinates: Coordinate[][][];
};

type FeatureProperties = {
    mode: 'rectangle' | 'angled-rectangle' | string;
    color: string;
};

interface Feature {
    type: 'Feature';
    geometry: PolygonGeometry;
    properties: FeatureProperties;
    id: string;
}

export interface Geofence {
    id: string;
    name: string;
    color: string;
    type_zone: 'safe' | 'danger';
    definition: {
        conditions: {
            and: Condition[];
        };
    };
    geometry: Feature[];
}

export type GeofencesListResponse = ListResponse<Geofence>;

export interface GeofencesListParams extends ListParamsResponse {
    name?: string;
}

export class Geofences extends APIResource {
    list(params: GeofencesListParams, options?: Core.RequestOptions): Core.APIPromise<GeofencesListResponse> {
        const { ...query } = params;
        return this._client.get(`/telemetry/v1/geofences`, {
            query,
            ...options,
            headers: { ...options?.headers },
        });
    }
    create(params: Omit<Geofence, 'id'>, options?: Core.RequestOptions): Core.APIPromise<Geofence> {
        const { ...body } = params;
        return this._client.post(`/telemetry/v1/geofences`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Geofence> {
        return this._client.get(`/telemetry/v1/geofences/${id}`, {
            ...options,
            headers: { ...options?.headers },
        });
    }

    update(id: string, params: Omit<Geofence, 'id'>, options?: Core.RequestOptions): Core.APIPromise<Geofence> {
        const { ...body } = params;
        return this._client.put(`/telemetry/v1/geofences/${id}`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/telemetry/v1/geofences/${id}`, {
            ...options,
            headers: { ...options?.headers },
        });
    }
}
