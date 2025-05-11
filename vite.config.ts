import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(),
    visualizer({
      open: true, // Автоматически откроет отчет в браузере
      filename: 'bundle-stats.html', // Имя файла отчета
      gzipSize: true, // Показывать размер после gzip
      brotliSize: true,
      template: 'treemap'
    }),
  ],
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      'App': path.resolve(__dirname, 'src/App'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
    },
  },
});
