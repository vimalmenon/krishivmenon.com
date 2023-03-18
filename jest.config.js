module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**', '!**/pages/api/**'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    "^@layout$": "<rootDir>/src/Layout",
    "^@types$": "<rootDir>/src/types",
    "^@style$": "<rootDir>/src/Style",
    "^@page$": "<rootDir>/src/Page",
    "^@common$": "<rootDir>/src/Common",
    "^@utility$":"<rootDir>/src/Utility",
    "^@constant$": "<rootDir>/src/Config/constants",
    "^@context$": "<rootDir>/src/Context",
    "^@data$": "<rootDir>/src/Config/data/index.ts",
    "^@hook$": "<rootDir>/src/Hook"
  }
};
