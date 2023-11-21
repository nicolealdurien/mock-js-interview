module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:react/jsx-runtime"
  ],
  "rules": {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "semi": [2, "always"],
    "react/prop-types": "off"
  }
};
