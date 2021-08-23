require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

console.log('DEBUG-ENV', {
  ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY: process.env.POLYGONSCAN_API_KEY,
  INFURA_PROJECT_ID: process.env.INFURA_PROJECT_ID,
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const accounts = {
  mnemonic: process.env.MNEMONIC,
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  abiExporter: {
    path: './abi',
    clear: false,
    flat: true,
  },
  defaultNetwork: 'rinkeby',
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: false,
        runs: 1000,
      },
    },
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts,
      chainId: 1,
      gasPrice: 120 * 1000000000,
      tags: ["live"],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts,
      chainId: 4,
      live: true,
      saveDeployments: true,
      gasPrice: 5000000000,
      gasMultiplier: 2,
      tags: ["staging"],
    },
    matic: {
      url: `https://rpc-mainnet.matic.network`,
      accounts,
      chainId: 137,
      tags: ["live"],
    },
    mumbai: {
      url: `https://rpc-mumbai.matic.today`,
      accounts,
      chainId: 80001,
      tags: ["staging"],
    },
  }
};
