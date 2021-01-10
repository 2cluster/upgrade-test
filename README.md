This project deploys a upgradable contract

for compiling (already done) 
# npx hardhat compile --force

for deployment of contract
# npx hardhat run scripts/deploy.js --network rinkeby
this script also sets a value in the contract so that we can check if the value also shows up in the upgraded contract

for upgrading to contract V2
# npx hardhat run scripts/deploy.js --network rinkeby

we can also run the commands above on a local network
to run a local network 
# npx hardhat node
if you use the local network you also need to make sure to provide the --network flag with the value 'localhost', like this (--network localhost)


you can also run tests on multiple networks
# npx run test 
    // uses a hardhat virtual network
# npx run test --network localhost
    // uses a local network
# npx run test --network rinkeby
    // provide the network that u want to use