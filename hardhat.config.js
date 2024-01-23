// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */

// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-rpc.com/";
// const NEXT_PUBLIC_PRIVATE_KEY =
//   "c626ab629ba57aa1208c58dfa3b64741fddb2b5ee3b9740c9b8bec8d1b9700c4";
// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     hardhat: {
//       chainId: 137,
//     },
//   },
// };

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 80001,
    },
  },
};
