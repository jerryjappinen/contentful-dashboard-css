module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {

    // Use kebab-case in component templates
    'vue/component-name-in-template-casing': ['error', 'kebab-case']

  }
}
