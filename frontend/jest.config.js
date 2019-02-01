module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    "^.+\\.tsx?$": "ts-jest",
    '.*\\.(vue)$': 'vue-jest',
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)$"
}
