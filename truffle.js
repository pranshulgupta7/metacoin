module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};
var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "8otZ5NDbS3zVZCRpiITB";
var mnemonic = "fatal vivid swap deputy fantasy best drink car radio series pink walnut";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/8otZ5NDbS3zVZCRpiITB"),
      network_id: 3
    }
  }
};