import * as dgram from "dgram";
import { DeviceDispatcher } from "../dispatcher";
import { SmartphoneHandler } from "../handlers";

const UDP_PORT = 41234;

export function startUdpServer() {
  console.log("Starting UDP server...");
  const server = dgram.createSocket("udp4");
  const dispatcher = new DeviceDispatcher(new SmartphoneHandler());

  server.on("message", async (msg) => {
    const data = JSON.parse(msg.toString());
    await dispatcher.dispatch(data);
  });

  server.bind(UDP_PORT, () => {
    console.log(`UDP server listening on port ${UDP_PORT}`);
  });

  process.on("SIGINT", () => {
    server.close(() => {
      console.log("UDP server closed");
      process.exit(0);
    });
  });
}