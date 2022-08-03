import { defineConfig } from 'vite';
import GlobPlugin from 'vite-plugin-glob';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/frontend/App.tsx', 'resources/frontend/css/app.css'],
            refresh: true,
        }),
        react(),
        GlobPlugin(),
    ],
});
