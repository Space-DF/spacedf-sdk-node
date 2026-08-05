import * as Core from '../../core';
import { APIResource } from '../../resource';

export class Organizations extends APIResource {
    checkSlugName(slugName: string, options?: Core.RequestOptions): Core.APIPromise<CheckSlugNameResponse> {
        return this._client.get(`/organizations/check/${slugName}`, options);
    }

    getMonitoringSetting(options?: Core.RequestOptions): Core.APIPromise<MonitoringSetting> {
        return this._client.get('/organizations/monitoring', options);
    }
}

export interface CheckSlugNameResponse {
    result: string;
}

export type MonitoringType = 'water_level';

export interface MonitoringThresholds {
    safe: number;
    caution: number;
    warning: number;
}

export interface MonitoringColors {
    safe: string;
    caution: string;
    warning: string;
    danger: string;
}

export interface MonitoringDisplaySettings {
    coverage: boolean;
    device_icons: boolean;
    water_column: boolean;
}

export interface MonitoringSetting {
    id: string;
    cell_size: number;
    type: MonitoringType;
    thresholds: MonitoringThresholds;
    colors: MonitoringColors;
    display_settings: MonitoringDisplaySettings;
    created_at: string;
    updated_at: string;
}

export type UpdateMonitoringPayload = Pick<MonitoringSetting, 'cell_size' | 'type' | 'thresholds' | 'colors' | 'display_settings'>;
