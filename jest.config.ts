/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  roots:['<rootDir>/src'],
  collectCoverage: true,
  testEnvironment:'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
   transform:{
     '.+\\.ts$':'ts-jest'
   },
};

export default config;