import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import hermesEslint from 'hermes-eslint'
import eslintPluginFtFlow from 'eslint-plugin-ft-flow'

const flowRules = {
  "no-undef": 0,
  "ft-flow/boolean-style": [
    2,
    "boolean"
  ],
  "ft-flow/delimiter-dangle": 0,
  "ft-flow/generic-spacing": [
    2,
    "never"
  ],
  "ft-flow/no-mixed": 0,
  "ft-flow/no-types-missing-file-annotation": 2,
  "ft-flow/no-weak-types": 0,
  "ft-flow/require-parameter-type": 0,
  "ft-flow/require-readonly-react-props": 0,
  "ft-flow/require-return-type": 0,
  "ft-flow/require-valid-file-annotation": 0,
  "ft-flow/semi": 0,
  "ft-flow/space-after-type-colon": [
    2,
    "always"
  ],
  "ft-flow/space-before-generic-bracket": [
    2,
    "never"
  ],
  "ft-flow/space-before-type-colon": [
    2,
    "never"
  ],
  "ft-flow/type-id-match": 0,
  "ft-flow/union-intersection-spacing": [
    2,
    "always"
  ]
};

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: hermesEslint,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      'ft-flow': eslintPluginFtFlow,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...flowRules,
    },
  },
];
