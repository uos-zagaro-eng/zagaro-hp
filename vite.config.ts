import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { SITE_ORIGIN, SITE_PATH_SEGMENT } from './src/constants/seo';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const ogCanonical = `${SITE_ORIGIN}/${SITE_PATH_SEGMENT}/`;
    const ogImage = `${SITE_ORIGIN}/${SITE_PATH_SEGMENT}/b_logo.png`;
    return {
      // GitHub Pages uses a subpath: https://<username>.github.io/<repo>/
      base: mode === 'production' ? '/zagaro-hp/' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        tailwindcss(),
        {
          name: 'html-ogp-placeholders',
          transformIndexHtml(html: string) {
            return html
              .replaceAll('__OG_CANONICAL__', ogCanonical)
              .replaceAll('__OG_IMAGE__', ogImage);
          },
        },
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      }
    };
});
