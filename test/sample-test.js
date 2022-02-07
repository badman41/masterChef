const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TATU", function () {
  it("Should return the new TATU token", async function () {
    const TATUContract = await ethers.getContractFactory("TATU");
    const TATU = await TATUContract.deploy("TATUTOKEN", "TATU", ethers.BigNumber.from(5000));
    await TATU.deployed();

    const [owner, tuan, hieu] = await ethers.getSigners();
    const totalSupply = await TATU.totalSupply();
    expect(await TATU.balanceOf(owner.address)).to.equal(totalSupply);

    const transferAmount = ethers.BigNumber.from(10)
    // await TATU.approve(owner.address, ethers.BigNumber.from(100));

    await TATU.transferFrom(owner.address, tuan.address, transferAmount);
    expect(await TATU.balanceOf(tuan.address)).to.equal(transferAmount);
  });
});
