import { FlatCompat } from '@eslint/eslintrc'

import prettierConfigRecommended from 'eslint-plugin-prettier/recommended'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierConfigRecommended,
  {
    ignores: ['**/node_modules/**', '.next/**', 'dist/**', 'build/**', 'coverage/**', 'out/**'],
  },
]

export default eslintConfig
