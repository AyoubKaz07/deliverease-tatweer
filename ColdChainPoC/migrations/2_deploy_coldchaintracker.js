const ColdChainTracker = artifacts.require("ColdChainTracker");

module.exports = function (deployer) {
    deployer.deploy(ColdChainTracker);
};
