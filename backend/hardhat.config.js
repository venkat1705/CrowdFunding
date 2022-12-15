/** @type import('hardhat/config').HardhatUserConfig */
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "mumbai",
    networks: {
      hardhat: {},
      mumbai: {
        url: process.env.ALCHAMEY_API,
        accounts: [process.env.PRIVATE_KEY],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
