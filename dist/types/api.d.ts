export interface ListResponse<T> {
    count: number;
    results: Array<T>;
    next?: string | null;
    previous?: string | null;
}
export interface ListParamsResponse {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * A search term.
     */
    search?: string;
}
//# sourceMappingURL=api.d.ts.map