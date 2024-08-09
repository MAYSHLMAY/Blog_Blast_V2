import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'blog-blast-v2.vercel.app',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
