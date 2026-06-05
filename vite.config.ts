import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';
import {viteSingleFile} from 'vite-plugin-singlefile';

const devHtmlPlugin = () => {
  return {
    name: 'dev-html-plugin',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/' || req.url === '/index.html') {
          try {
            const htmlPath = path.resolve(__dirname, 'dev.html');
            let html = fs.readFileSync(htmlPath, 'utf-8');
            html = await server.transformIndexHtml(req.url, html);
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
            return;
          } catch (e) {
            return next(e);
          }
        }
        next();
      });
    },
    closeBundle() {
      try {
        const buildHtmlPath = path.resolve(__dirname, 'dist/dev.html');
        const rootHtmlPath = path.resolve(__dirname, 'index.html');
        if (fs.existsSync(buildHtmlPath)) {
          fs.copyFileSync(buildHtmlPath, rootHtmlPath);
          console.log('Successfully copied dist/dev.html to root index.html');
        }
      } catch (e) {
        console.error('Failed to copy dist/dev.html to root index.html:', e);
      }
    }
  };
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), viteSingleFile(), devHtmlPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      assetsInlineLimit: 100000000, // Inline all assets as base64
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'dev.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
