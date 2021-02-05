module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  env: {
    node: true,
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 9,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-multi-spaces': ['error', {exceptions: {VariableDeclarator: true}}],
    'no-unused-vars': 'off',
    'no-else-return': ['error', {allowElseIf: true}],
    'max-params': ['error', 6],
    'no-await-in-loop': 'off',
    'max-len': ['error', {code: 150}],
  },
};
