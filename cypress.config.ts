import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "cypress/junit.xml",
    },
    defaultCommandTimeout: 20000,
  },
});
