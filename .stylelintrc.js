module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'block-no-empty': null,
    'property-no-unknown': null,
  },
  syntax: 'scss',
};
