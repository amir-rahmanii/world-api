import { defineConfig } from "@fullstacksjs/eslint-config";
import * as regexpPlugin from "eslint-plugin-regexp";

export default defineConfig(
  {
    typescript: {
      tsconfigRootDir: import.meta.dirname,
    },
  },
  regexpPlugin.configs["flat/recommended"],
);
