import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export default [
  {
    ignores: [
      'dist',
      '.nuxt',
      'node_modules',
      '.output',
      'coverage',
      '.husky',
    ],
  },
  
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  
  ...tseslint.configs.recommended,
  
  ...pluginVue.configs['flat/recommended'],
  
  eslintPluginPrettierRecommended,
  
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      // Vue best practices
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off',
      
      // TypeScript
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      
      // General
      'no-console': 'off',
      'no-debugger': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      
      // Unicorn (modern JS)
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
    },
  },
]
