module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'linebreak-style': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'default-case': 'off',
    'consistent-return':'off',
    'arrow-body-style': ["error", "as-needed"],
    'react/function-component-definition':[2,   { "namedComponents": [
      "arrow-function", 
      "function-declaration",
      "function-expression",
    ],
    "unnamedComponents":[
      "arrow-function", 
      "function-declaration",
      "function-expression",
    ] }
  ]
  },
};
