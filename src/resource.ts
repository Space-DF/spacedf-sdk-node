import type { SpacedfSDK } from './index';

export class APIResource {
  protected _client: SpacedfSDK;

  constructor(client: SpacedfSDK) {
    this._client = client;
  }
}
