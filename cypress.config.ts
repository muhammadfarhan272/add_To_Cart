import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "4ff94c",
    specPattern: "cypress/e2e/",
    viewportWidth: 2000,
    viewportHeight: 1260,
    defaultCommandTimeout: 3000,
    experimentalSourceRewriting: false,
    watchForFileChanges:false,
  },
});
