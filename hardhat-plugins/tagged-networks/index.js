const {extendConfig} = require('hardhat/config');

/// creates a copy of `networks` while replacing the network names
/// with `name`_`tag` and adding `tag` in the tags of each network
const makeNetworks = function (networks, tag) {
  return Object.fromEntries(
    Object.entries(networks)
      .filter(([name, _]) => name !== 'coverage' && name !== 'hardhat')
      .map(([name, config]) => {
        const testConfig = {...config};
        if (Array.isArray(config.tags)) {
          testConfig.tags = [...config.tags, tag];
        } else {
          testConfig.tags = [tag];
        }
        return [`${name}_${tag}`, testConfig];
      })
  );
};

extendConfig((config, userConfig) => {
  const tags = userConfig.duplicateNetworksWithTags;
  if (Array.isArray(tags)) {
    for (const tag of tags) {
      const taggedNetworks = makeNetworks(config.networks, tag);
      config.networks = {
        ...config.networks,
        ...taggedNetworks,
      };
    }
  }
});
