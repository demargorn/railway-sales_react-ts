import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      viteStaticCopy({
         targets: [{ src: 'src/shared/assets/*', dest: 'assets' }],
      }),
   ],
   base: '/railway-sales_react-ts/',
   publicDir: './src/app/shared',
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
   },
});
