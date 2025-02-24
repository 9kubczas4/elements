export default {
  preset: 'jest-preset-angular/presets/defaults-esm',
  globalSetup: 'jest-preset-angular/global-setup.mjs',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      // path might be different based on your workspace setup
      // <rootDir> represents the location of jest.config.mjs
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      useESM: true,
    },
  },
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    '^rxjs(/operators$)?$':
      '<rootDir>../../node_modules/rxjs/dist/bundles/rxjs.umd.js',
    '^rxjs/testing$':
      '<rootDir>../../node_modules/rxjs/dist/cjs/testing/index.js',
    '^@angular-extensions\\/elements\\/(.*)$': '<rootDir>/../elements/$1',
    '^@angular-extensions\\/elements$':
      '<rootDir>/../elements/src/public-api.ts',
  },

  // perf (you might try various options based on the available cores)
  maxWorkers: '8',

  // other
  resetModules: true,
  displayName: 'elements-demo',
  cacheDirectory: '<rootDir>../../.jest-cache',
  coverageDirectory: '<rootDir>/coverage/elements',
  coverageReporters: ['json', 'lcovonly', 'text', 'html'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
};
