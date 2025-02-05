module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'prettier/prettier': 'off',
    'no-underscore-dangle': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArrowFunction: true,
      },
    ],
    'react/display-name': 'off',
  },
};
