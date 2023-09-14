/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  roots:['<rootDir>/src'],
  testEnvironment:'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
   transform:{
     '.+\\.ts$':'ts-jest'
   },
};

export default config;
