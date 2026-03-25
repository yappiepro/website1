import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'

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
    plugins: {
      'unused-imports': unusedImports,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      // Zero-Waste: запрет неиспользуемых импортов и переменных
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', {
        vars: 'all',
        varsIgnorePattern: '^_|^h$',
        args: 'after-used',
        argsIgnorePattern: '^_',
      }],
      
      // Zero-Waste: запрет console.log (разрешены только warn/error)
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      
      // Vue best practices
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'off',
      
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      
      // General
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
