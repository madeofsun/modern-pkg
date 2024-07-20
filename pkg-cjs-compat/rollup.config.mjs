import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: ["./src/index.ts", "./src/get-value.ts"],
  output: {
    dir: "dist/browser-esm",
    entryFileNames: "[name].mjs",
    format: "esm",
  },
  external: [() => true],
  plugins: [
    typescript({
      moduleResolution: "Bundler",
      module: null,
    }),
  ],
});
