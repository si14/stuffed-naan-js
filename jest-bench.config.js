module.exports = {
  preset: "ts-jest",

  testEnvironment: "jest-bench/environment",
  testEnvironmentOptions: {
    testEnvironment: "jest-environment-node",
  },

  reporters: ["default", ["jest-bench/reporter", { withOpsPerSecond: true }]],
  testRegex: "(/__benchmarks__/.*|\\.bench)\\.(ts|tsx|js)$",
};
