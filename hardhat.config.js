require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.1',
  networks: {
    goerli: {
      url: "https://quick-palpable-shard.ethereum-goerli.discover.quiknode.pro/db9d6900093b79890d62b9486d9ff8c3b4850ef8/",
      accounts: ["bd27b69a2fcdafaefcdc30c6ef94a7c1b8c53695044f33fe4d905a42e003e9d1"],
    },
  },
};