import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      all: true,
      include: ["lib/*"],
      exclude: ["**/*/index.ts"],
    },
  },
});
