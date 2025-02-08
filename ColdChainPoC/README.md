# ColdChainTracker

**ColdChainTracker** is a smart contract solution for tracking temperature-sensitive shipments. It lets an admin set temperature thresholds for shipments and allows users to record temperature readings. If a reading is out of bounds, the contract emits an alert event.

## Technologies

- **Solidity 0.8.0** – Smart contract language
- **Truffle Suite** – Development, migration, and testing framework
- **Ganache** – Local blockchain for testing
- **Node.js & npm** – Runtime and dependency management

## Setup

 
 Install dependencies:
 ```bash
 npm install 
 ```
  Compile the contracts:
 ```bash
 truffle compile
 ```
  Deploy to a local network (Ganache):
 ```bash
 truffle migrate --reset
 ```
