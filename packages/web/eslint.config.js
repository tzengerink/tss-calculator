import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt().prepend(
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    plugins: {
      eslintPluginPrettierRecommended,
    },
  },
)
