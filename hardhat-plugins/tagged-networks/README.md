# tagged-networks HardHat plugin

Creates "tagged copies" of all existing networks for each tag specified in `config.duplicateNetworksWithTags`.
Each "tagged copy" has a name like `$name_$tag` and has the tag added to its `tags`.
For example, if there is a `rinkeby` network and `config.duplicateNetworksWithTags` is `['QA']`, there will be a network called `rinkeby_QA` with a tag `QA`.

This is useful to work with different deployment profiles.

`hardhat.config` example:

```javascript
module.exports = {
  // ...
  duplicateNetworksWithTags: ["test", "QA"],
};
```

Usage example:

```bash
hardhat deploy --network rinkeby # default profile
hardhat deploy --network rinkeby_test # test profile
hardhat deploy --network rinkeby_QA # QA profile
```

In deployment logic:

```javascript
if (hre.network.tags.QA) {
  // do QA-specific task
}
```
