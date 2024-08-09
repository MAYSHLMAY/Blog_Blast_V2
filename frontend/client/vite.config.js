import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'client/dist', // Output directory for production build
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://blog-blast-v2-backend.onrender.com',
        secure: false,
        changeOrigin: false, // Helps with CORS issues during development
      },
    },
  },
  plugins: [react()],
});
