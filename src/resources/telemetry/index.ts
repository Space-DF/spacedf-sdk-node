import { APIResource } from '@space-df/sdk/resource';
import { Entities } from './entities';
import { Alerts } from './alerts';

export class Telemetry extends APIResource {
    entities: Entities = new Entities(this._client);
    alerts: Alerts = new Alerts(this._client);
}

export * from './entities';
