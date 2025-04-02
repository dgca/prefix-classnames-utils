import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/main.tsx"],
    format: ["esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: "dist",
    external: ["react"],
    esbuildOptions(options) {
      options.jsx = "automatic";
      return options;
    },
  },
]);
