import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import {accounts} from './utils/network';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      accounts: accounts('localhost'),
    },
    localhost: {
      url: 'http://localhost:8545',
      accounts: accounts('localhost'),
    },
    testnet: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts: accounts('testnet'),
      live: true,
    },
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com',
      accounts: accounts('matic'),
      live: true,
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: accounts('kovan'),
      live: true,
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 5,
    enabled: !!process.env.REPORT_GAS,
  },
  namedAccounts: {
    deployer: 0,
    admin: 1
  },
};

export default config;
