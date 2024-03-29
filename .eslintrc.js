module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
  },
}
