module.exports = {
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "@/config/(.*)$": "<rootDir>/src/config/$1",
    "@/components/(.*)$": "<rootDir>/src/components/$1",
    "@/hoc/(.*)$": "<rootDir>/src/hoc/$1",
    "@/services/(.*)$": "<rootDir>/src/services/$1",
  },
};
