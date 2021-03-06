module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    react: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDor: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': [0, { devDependencies: false }],
    'import/prefer-default-export': 0,
  },
};
