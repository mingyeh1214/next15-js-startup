import globals from 'globals'
import pluginJs from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import tailwind from 'eslint-plugin-tailwindcss'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      'unused-imports': unusedImports,
      perfectionist,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // React
      'react/prop-types': 0,
      'react/no-children-prop': 0,
      'react/react-in-jsx-scope': 0,
      'react/no-array-index-key': 0,
      'react/require-default-props': 0,
      'react/jsx-props-no-spreading': 0,
      'react/function-component-definition': 0,
      'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
      'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
      'react/no-unstable-nested-components': [1, { allowAsProps: true }],
      // import
      'import/no-dynamic-require': 0,
      'import/no-nodejs-modules': 0,
      'import/no-duplicates': 0,
      'import/no-unresolved': 0,
      'import/default': 0,
      'import/named': 0,
      // unused imports
      'no-unused-vars': 1,
      'unused-imports/no-unused-imports': 1,
      'unused-imports/no-unused-vars': [
        1,
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      // jsx-a11y
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/control-has-associated-label': 0,
      // perfectionist
      'perfectionist/sort-named-imports': [1, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-imports': [
        1,
        {
          type: 'line-length',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          internalPattern: ['~/**'],
          sortSideEffects: true,
          newlinesBetween: 'always',
          maxLineLength: undefined,
          groups: [
            'style',
            'type',
            ['builtin', 'external'],
            'custom-shadcn',
            'custom-mui',
            'custom-routes',
            'custom-hooks',
            'custom-utils',
            'internal',
            'custom-components',
            'custom-sections',
            'custom-auth',
            'custom-types',
            ['parent', 'sibling', 'index'],
            ['parent-type', 'sibling-type', 'index-type'],
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              ['custom-shadcn']: '@/components/**',
              ['custom-mui']: '@mui/**',
              ['custom-auth']: 'src/app/auth/**',
              ['custom-hooks']: 'src/app/hooks/**',
              ['custom-utils']: 'src/app/utils/**',
              ['custom-types']: 'src/app/types/**',
              ['custom-routes']: 'src/app/routes/**',
              ['custom-sections']: 'src/app/sections/**',
              ['custom-components']: 'src/app/components/**',
            },
          },
        },
      ],
    },
  },
  ...tailwind.configs['flat/recommended'],
  prettier,
]
