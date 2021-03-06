// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "indent": ["off", 4, { "SwitchCase": 1 }],
    "quotes": ["off", "double"],
    "semi": ["error", "always"],
    "no-console": ["off"],
    "no-empty": 2,
    "no-eq-null": 2,
    "no-new": 0,
    "no-fallthrough": 0,
    "no-unreachable": 0,
	"no-tabs": 0,
  }
}
