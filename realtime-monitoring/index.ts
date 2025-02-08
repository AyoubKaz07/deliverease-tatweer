import { startUdpServer } from "./UDP";
import { startUdpGPSServer } from "./GPS";
import { DRIVER_STATUS_PREFIX, resetExpire, setDriverAvailability } from "./driverStatus";
import { notifyCompanyOfDriver } from "./notify";
import { createSubscriber } from "redis/client";

startUdpServer();
startUdpGPSServer();

function setupRedisSubscription() {
  const subscriber = createSubscriber();
  // Subscribe to the specific channel pattern for this device type
  subscriber.psubscribe('__key*__:*', (err, count) => {
    if (err) {
      console.error("Failed to subscribe:", err.message);
    } else {
      console.log(`Subscribed to ${count} channel patterns`);
    }
  });

  subscriber.on("pmessage", async (pattern: string, channel: string, message: string) => {
      // Ensure we process messages only from the channel pattern assigned to this dispatcher
      if (channel.startsWith("__keyevent@0__:expired") && message.startsWith(DRIVER_STATUS_PREFIX)) {
          const driverId = message.split(':')[1];
          await resetExpire(driverId);
          await setDriverAvailability(driverId, false);
          const notifcationMessage = {
            title: "Driver went Offline",
            body: `Driver ${driverId} just went offline`
          }
          notifyCompanyOfDriver(driverId, notifcationMessage);
      }
  });
}

setupRedisSubscription();