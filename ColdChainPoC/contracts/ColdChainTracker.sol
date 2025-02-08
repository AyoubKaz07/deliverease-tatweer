// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ColdChainTracker {
    address public admin;

    struct Shipment {
        int256 minThreshold;
        int256 maxThreshold;
        bool exists;
    }

    struct Reading {
        uint256 timestamp;
        int256 temperature;
    }

    mapping(uint256 => Shipment) public shipments;
    mapping(uint256 => Reading[]) public shipmentReadings;

    event ShipmentCreated(
        uint256 shipmentId,
        int256 minThreshold,
        int256 maxThreshold
    );
    event NewReading(
        uint256 shipmentId,
        uint256 timestamp,
        int256 temperature,
        bool compliant
    );
    event Alert(
        uint256 shipmentId,
        uint256 timestamp,
        int256 temperature,
        string message
    );

    // Modifier to restrict access to the admin
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    constructor() {
        admin = msg.sender; // Set the deployer as the admin
    }

    /**
     * @notice Create a new shipment with defined temperature thresholds.
     * @param shipmentId The unique identifier for the shipment.
     * @param minThreshold The minimum acceptable temperature.
     * @param maxThreshold The maximum acceptable temperature.
     */
    function createShipment(
        uint256 shipmentId,
        int256 minThreshold,
        int256 maxThreshold
    ) public onlyAdmin {
        require(!shipments[shipmentId].exists, "Shipment already exists");
        require(minThreshold < maxThreshold, "Invalid thresholds");

        shipments[shipmentId] = Shipment(minThreshold, maxThreshold, true);
        emit ShipmentCreated(shipmentId, minThreshold, maxThreshold);
    }

    /**
     * @notice Record a new temperature reading for a given shipment.
     * @param shipmentId The shipment to which this reading belongs.
     * @param temperature The temperature reading.
     */
    function recordReading(uint256 shipmentId, int256 temperature) public {
        require(shipments[shipmentId].exists, "Shipment does not exist");

        Shipment memory shipment = shipments[shipmentId];
        bool compliant = (temperature >= shipment.minThreshold &&
            temperature <= shipment.maxThreshold);
        shipmentReadings[shipmentId].push(
            Reading(block.timestamp, temperature)
        );

        emit NewReading(shipmentId, block.timestamp, temperature, compliant);

        // Emit an Alert event if the temperature is out-of-bound.
        if (!compliant) {
            string memory message = temperature < shipment.minThreshold
                ? "Temperature below minimum"
                : "Temperature above maximum";
            emit Alert(shipmentId, block.timestamp, temperature, message);
        }
    }

    /**
     * @notice Fetch the latest temperature reading for a shipment.
     * @param shipmentId The shipment to query.
     * @return The latest Reading struct.
     */
    function getLatestReading(
        uint256 shipmentId
    ) public view returns (Reading memory) {
        require(
            shipmentReadings[shipmentId].length > 0,
            "No readings available"
        );
        return
            shipmentReadings[shipmentId][
                shipmentReadings[shipmentId].length - 1
            ];
    }

    /**
     * @notice Transfer admin rights to a new address.
     * @param newAdmin The address of the new admin.
     */
    function transferAdmin(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "Invalid address");
        admin = newAdmin;
    }
}
