module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/__*',
    '<rootDir>/__coverage__/__*'
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/__coverage__/',
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
}
