module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^animate.css$": "<rootDir>/mocks/animate.css.js",
  },
  transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
};
