/*
    dispatcher.ts
*/

import { DeviceHandler } from "./handlers";

export class DeviceDispatcher {
  private handler: DeviceHandler;

  constructor(handler: DeviceHandler) {
    this.handler = handler;
  }

  async dispatch(data: any) {
    this.handler.handleHeartbeat(data);
  }
}
