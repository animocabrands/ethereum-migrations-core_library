module.exports = {
  hardhat: {
    // chainId 31337
    // blockGasLimit: 12000000,
    live: false,
    tags: ['dev'],
  },
  localhost: {
    // ganache chainId 1337
    live: false,
    tags: ['dev'],
  },
  ropsten: {
    // chainId 3
    url: 'ropsten',
    live: true,
    tags: ['staging', 'ethereum1'],
  },
  rinkeby: {
    // chainId 4
    url: 'rinkeby',
    live: true,
    tags: ['staging', 'ethereum1'],
  },
  kovan: {
    // chainId 42
    url: 'kovan',
    live: true,
    tags: ['staging', 'ethereum1'],
  },
  mainnet: {
    // chainId 1
    url: 'mainnet',
    live: true,
    tags: ['production', 'ethereum1'],
  },
  mumbai: {
    // chainId 80001
    // more data: https://static.matic.network/network/testnet/mumbai/index.json
    url: 'mumbai',
    live: true,
    tags: ['staging', 'matic'],
  },
  matic: {
    // chainId 137
    // more data: https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json
    url: 'matic',
    live: true,
    tags: ['production', 'matic'],
  },
};
