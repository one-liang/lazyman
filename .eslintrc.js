module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', 'src'],
          ['@', 'node_modules'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'e', // for e.returnvalue
      ],
    }],
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'import/no-unresolved': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
  },
};
