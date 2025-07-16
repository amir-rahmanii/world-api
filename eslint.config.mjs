import { defineConfig } from '@fullstacksjs/eslint-config';
import * as regexpPlugin from 'eslint-plugin-regexp';

export default defineConfig(
  {
    tailwind: { entryPoint: './src/globals.css' },
  },
  {
    ...regexpPlugin.configs['flat/recommended'],
  },
);
