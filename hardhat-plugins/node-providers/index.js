const {extendConfig} = require('hardhat/config');

extendConfig((config, userConfig) => {
  const defaultProvider = userConfig.providers ? userConfig.providers.default : undefined;
  const nodeProvider = process.env.NODE_PROVIDER || defaultProvider;

  if (nodeProvider === undefined) {
    console.warn(`Warning: no NODE_PROVIDER specified and no default provider in config.providers.default, network providers urls cannot be used.`);
    return;
  }
  console.log(`Provider '${nodeProvider}' will be used.`);

  const provider = userConfig.providers ? userConfig.providers[nodeProvider] : undefined;
  if (provider === undefined) {
    console.err(`Error: provider '${nodeProvider}' not found in providers configuration, exiting`);
    process.exit();
  }

  for (const network of Object.values(config.networks)) {
    if (provider[network.url]) {
      network.url = provider[network.url];
    }
  }
});
