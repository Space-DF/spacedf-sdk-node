import { APIResource } from "../../resource.js";
import { ListParamsResponse, ListResponse } from "../../types/api.js";
import * as Core from "../../core.js";
export declare class SpaceRoleUsers extends APIResource {
    retrieve(id: number, params: SpaceRoleUserRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUser>;
    list(params: SpaceRoleUserListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleUserListResponse>;
    delete(id: number, params: SpaceRoleUserDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
}
export interface SpaceRoleUser {
    organization_user: number;
    space_role: number;
    id?: number;
    readonly created_at?: string;
    readonly updated_at?: string;
}
export type SpaceRoleUserListResponse = ListResponse<SpaceRoleUser>;
export interface SpaceRoleUserRetrieveParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
export interface SpaceRoleUserListParams extends ListParamsResponse {
    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}
export interface SpaceRoleUserDeleteParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
//# sourceMappingURL=space-role-users.d.ts.map