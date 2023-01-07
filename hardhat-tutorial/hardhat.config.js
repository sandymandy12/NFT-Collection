require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// [1] Crypto Devs Contract Address: 0x7176C72e34bD0C96e75C9Df5520FBa203d4f2C0E
// [2] Crypto Devs Contract Address: 0x85B249C6E95493a87684d7093E1ff825EE10d4cB

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
