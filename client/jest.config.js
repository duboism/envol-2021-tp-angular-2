const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'jest-preset-angular',
    testMatch: ['**/+(*.)+(spec).+(ts|js)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    coverageReporters: ['html'],
    coverageDirectory: 'coverage/client',
    moduleDirectories: ["node_modules", "./"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: '<rootDir>/',
    }),
};
