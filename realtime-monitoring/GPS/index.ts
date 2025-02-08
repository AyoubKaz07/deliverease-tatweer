import * as dgram from "dgram";
import { DeviceDispatcher } from "../dispatcher";
import { GPSHandler } from "../handlers";

const UDP_GPS_PORT = 41235;

export function startUdpGPSServer() {
  console.log("Starting UDP GPS server...");
  const server = dgram.createSocket("udp4");
  const dispatcher = new DeviceDispatcher(new GPSHandler());

  server.on("message", async (msg) => {
    const data = JSON.parse(msg.toString());
    await dispatcher.dispatch(data);
  });

  server.bind(UDP_GPS_PORT, () => {
    console.log(`UDP GPS server listening on port ${UDP_GPS_PORT}`);
  });

  process.on("SIGINT", () => {
    server.close(() => {
      console.log("UDP server closed");
      process.exit(0);
    });
  });
}