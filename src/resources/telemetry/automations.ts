import { APIResource } from '../../resource';
import * as Core from '../../core';
import { ListParamsResponse, ListResponse } from '../../types/api';

export type AutomationRuleCondition =
    | { weekday_between: { from: number; to: number } }
    | { battery: Record<string, number> }
    | { and: AutomationRuleCondition[] }
    | { or: AutomationRuleCondition[] }
    | { not: AutomationRuleCondition[] };

export interface AutomationEventRule {
    rule_key: string;
    definition: {
        conditions: {
            and: AutomationRuleCondition[];
        };
    };
    is_active: boolean;
    repeat_able: boolean;
    cooldown_sec: number;
    description: string;
}

interface AutomationSummary {
    total: number;
    active: number;
    disabled: number;
}

/** Expanded action as returned on automation resources (e.g. list/retrieve). */
export interface AutomationAction {
    id: string;
    key: string;
    name: string;
    data: Record<string, unknown>;
    created_at: string;
}

export interface Automation {
    id: string;
    name: string;
    device_id: string;
    actions: AutomationAction[];
    event_rule?: AutomationEventRule;
    created_at: string;
    updated_at: string;
}

/** Body for `create` and `update`; actions are referenced by id. */
export interface AutomationParams {
    name: string;
    device_id: string;
    action_ids: string[];
    event_rule: AutomationEventRule;
}

export type AutomationsListResponse = ListResponse<Automation>;

export interface AutomationsListParams extends ListParamsResponse {
    search?: string;
}

export class Automations extends APIResource {
    list(params: AutomationsListParams, options?: Core.RequestOptions): Core.APIPromise<AutomationsListResponse> {
        const { ...query } = params;
        return this._client.get(`/telemetry/v1/automations`, {
            query,
            ...options,
        });
    }

    create(params: AutomationParams, options?: Core.RequestOptions): Core.APIPromise<Automation> {
        const { ...body } = params;
        return this._client.post(`/telemetry/v1/automations`, {
            body,
            ...options,
            headers: { ...options?.headers },
        });
    }

    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Automation> {
        return this._client.get(`/telemetry/v1/automations/${id}`, options);
    }

    update(id: string, params: AutomationParams, options?: Core.RequestOptions): Core.APIPromise<Automation> {
        const { ...body } = params;
        return this._client.put(`/telemetry/v1/automations/${id}`, {
            body,
            ...options,
        });
    }

    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
        return this._client.delete(`/telemetry/v1/automations/${id}`, options);
    }

    summary(options?: Core.RequestOptions): Core.APIPromise<AutomationSummary> {
        return this._client.get(`/telemetry/v1/automations/summary`, options);
    }
}
