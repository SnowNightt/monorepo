import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "YbuiUi",
      fileName: "Ybxui-ui",
    },

    minify: false,

    rollupOptions: {
      external: [/@ybui.*/, "vue"],

      output: {},
    },
  },
});
