// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://www.boiler-service.ch',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
