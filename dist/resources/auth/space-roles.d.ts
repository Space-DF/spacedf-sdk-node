import { APIResource } from "../../resource.js";
import { ListParamsResponse, ListResponse } from "../../types/api.js";
import * as Core from "../../core.js";
export declare class SpaceRoles extends APIResource {
    create(params: SpaceRoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole>;
    retrieve(id: number, params: SpaceRoleRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole>;
    update(id: number, params: SpaceRoleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRole>;
    list(params: SpaceRoleListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceRoleListResponse>;
    delete(id: number, params: SpaceRoleDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
}
export interface SpaceRole {
    name: string;
    policies: Array<number>;
    id?: number;
    readonly created_at?: string;
    space?: number;
    updated_at?: string;
}
export type SpaceRoleListResponse = ListResponse<SpaceRole>;
export interface SpaceRoleCreateParams {
    /**
     * Body param:
     */
    name: string;
    /**
     * Body param:
     */
    policies: Array<number>;
    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}
export interface SpaceRoleRetrieveParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
export interface SpaceRoleUpdateParams {
    /**
     * Body param:
     */
    name: string;
    /**
     * Body param:
     */
    policies: Array<number>;
    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}
export interface SpaceRoleListParams extends ListParamsResponse {
    /**
     * Header param: Space slug name
     */
    'X-Space': string;
}
export interface SpaceRoleDeleteParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
//# sourceMappingURL=space-roles.d.ts.map