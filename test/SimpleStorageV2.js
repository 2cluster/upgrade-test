const { expect } = require('chai');
 
let SimpleStorageV2;
let simpleStorageV2;
 
describe('SimpleStorageV2', function () {
  beforeEach(async function () {
    SimpleStorageV2 = await ethers.getContractFactory("SimpleStorageV2");
    simpleStorageV2 = await SimpleStorageV2.deploy();
    await simpleStorageV2.deployed();
  });
 

  it('retrieve returns a value previously stored', async function () {

    await simpleStorageV2.set(11);

    expect((await simpleStorageV2.get()).toString()).to.equal('11');
  });
 

  it('retrieve returns a value previously incremented', async function () {

    await simpleStorageV2.plus();

    expect((await simpleStorageV2.get()).toString()).to.equal('1');
  });
});