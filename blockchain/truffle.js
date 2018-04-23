// const HDWalletProvider = require("truffle-hdwallet-provider");
// const mnemonic = "bench remain wrong panel parent artefact false worth coral drill knife profit";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // match any network
    },
    // bccprivatechain:{
    //   host:"192.168.15.18",
    //   port:8545,
    //   network_id:"*",
    //   "gas":4000000
    // },
    // kovan: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "https://kovan.infura.io/Drc7BtLI8LQWne78LRV2")
    //   },
    //   network_id: 42,
    //   gas: 4700000
    // }
    // live: {
    //   host: "178.25.19.88", // Random IP for example purposes (do not use)
    //   port: 80,
    //   network_id: 1,        // Ethereum public network
    //   // optional config values:
    //   // gas
    //   // gasPrice
    //   // from - default address to use for any transaction Truffle makes during migrations
    //   // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
    //   //          - function that returns a web3 provider instance (see below.)
    //   //          - if specified, host and port are ignored.
    // }
  }
};