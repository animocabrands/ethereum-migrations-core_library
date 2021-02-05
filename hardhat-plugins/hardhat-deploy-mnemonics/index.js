const fse = require('fs-extra');
const {extendConfig} = require('hardhat/config');

extendConfig((config, userConfig) => {
  const mnemoId = process.env.MNEMONIC || process.env.MNEMO || 'default';
  const mnemonicFile = `.mnemonic_${mnemoId}`;
  console.log(`Loading mnemonic for live networks from file: ${mnemonicFile}`);

  let mnemonic;
  try {
    mnemonic = fse.readFileSync(mnemonicFile).toString().replace('\n', '').trim();
  } catch (err) {
    console.log(`Warning: could not read mnemonic file, no transaction can be signed on live networks`);
  }
  const accounts = mnemonic ? {mnemonic} : [];

  for (const networkName of Object.keys(config.networks)) {
    if (networkName !== 'coverage') {
      const network = config.networks[networkName];
      if (network.accounts == undefined) {
        network.accounts = accounts;
      }
    }
  }
});
