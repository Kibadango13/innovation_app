module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)"
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/utils/testUtils/__mocks__/svgMock.js"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.types.ts"
  ],
  coverageThreshold: {
    global: {
      statements: 49,
      branches: 29,
      lines: 50,
      functions: 33
    }
  }
};
