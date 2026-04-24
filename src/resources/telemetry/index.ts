import { APIResource } from '@space-df/sdk/resource';
import { Entities } from './entities';
import { Alerts } from './alerts';
import { Geofences } from './geofences';
import { Automations } from './automations';
import { Events } from './events';
import { Actions } from './actions';
import { Notifications } from './notifications';

export class Telemetry extends APIResource {
    entities: Entities = new Entities(this._client);
    alerts: Alerts = new Alerts(this._client);
    geofences: Geofences = new Geofences(this._client);
    automations: Automations = new Automations(this._client);
    events: Events = new Events(this._client);
    actions: Actions = new Actions(this._client);
    notifications: Notifications = new Notifications(this._client);
}
