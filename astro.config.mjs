// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yourusername.github.io",
  base: "/velocity-digital",
  output: "static",
  build: {
    assets: "_astro",
  },
});
