import { DeployFunction } from 'hardhat-deploy/types';
import 'hardhat-deploy-ethers';
import 'hardhat-deploy';
import { parseUnits } from '@ethersproject/units';
import { constants } from 'ethers';

const run: DeployFunction = async (hre) => {
  const { deployments, getNamedAccounts, getUnnamedAccounts } = hre;
  const { deploy, get, execute } = deployments;
  const { deployer, admin } = await getNamedAccounts();

  const tatu = "0x237840ff450806058Dfd1A335816bd144cAa7113";
  const dev = "0x145fDF02e64999B875B3c443a596749712abeB5E";
  const tatuPerBlock = parseUnits('100', 18);
  const startBlock =  parseUnits('24689935', 18);
  const bonusEndBlock =  parseUnits('24689995', 18);
  await deploy('MasterChef', {
    from: deployer,
    log: true,
    args: [tatu, dev, tatuPerBlock, startBlock, bonusEndBlock],
  });

};

run.tags = ['matic'];

run.skip = async (hre) => {
  return hre.network.name !== 'matic';
};

export default run;