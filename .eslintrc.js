module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    'simple-import-sort',
    'prettier',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages. `react` related packages come first.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ['^react', '^@?\\w'],
              // Absolute imports and Relative imports.
              ['^(src)(/.*|$)', '^\\.'],
              // for scss imports.
              ['^[^.]'],
            ],
          },
        ],
      },
    },
  ],
};
