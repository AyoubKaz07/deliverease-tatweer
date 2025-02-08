import {
  setDriverOnline,
  setDriverAvailability,
  updateDriverLocation,
} from "./driverStatus";
import { createClient } from "../redis/client";
import { DriverService } from "services/driverService";
import { notifyCompanyOfDriver } from "./notify";

const DRIVER_STATUS_PREFIX = 'driver_status:';
const TIME_WINDOW = 10 * 60; // 10 minutes
const SPEED_THRESHOLD = 80; // 60 km/h
const LOW_SPEED_THRESHOLD = 5; // 5 km/h
const STOP_DETECTION_WINDOW = 5; // 5 seconds


export abstract class DeviceHandler {
    protected client = createClient();
    abstract handleHeartbeat(data: any): void;

    public detectStuckDriver(updateTimestamp: number) : boolean {
        return (Date.now() - updateTimestamp) / 1000 > TIME_WINDOW;
    }
}

// Smartphone Handler (UDP)
export class SmartphoneHandler extends DeviceHandler {
    async handleHeartbeat(data: any) {    
        let driver_data = await this.client.get(`${DRIVER_STATUS_PREFIX}${data.driverId}`);
        
        if (!driver_data) {
            // First heartbeat, set last_location_update = now
            setDriverOnline(data.driverId, data.location, null, Date.now());
            setDriverAvailability(data.driverId, true); // Update in in-memory db
            updateDriverLocation(data.driverId, data.location); // Update in persistent db
        } else {
            let parsedData = JSON.parse(driver_data);
            let old_location = parsedData.location;
            let updateTimestamp = parsedData.update_timestamp;
            
            if (JSON.stringify(old_location) !== JSON.stringify(data.location)) {
                setDriverOnline(data.driverId, data.location, null, Date.now());
            } else {
                if (this.detectStuckDriver(updateTimestamp)) {
                    const message = {
                        title: "Driver has been stuck",
                        body: "Driver has been stuck at the same location for too long"
                    }
                    notifyCompanyOfDriver(data.driverId, message, data.location);
                }
                setDriverOnline(data.driverId, data.location, null, updateTimestamp);
            }
        }
    }
}

// GPS Handler (WebSockets)
export class GPSHandler extends DeviceHandler {
    async handleHeartbeat(data: any) {
        const driverId = await DriverService.getDriverByDeviceId(data.deviceId);
        const driverKey = `${DRIVER_STATUS_PREFIX}${driverId}`;
        let driverData = await this.client.get(driverKey);
        
        if (!driverData) {
            // First heartbeat, set initial values
            await this.updateDriverData(driverId, data.location, data.speed, Date.now());
        } else {
            let parsedData = JSON.parse(driverData);
            let oldLocation = parsedData.location;
            let updateTimestamp = parsedData.update_timestamp;
            let lastSpeed = parsedData.speed;

            if (JSON.stringify(oldLocation) !== JSON.stringify(data.location)) {
                // Location changed → update driver loc
                await this.updateDriverData(driverId, data.location, data.speed, Date.now());
            } else {
                // If location hasn't changed, check if driver is stuck
                if (this.detectStuckDriver(updateTimestamp)) {
                    const message = {
                        title: "Driver has been stuck",
                        body: "Driver has been stuck at the same location for too long"
                    }
                    notifyCompanyOfDriver(driverId, message, data.location);
                }
                setDriverOnline(driverId, data.location, data.speed, updateTimestamp);
            }

            // Check if sudden stop occurred
            if (lastSpeed) {
                if (this.detectSuddenStop(lastSpeed, data.speed, updateTimestamp)) { 

                    const message = {
                        title: "Possible accident",
                        body: `Sudden stop detected for driver ${driverId}, Possible accident.`
                    }
                    notifyCompanyOfDriver(driverId, message, data.location);   
                }
            }
        }
    }

    // Updates Redis with new location, speed, and timestamp
    private async updateDriverData(driverId: number, location: any, speed: number, timestamp: number) {
        await setDriverOnline(driverId.toString(), location, speed, timestamp);
        await setDriverAvailability(driverId.toString(), true);
        await updateDriverLocation(driverId.toString(), location);
    }

    // Detects if the driver suddenly stopped, which could indicate an accident
    private detectSuddenStop(lastSpeed: number, currentSpeed: number, updateTimestamp: number) : boolean {
        if (lastSpeed > SPEED_THRESHOLD && currentSpeed < LOW_SPEED_THRESHOLD) {
            const timeSinceLastMove = (Date.now() - updateTimestamp) / 1000;
            if (timeSinceLastMove <= STOP_DETECTION_WINDOW) {
                return true;
            }
        }
        return false;
    }
}