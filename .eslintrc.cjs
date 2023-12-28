module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "import",
    "jsx-a11y",
    "react-refresh",
    "@typescript-eslint",
  ],
  parserOptions: {
    project:"./tsconfig.json",
    ecmaVersion: 2023,
    sourceType:"module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    react:{ version: "detect" },
    "import/parsers":{
      "@typescript-eslint/parser":[".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: { alwaysTryTypes: true },
    },
  },
};
