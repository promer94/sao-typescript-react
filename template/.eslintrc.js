module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'xo-typescript',
    'xo-space',
    'xo-react/space',
    'prettier/@typescript-eslint' // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'react/jsx-tag-spacing': 'off'
  }
}
