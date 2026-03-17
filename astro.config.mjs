import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  server: {
    host: true, // Listen on all network interfaces
    port: 4321
  },
  vite: {
    optimizeDeps: {
      include: ['@supabase/supabase-js']
    },
    ssr: {
      noExternal: ['@supabase/supabase-js']
    }
  }
});