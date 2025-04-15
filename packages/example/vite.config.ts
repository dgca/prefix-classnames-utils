import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { babelPrefixReactClassNames } from "@type_of/babel-prefix-react-classnames";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [babelPrefixReactClassNames({ prefix: "demo-" })],
      },
    }),
  ],
  build: {
    minify: false,
    cssMinify: false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
    },
  },
});
