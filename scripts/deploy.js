async function main() {
  const Contract = await ethers.getContractFactory("SimpleStorage");
  const contract = await upgrades.deployProxy(Contract);
  

  await contract.set(11);

  console.log("Contract deployed at:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });