import { createClient } from "../redis/client"
import dotenv from 'dotenv';
import { DriverService } from "services/driverService";
dotenv.config({ path: '/home/ayoubkaz/coding/Dz-delivery/backend_server/.env' });

const DRIVER_STATUS_PREFIX = 'driver_status:';
const TTL = 60;

const client = createClient();

async function setDriverOnline(driverId: string, location: any, speed?: number, updateTimestamp?: number) {
  try {
    client.setex(`${DRIVER_STATUS_PREFIX}${driverId}`, TTL, JSON.stringify({
      status: 'online',
      location,
      speed: speed,
      last_seen: Date.now(),
      update_timestamp: updateTimestamp
    }));
  } catch (err) {
    return new Error(err);
  }
}

async function resetExpire(driverId: string) {
  try {
    client.expire(`${DRIVER_STATUS_PREFIX}${driverId}`, TTL);
  } catch (err) {
    return new Error(err);
  }
}

async function setDriverAvailability(driverId: string, available: boolean) {
  await DriverService.changeDriverStatus(driverId, available)
}

async function updateDriverLocation(driverId: string, location: any) {
  try {
    await DriverService.changeLocation(driverId, location)
  } catch(error) {
    console.error(error.message);
    throw new Error(error.message)
  }
}


export {
  setDriverOnline,
  setDriverAvailability,
  resetExpire,
  updateDriverLocation,
  DRIVER_STATUS_PREFIX
}