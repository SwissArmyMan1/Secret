require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    arbitrum_sepolia: {
      provider: () => new HDWalletProvider(mnemonic, process.env.INFURA),
       network_id: 421614,     
       confirmations: 2,
       timeoutBlocks: 200,
       skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: "0.8.11",
      "evmVersion": "london",
      "libraries": {},
      "metadata": {
        "bytecodeHash": "ipfs",
        "useLiteralContent": true
      },
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "remappings": [],
      "outputSelection": {
        "*": {
          "*": [
            "evm.bytecode",
            "evm.deployedBytecode",
            "abi"
          ]
        }
      }
    }
  }
};
