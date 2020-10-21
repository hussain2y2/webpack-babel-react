module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
}
