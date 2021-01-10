const { expect } = require('chai');
 
let SimpleStorage;
let SimpleStorageV2;
let simpleStorage;
let simpleStorageV2;
 
describe('SimpleStorageV2 (proxy)', function () {
  beforeEach(async function () {
    SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    SimpleStorageV2 = await ethers.getContractFactory("SimpleStorageV2");
 
    
    simpleStorage = await upgrades.deployProxy(SimpleStorage);
    await simpleStorage.set(11);

    simpleStorageV2 = await upgrades.upgradeProxy(simpleStorage.address, SimpleStorageV2);
  });
 

  it('retrieve returns a value previously incremented', async function () {

    await simpleStorageV2.plus();
    expect((await simpleStorageV2.get()).toString()).to.equal('12');
  });
});