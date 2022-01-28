module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.extends.ts", "jest-canvas-mock"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "@/config/(.*)$": "<rootDir>/src/config/$1",
    "@/components/(.*)$": "<rootDir>/src/components/$1",
    "@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "@/hoc/(.*)$": "<rootDir>/src/hoc/$1",
    "@/services/(.*)$": "<rootDir>/src/services/$1",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};
