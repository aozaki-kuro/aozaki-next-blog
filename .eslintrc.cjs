/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'esnext',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@next/next/no-img-element': 'off',
    'prefer-const': 'error',

    // TypeScript
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
}
