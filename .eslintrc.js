/** ************************************************************************* */

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** ************************************************************************* */

module.exports = {
  root: true,
  // parser: "typescript-eslint-parser",
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    __DEV__: false,
  },
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['babel', 'import', 'react', 'prettier'],
  rules: {
    // __________________________________________________________________ import
    'import/extensions': OFF,
    'import/named': OFF,
    // ___________________________________________________________________ react
    'react/sort-comp': [
      WARN,
      {
        order: [
          'displayName',
          'propTypes',
          'defaultProps',
          'contextTypes',
          'childContextTypes',
          'static-methods',
          'type-annotations',
          'state',
          'instance-variables',
          'lifecycle',
          'onHandlers',
          'rendering',
          'everything-else',
        ],
        groups: {
          onHandlers: ['/^handle.+$/', '/^on.+$/'],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': OFF,
      },
    },
  ],
};
