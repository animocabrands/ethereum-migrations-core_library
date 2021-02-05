# hardhat-deploy-mnemonics HardHat plugin

- Loads `.mnemonic_${MNEMO}` files as signing account for migrations by using the `MNEMO` environment variable. for example `MNEMO=testnet hardhat deploy` will load the mnemonic file `.mnemonic_testnet` and use it to sign transactions.
