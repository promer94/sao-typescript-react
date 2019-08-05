module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'xo-space',
    'xo-react/space',
    'xo-typescript',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'react/jsx-tag-spacing': 'off'
  }
}
