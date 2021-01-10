const { ethers, upgrades } = require("hardhat");

async function main() {
  const ContractV2 = await ethers.getContractFactory("SimpleStorageV2");
  const contract = await upgrades.upgradeProxy("0x68Be657C2087513135c941B23960A1145763897d", ContractV2);
  console.log("Contract upgraded");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });