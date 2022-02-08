import { DeployFunction } from 'hardhat-deploy/types';
import 'hardhat-deploy-ethers';
import 'hardhat-deploy';
import { parseUnits } from '@ethersproject/units';
import { constants } from 'ethers';

const run: DeployFunction = async (hre) => {
  const { deployments, getNamedAccounts, getUnnamedAccounts } = hre;
  const { deploy, get, execute } = deployments;
  const { deployer, admin } = await getNamedAccounts();

  await deploy('TATU', {
    from: deployer,
    log: true,
    args: ["TATUTOKEN", "TATUTOKEN", "100000000000000000000"],
  });

};

run.tags = ['mock'];

run.skip = async (hre) => {
  return hre.network.name !== 'localhost' && hre.network.name !== 'hardhat';
};

export default run;