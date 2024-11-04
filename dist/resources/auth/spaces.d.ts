import { APIResource } from "../../resource.js";
import { ListParamsResponse, ListResponse } from "../../types/api.js";
import * as Core from "../../core.js";
export declare class Spaces extends APIResource {
    create(body: SpaceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Space>;
    update(params: SpaceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Space>;
    list(params?: SpaceListParams, options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse>;
    list(options?: Core.RequestOptions): Core.APIPromise<SpaceListResponse>;
    delete(params: SpaceDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
}
export interface Space {
    logo: string;
    name: string;
    slug_name: string;
    id?: number;
    created_by?: number | null;
    is_active?: boolean;
    readonly created_at?: string;
    readonly updated_at?: string;
}
export type SpaceListResponse = ListResponse<Space>;
export interface SpaceCreateParams {
    logo: string;
    name: string;
    slug_name: string;
    is_active?: boolean;
}
export interface SpaceUpdateParams {
    /**
     * Body param:
     */
    logo: string;
    /**
     * Body param:
     */
    name: string;
    /**
     * Body param:
     */
    slug_name: string;
    /**
     * Header param: Space slug name
     */
    'X-Space': string;
    /**
     * Body param:
     */
    is_active?: boolean;
}
export interface SpaceListParams extends ListParamsResponse {
    /**
     * Header param: Space slug name
     */
    'X-Space'?: string;
}
export interface SpaceDeleteParams {
    /**
     * Space slug name
     */
    'X-Space': string;
}
//# sourceMappingURL=spaces.d.ts.map