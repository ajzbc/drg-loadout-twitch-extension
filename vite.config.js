import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                panel: resolve("panel.html"),
                config: resolve("config.html"),
            },
        },
        assetsDir: "app",
    },
    base: "./",
    plugins: [svelte()],
});
