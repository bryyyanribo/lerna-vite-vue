import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

export const getBaseConfig = ({ plugins = [], lib }) =>
  defineConfig({
    plugins: [vue(), ...plugins],
    build: {
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  });
