import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({ jsx: true, appEntrypoint: '/src/vue-main' })],
  output: 'server',
  adapter: cloudflare(),
});