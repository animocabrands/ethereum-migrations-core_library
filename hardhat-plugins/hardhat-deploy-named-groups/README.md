# hardhat-deploy-named-groups HardHat plugin

Loads named groups of accounts based on existing named accounts in `hre.namedAccounts`.

Requires to have `hardhat-deploy` plugin loaded already.

`hardhat.config` example:

```javascript
module.exports = {
  // ...
  namedAccounts: {
    alice: {default: '0xabcd'},
    bob: {default: '0xdcba'},
    evil: {default: '0cdead'},
  },
  namedGroups: {
    friends: ['alice', 'bob'],
    ennemies: ['evil'],
  },
};
```
