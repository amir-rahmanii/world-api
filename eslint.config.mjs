import { defineConfig } from "@fullstacksjs/eslint-config";

export default defineConfig({
  typescript: {
    tsconfigRootDir: import.meta.dirname,
  },
});
