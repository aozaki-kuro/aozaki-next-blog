import js from '@eslint/js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'

import prettierConfigRecommended from 'eslint-plugin-prettier/recommended'
import ts from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const patchedConfig = fixupConfigRules([...compat.extends('next/core-web-vitals')])

const config = [
  ...patchedConfig,
  ...ts.configs.recommended,
  prettierConfigRecommended,
  {
    ignores: ['**/.next/**', '**/_next/**', '**/dist/**', '**/out/**'],
    rules: {
      '@next/next/no-img-element': 'off',
      'prefer-const': 'error',
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-explicit-any': 0,
    },
  },
]

export default config
