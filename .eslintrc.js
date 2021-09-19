module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.ts", "**/*.spec.ts", "**/*.test.tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
      alias: {
        map: [
          ["@/config", "./src/config"],
          ["@/hooks", "./src/hooks"],
          ["@/initializer", "./src/initializer"],
          ["@/containers", "./src/containers"],
          ["@/components", "./src/components"],
          ["@/hoc", "./src/hoc"],
          ["@/services", "./src/services"],
        ],
      },
    },
  },
};
