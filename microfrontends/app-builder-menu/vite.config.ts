import * as path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'AB_MENU',
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.tsx'),
      name: 'app-builder-menu',
      formats: ['umd'],
      fileName: format => `app-builder-menu.${format}.js`
    },
    outDir: path.resolve(__dirname, './build')
  }
});
