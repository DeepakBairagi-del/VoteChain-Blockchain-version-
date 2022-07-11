require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.14",
  networks:{
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/NjAKfH0bOjPQNVsmyjDR5vAtMBzAgNLg',
      accounts: [process.env.MY_PRIVATE_KEY]
    }
  }
};
