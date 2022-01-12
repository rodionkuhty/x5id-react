module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-plusplus': 'off',
    'newline-before-return': 'error',
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'max-len': ['error', { code: 120, ignoreTemplateLiterals: true, ignoreStrings: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'consistent-return': 'off',
    'global-require': 'off',
    indent: ['error', 2, { SwitchCase: 1, ArrayExpression: 1 }],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    camelcase: 'off',
    'react/button-has-type': 'off',
    'react/state-in-constructor': 'off',
    'no-shadow': 'off',
    'no-new': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'no-return-assign': 'off',
    quotes: [2, 'single']
  },
}

