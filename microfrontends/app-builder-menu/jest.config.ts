export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
