import globals from 'globals'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt().prepend(
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    plugins: {
      eslintPluginPrettierRecommended,
    },
  },
)
