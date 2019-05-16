module.exports = {
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    'plugin': '@typescript-eslint/recommended',
    "ecmaVersion": 2018,
    legacyDecorators: true,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error"
  }
}
