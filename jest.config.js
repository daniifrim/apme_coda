module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    'api/**/*.js',
    '!**/node_modules/**',
    '!**/tests/**'
  ],
  coverageThreshold: {
    global: {
      branches: 14,
      functions: 21,
      lines: 15,
      statements: 15
    }
  },
  setupFiles: ['dotenv/config']
}; 