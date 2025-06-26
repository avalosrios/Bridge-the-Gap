import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from "vite-plugin-babel"


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        babel({
            babelConfig: {
                babelrc: false,
                configFile: false,
                plugins: ["babel-plugin-syntax-hermes-parser"],
                parserOpts: { flow: "all" },
                presets: ["@babel/preset-flow"],
            },
        }),
        react(),
    ],
});
