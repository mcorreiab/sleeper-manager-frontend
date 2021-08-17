module.exports = {
  setupFilesAfterEnv: ["./jest.extends.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "@/config/(.*)$": "<rootDir>/src/config/$1",
    "@/components/(.*)$": "<rootDir>/src/components/$1",
    "@/hoc/(.*)$": "<rootDir>/src/hoc/$1",
    "@/services/(.*)$": "<rootDir>/src/services/$1",
    "@/model/(.*)$": "<rootDir>/src/model/$1",
  },
  testMatch: [ "**/?(*.)+(spec|test).[jt]s?(x)" ]
};
