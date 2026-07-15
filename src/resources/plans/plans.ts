import * as Core from '../../core';
import { APIResource } from '../../resource';

export class Plans extends APIResource {
    retrieve(plan: PlanCode, options?: Core.RequestOptions): Core.APIPromise<Plan> {
        Core.ensurePresent(plan);
        return this._client.get(`/plans/${plan}`, options);
    }
}

export type PlanCode = 'free' | 'pro';

export type BillingCycle = 'monthly' | 'yearly';

export type FeatureValueType = 'limit' | 'boolean' | 'quota';

export interface Plan {
    id: string;
    name: string;
    code: PlanCode;
    description: string;
    plan_items: PlanItem[];
    is_current_plan: boolean;
    created_at: string;
    updated_at: string;
    features: PlanFeature[];
    support: PlanFeature[];
}

export interface PlanItem {
    id: string;
    price: string;
    icon: string;
    currency: string;
    discount: number;
    billing_cycle: BillingCycle;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface PlanFeature {
    id: string;
    feature: Feature;
    enabled: boolean;
    limit_value: number | null;
    metadata: Record<string, unknown>;
}

export interface Feature {
    id: string;
    code: string;
    name: string;
    description: string;
    value_type: FeatureValueType;
}
