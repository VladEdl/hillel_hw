import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
const root = path.resolve(__dirname, "src");

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": root,
            "@components": path.resolve(__dirname, 'src', 'components'),
            "@pages": path.resolve(__dirname, 'src', 'pages'),
            "@store": path.resolve(__dirname, 'src', 'store'),
            "@router": path.resolve(__dirname, 'src', 'router'),
            "@layouts": path.resolve(__dirname, 'src', 'layouts'),
            "@constants": path.resolve(__dirname, 'src', 'constants'),
        },
    },
})