const ColdChainTracker = artifacts.require("ColdChainTracker");
const { expect } = require("chai");

contract("ColdChainTracker", (accounts) => {
    let coldChainTracker;
    const admin = accounts[0];
    const user = accounts[1];

    // Deploy a fresh instance before each test suite
    beforeEach(async () => {
        coldChainTracker = await ColdChainTracker.new({ from: admin });
    });

    describe("Admin Functionality", () => {
        it("Should set the deployer as the admin", async () => {
            const currentAdmin = await coldChainTracker.admin();
            expect(currentAdmin).to.equal(admin);
        });

        it("Should allow admin to transfer admin rights", async () => {
            // Transfer admin rights to `user`
            await coldChainTracker.transferAdmin(user, { from: admin });
            let newAdmin = await coldChainTracker.admin();
            expect(newAdmin).to.equal(user);

            // Transfer admin rights back to the original admin
            await coldChainTracker.transferAdmin(admin, { from: user });
            newAdmin = await coldChainTracker.admin();
            expect(newAdmin).to.equal(admin);
        });

        it("Should prevent non-admin from transferring admin rights", async () => {
            try {
                await coldChainTracker.transferAdmin(user, { from: user });
                assert.fail("Expected error not received");
            } catch (error) {
                expect(error.message).to.include("Only admin can call this function");
            }
        });
    });

    describe("Shipment Management", () => {
        const shipmentId = 1;
        const minThreshold = -20;
        const maxThreshold = 10;

        it("Should allow admin to create a shipment", async () => {
            const tx = await coldChainTracker.createShipment(shipmentId, minThreshold, maxThreshold, { from: admin });

            // Verify the ShipmentCreated event was emitted correctly
            const event = tx.logs.find((log) => log.event === "ShipmentCreated");
            expect(event).to.exist;
            expect(event.args.shipmentId.toString()).to.equal(shipmentId.toString());
            expect(event.args.minThreshold.toString()).to.equal(minThreshold.toString());
            expect(event.args.maxThreshold.toString()).to.equal(maxThreshold.toString());

            // Verify the shipment data on-chain
            const shipment = await coldChainTracker.shipments(shipmentId);
            expect(shipment.exists).to.be.true;
            expect(shipment.minThreshold.toString()).to.equal(minThreshold.toString());
            expect(shipment.maxThreshold.toString()).to.equal(maxThreshold.toString());
        });

        it("Should prevent non-admin from creating a shipment", async () => {
            try {
                await coldChainTracker.createShipment(2, minThreshold, maxThreshold, { from: user });
                assert.fail("Expected error not received");
            } catch (error) {
                expect(error.message).to.include("Only admin can call this function");
            }
        });

        it("Should prevent creating a shipment with invalid thresholds", async () => {
            try {
                // Invalid thresholds: maxThreshold is passed as the minimum and vice versa.
                await coldChainTracker.createShipment(3, maxThreshold, minThreshold, { from: admin });
                assert.fail("Expected error not received");
            } catch (error) {
                expect(error.message).to.include("Invalid thresholds");
            }
        });

        it("Should prevent creating a shipment with an existing ID", async () => {
            await coldChainTracker.createShipment(shipmentId, minThreshold, maxThreshold, { from: admin });
            try {
                await coldChainTracker.createShipment(shipmentId, minThreshold, maxThreshold, { from: admin });
                assert.fail("Expected error not received");
            } catch (error) {
                expect(error.message).to.include("Shipment already exists");
            }
        });
    });

    describe("Temperature Readings", () => {
        const shipmentId = 1;
        const compliantTemperature = -10;
        const nonCompliantTemperatureLow = -25;
        const nonCompliantTemperatureHigh = 15;

        // Create a shipment before testing temperature readings
        beforeEach(async () => {
            await coldChainTracker.createShipment(shipmentId, -20, 10, { from: admin });
        });

        it("Should allow recording a compliant temperature reading", async () => {
            const tx = await coldChainTracker.recordReading(shipmentId, compliantTemperature, { from: user });

            // Check the NewReading event
            const newReadingEvent = tx.logs.find((log) => log.event === "NewReading");
            expect(newReadingEvent).to.exist;
            expect(newReadingEvent.args.shipmentId.toString()).to.equal(shipmentId.toString());
            expect(newReadingEvent.args.temperature.toString()).to.equal(compliantTemperature.toString());
            expect(newReadingEvent.args.compliant).to.be.true;

            // Verify that the latest reading matches the recorded temperature
            const latestReading = await coldChainTracker.getLatestReading(shipmentId);
            expect(latestReading.temperature.toString()).to.equal(compliantTemperature.toString());
        });

        it("Should allow recording a non-compliant temperature reading (below minimum)", async () => {
            const tx = await coldChainTracker.recordReading(shipmentId, nonCompliantTemperatureLow, { from: user });

            // Check the NewReading event
            const newReadingEvent = tx.logs.find((log) => log.event === "NewReading");
            expect(newReadingEvent).to.exist;
            expect(newReadingEvent.args.shipmentId.toString()).to.equal(shipmentId.toString());
            expect(newReadingEvent.args.temperature.toString()).to.equal(nonCompliantTemperatureLow.toString());
            expect(newReadingEvent.args.compliant).to.be.false;

            // Check the Alert event
            const alertEvent = tx.logs.find((log) => log.event === "Alert");
            expect(alertEvent).to.exist;
            expect(alertEvent.args.shipmentId.toString()).to.equal(shipmentId.toString());
            expect(alertEvent.args.temperature.toString()).to.equal(nonCompliantTemperatureLow.toString());
            expect(alertEvent.args.message).to.equal("Temperature below minimum");

            // Verify that the latest reading is the one just recorded
            const latestReading = await coldChainTracker.getLatestReading(shipmentId);
            expect(latestReading.temperature.toString()).to.equal(nonCompliantTemperatureLow.toString());
        });

        it("Should allow recording a non-compliant temperature reading (above maximum)", async () => {
            const tx = await coldChainTracker.recordReading(shipmentId, nonCompliantTemperatureHigh, { from: user });

            // Check the NewReading event
            const newReadingEvent = tx.logs.find((log) => log.event === "NewReading");
            expect(newReadingEvent).to.exist;
            expect(newReadingEvent.args.shipmentId.toString()).to.equal(shipmentId.toString());
            expect(newReadingEvent.args.temperature.toString()).to.equal(nonCompliantTemperatureHigh.toString());
            expect(newReadingEvent.args.compliant).to.be.false;

            // Check the Alert event
            const alertEvent = tx.logs.find((log) => log.event === "Alert");
            expect(alertEvent).to.exist;
            expect(alertEvent.args.shipmentId.toString()).to.equal(shipmentId.toString());
            expect(alertEvent.args.temperature.toString()).to.equal(nonCompliantTemperatureHigh.toString());
            expect(alertEvent.args.message).to.equal("Temperature above maximum");

            // Verify that the latest reading is the one just recorded
            const latestReading = await coldChainTracker.getLatestReading(shipmentId);
            expect(latestReading.temperature.toString()).to.equal(nonCompliantTemperatureHigh.toString());
        });

        it("Should prevent recording a reading for a non-existent shipment", async () => {
            try {
                await coldChainTracker.recordReading(999, compliantTemperature, { from: user });
                assert.fail("Expected error not received");
            } catch (error) {
                expect(error.message).to.include("Shipment does not exist");
            }
        });

        it("Should fetch the latest reading for a shipment", async () => {
            await coldChainTracker.recordReading(shipmentId, nonCompliantTemperatureHigh, { from: user });
            const latestReading = await coldChainTracker.getLatestReading(shipmentId);
            expect(latestReading.temperature.toString()).to.equal(nonCompliantTemperatureHigh.toString());
        });

        it("Should revert when fetching readings for a shipment with no readings", async () => {
            try {
                await coldChainTracker.getLatestReading(2);
                assert.fail("Expected error not received");
            } catch (error) {
                expect(error.message).to.include("No readings available");
            }
        });
    });
});
