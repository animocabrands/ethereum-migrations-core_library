const {extendConfig, subtask} = require('hardhat/config');
const {TASK_DEPLOY_RUN_DEPLOY} = require('../hardhat-deploy-task-names');

extendConfig((config, userConfig) => {
  if (userConfig.namedGroups) {
    config.namedGroups = userConfig.namedGroups;
  } else {
    config.namedGroups = {};
  }
});

subtask(TASK_DEPLOY_RUN_DEPLOY, async (taskArguments, hre, runSuper) => {
  const namedAccounts = await hre.getNamedAccounts();
  hre.namedGroups = Object.fromEntries(
    Object.entries(hre.config.namedGroups).map(([team, members]) => [
      team,
      members.map((member) => namedAccounts[member]), // todo explicit retrieval fail?
    ])
  );
  await runSuper(taskArguments);
});
