import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        a: "src/reset.css",
        b: "src/all.css",
      },
      output: {
        assetFileNames: "[name][extname]",
      },
    },
  },

  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          features: {
            "nesting-rules": true,
            "custom-selectors": true,
          },
        }),
      ],
    },
  },
});
