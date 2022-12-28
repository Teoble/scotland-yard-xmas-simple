// .eslintrc.js
// Out of the box rules
module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      "plugin:prettier/recommended"
    ],
    plugins: ["prettier"],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "prettier/prettier": "error"
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  };