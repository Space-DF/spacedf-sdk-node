import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export class Entities extends APIResource {
    list(params: EntitiesListParams, options?: Core.RequestOptions): Core.APIPromise<EntitiesListResponse> {
        const { ...query } = params;
        return this._client.get(`/telemetry/v1/entities`, {
            query,
            ...options,
        });
    }

    bulkUpdate(params: BulkUpdateEntitiesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
        const { ...body } = params;
        return this._client.put(`/telemetry/v1/entities/bulk-update`, {
            body,
            ...options,
        });
    }
}

export interface Entity {
    category: string;
    created_at: string;
    device_id: string;
    device_name: string;
    display_type: string[];
    entity_type: {
        id: string;
        image_url: string;
        name: string;
        unique_key: string;
    };
    id: string;
    image_url: string;
    is_enabled: boolean;
    name: string;
    time_end: string;
    time_start: string;
    unique_key: string;
    unit_of_measurement: string;
    updated_at: string;
}

export type EntitiesListResponse = ListResponse<Entity>;

export interface EntitiesListParams extends ListParamsResponse {
    /**
     * Query param: Display type filter (e.g., "chart").
     */
    display_type?: string;

    /**
     * Query param: A search term.
     */
    search?: string;
}

export interface BulkUpdateEntitiesParams {
    /**
     * Body param: Array of visible entity IDs to update.
     */
    visible_entity_ids: string[];

    /**
     * Body param: Array of hidden entity IDs to update.
     */
    hidden_entity_ids: string[];
}
