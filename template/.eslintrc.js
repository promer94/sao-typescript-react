module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'xo-space',
    'xo-react/space',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint' // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'react/jsx-tag-spacing': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    semi: ['error', 'never'],
    'valid-jsdoc': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-untyped-public-signature': 'off',
    'no-unused-vars': 'off'
  }
}
