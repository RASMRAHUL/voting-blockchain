// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
const { ethers } = require("hardhat");

const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();
  await voting.deployed();

  console.log("voting address:", voting.address);

  saveFrontendFiles(voting);
}

function saveFrontendFiles(voting) {
  const fs = require("fs");
  const contractsDir = path.join(
    __dirname,
    "..",
    "frontend",
    "src",
    "contracts"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Voting: voting.address }, undefined, 2)
  );

  const VotingArtifact = artifacts.readArtifactSync("Voting");

  fs.writeFileSync(
    path.join(contractsDir, "Voting.json"),
    JSON.stringify(VotingArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
