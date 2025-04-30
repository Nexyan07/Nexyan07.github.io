import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/Nexyan07.github.io/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'animations': path.resolve(__dirname, './src/animations'),
      'common': path.resolve(__dirname, './src/Common'),
      'assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
