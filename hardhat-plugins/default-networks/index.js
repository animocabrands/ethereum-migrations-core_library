const {extendConfig} = require('hardhat/config');

extendConfig((config, userConfig) => {
  const defaultNetworks = require('./defaultNetworks');

  for (const [defaultNetworkName, defaultNetworkConfig] of Object.entries(defaultNetworks)) {
    const existingNetworkConfig = config.networks[defaultNetworkName] || {};
    const userNetworkConfig = userConfig.networks ? userConfig.networks[defaultNetworkName] || {} : {};
    config.networks[defaultNetworkName] = {
      ...existingNetworkConfig, // keep existing network config (such as for 'hardhat' and 'localhost' which have predefined configs).
      ...defaultNetworkConfig, // add/overwrite with default network config
      ...userNetworkConfig, // add/overwrite with user defined network config
    };
  }
});

require('../node-providers');
