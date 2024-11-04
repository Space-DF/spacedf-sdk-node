import { APIResource } from "../../resource.js";
import { ListParamsResponse, ListResponse } from "../../types/api.js";
import * as Core from "../../core.js";
export declare class SpacePolicies extends APIResource {
    retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SpacePolicy>;
    list(query?: SpacePolicyListParams, options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
    list(options?: Core.RequestOptions): Core.APIPromise<SpacePolicyListResponse>;
}
export interface SpacePolicy {
    description: string;
    name: string;
    permissions: Array<'UPDATE_SPACE' | 'DELETE_SPACE' | 'READ_SPACE_ROLE' | 'CREATE_SPACE_ROLE' | 'UPDATE_SPACE_ROLE' | 'DELETE_SPACE_ROLE' | 'READ_SPACE_MEMBER' | 'INVITE_SPACE_MEMBER' | 'UPDATE_SPACE_MEMBER_ROLE' | 'REMOVE_SPACE_MEMBER' | 'READ_DASHBOARD' | 'CREATE_DASHBOARD' | 'UPDATE_DASHBOARD' | 'DELETE_DASHBOARD' | 'READ_DEVICE_STATE'>;
    tags: Array<string>;
    id?: number;
    readonly created_at?: string;
    readonly updated_at?: string;
}
export type SpacePolicyListResponse = ListResponse<SpacePolicy>;
export type SpacePolicyListParams = ListParamsResponse;
//# sourceMappingURL=space-policies.d.ts.map