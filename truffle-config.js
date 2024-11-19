require('babel-register');
require('babel-polyfill');
const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider'); // Importing HDWalletProvider correctly
require('dotenv').config(); // dotenv import simplified

// Load environment variables
const MNEMONIC = process.env.MNEMONIC;
const INFURA_API_KEY = process.env.INFURA_API_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Port Ganache is running on
      network_id: "*",       // Match any network id
      gas: 5000000,          // Gas limit
      gasPrice: 20000000000, // Gas price (in wei)
    }
  },
  
  // Specify contract directories
  contracts_directory: './contracts/',
  contracts_build_directory: './abis/',

  compilers: {
    solc: {
      version: "^0.8.6",  // Specify Solidity version
      settings: {
        evmVersion: 'byzantium',  // EVM version, used for optimizing contracts for the correct version
        optimizer: {
          enabled: true,
          runs: 200  // Optimizer settings, increase runs for better optimization
        }
      }
    }
  },

  // Optional plugin to report contract sizes
  plugins: ["truffle-contract-size"]
};
