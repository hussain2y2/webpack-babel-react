module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/__tests__/__*'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/__tests__/__coverage__/',
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^config(.*)$': '<rootDir>/config$1',
    '^layouts(.*)$': '<rootDir>/src/layouts$1',
    '^modules(.*)$': '<rootDir>/src/modules$1',
    '^utilities(.*)$': '<rootDir>/src/utilities$1',
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
}
