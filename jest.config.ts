import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  // watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  // moduleNameMapper: {
  //     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  //     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  // },
}

export default config
