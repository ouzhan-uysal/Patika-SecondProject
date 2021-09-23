module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: { 
    'linebreak-style': 0,
    'max-classes-per-file': ['error', 3],
    'max-len': ['error', {
      '"ignoreComments"': true,
      '"ignoreUrls"': true,
    }],
  },
};
