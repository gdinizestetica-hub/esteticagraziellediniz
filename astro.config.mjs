import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://esteticagraziellediniz.com.br',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false }
  }),
  build: { format: 'directory' }
});
