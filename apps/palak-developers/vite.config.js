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
                contact: resolve(__dirname, 'contact.html'),
                blog: resolve(__dirname, 'blog.html'),
                services: resolve(__dirname, 'services.html'),
                projects: resolve(__dirname, 'projects.html'),
                faq: resolve(__dirname, 'faq.html'),
            },
        },
    },
    server: {
        port: 3004,
        open: true,
    },
});
