const { ethers, upgrades } = require("hardhat");

async function main() {
  const ContractV2 = await ethers.getContractFactory("SimpleStorageV2");
  const contract = await upgrades.upgradeProxy("0xB498FDc4db447A6B44eE297AA1BC6d4c6abb6Ae4", ContractV2);
  console.log("Contract upgraded");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });