require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
require("dotenv").config();

const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ALCHEMY_RPC_URL = process.env.ALCHEMY_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

console.log(ETHERSCAN_API_KEY);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: ALCHEMY_RPC_URL,
      chainId: 11155111, // Chain ID of the network
      accounts: [SEPOLIA_PRIVATE_KEY], // Single account address
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
