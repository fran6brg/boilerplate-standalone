module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // Default eslint rules
    "eslint:recommended",

    // Default typescript rules
    "plugin:@typescript-eslint/recommended",

    // Default prettier rules
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
