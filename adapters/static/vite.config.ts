import {staticAdapter} from "@builder.io/qwik-city/adapters/static/vite";
import {extendConfig} from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
    return {
        build: {
            ssr: true,
            outDir: 'ssg',
            assetsDir: 'docs',
            rollupOptions: {
                input: ["@qwik-city-plan"],
            },
        },
        plugins: [
            staticAdapter({
                origin: "https://doomsday.danielzotti.it",
            }),
        ],
    };
});