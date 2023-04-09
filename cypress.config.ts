import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "t4diey",
  e2e: {
    chromeWebSecurity: false,
    specPattern: "./src/**/*.cy-e2e.{ts,tsx}",
  },
});
