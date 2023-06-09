import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  base: "/coreFE-demo/",

  // resolve: {
  //   alias: {
  //     "@type": "./type",
  //     "@module": "./src/module",
  //   },
  // },
  // server: {
  //   hmr: {
  //     overlay: false,
  //   },
  // },
});
