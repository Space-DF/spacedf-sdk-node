import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Widgets extends APIResource {
    updateWidgets(dashboardId: string, params: WidgetsUpdateParams[], options?: Core.RequestOptions): Core.APIPromise<WidgetsUpdateParams[]> {
        return this._client.put(`/dashboards/${dashboardId}/widgets/bulk-update`, {
            body: params,
            ...options,
            headers: { ...options?.headers },
        });
    }
}

interface WidgetsUpdateParams {
    id: string;
    configuration: Record<string, unknown>;
}
