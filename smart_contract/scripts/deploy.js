const main = async () => {
  const VoteChain = await hre.ethers.getContractFactory("votechainApp");
  const voteChain = await VoteChain.deploy();

  await voteChain.deployed();

  console.log("VoteChain contract deployed to:", voteChain.address);
}

const runmain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runmain();
