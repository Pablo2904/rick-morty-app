module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // moduleNameMapper: {
  //   "\\.(css|scss)$": "identity-obj-proxy", // Mock SCSS and CSS imports
  // },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Link setupTests
};
