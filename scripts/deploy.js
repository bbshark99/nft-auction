// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // Deploy SharkNFT contract
  const SharkNFT = await hre.ethers.getContractFactory("SharkNFT");
  const sharkNFT = await SharkNFT.deploy("SharkNFT", "SNFT");

  await sharkNFT.deployed();
  console.log("SharkNFT deployed to: ", sharkNFT.address);

  // Deploy AuctionSea contract
  const AuctionSea = await hre.ethers.getContractFactory("AuctionSea");
  const auctionSea = await AuctionSea.deploy();

  await auctionSea.deployed();
  console.log("AuctionSea deployed to: ", auctionSea.address);

  await auctionSea.initialize(sharkNFT.address);
  console.log('AuctionSea states have been initialized successfully');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
