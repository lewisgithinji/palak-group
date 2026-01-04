import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                companies: resolve(__dirname, 'companies.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
