module.exports = {
  preset: '@stencil/core/testing',
  automock: false,
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/hydrate/', '<rootDir>/loader/', '<rootDir>/node_modules/', '<rootDir>/.stencil', '<rootDir>/www'],
};
