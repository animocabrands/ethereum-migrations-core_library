# node-providers HardHat plugin

Allows to use different node providers. Network configuration URLs can be a provider tag instead of a URL, in which case the URL will be retrieved from `config.providers.$provider.$tag`.
The environment variable NODE_PROVIDER is used to define the provider at runtime. A default provider can be set via `config.providers.default`.

`hardhat.config` example:

```javascript
module.exports = {
  // ...
  networks: {
    rinkeby: {
      url: "rinkeby",
    },
    rinkeby_test: {
      url: "rinkeby",
      tags: ['test'],
    },
  },
  providers: {
    default: "infura",
    infura: {
      rinkeby: "http://...",
    },
    alchemy: {
      rinkeby: "http://...",
    },
  },
};
```

```bash
hardhat deploy --network rinkeby # runs with default 'infura' provider url
PROVIDER=alchemy hardhat deploy --network rinkeby # runs with 'alchemy' provider url
```
