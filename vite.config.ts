import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React core into its own chunk
          'vendor-react': ['react', 'react-dom'],
          // Split icon libraries separately (biggest culprits)
          'vendor-icons': ['lucide-react', 'react-icons'],
          // EmailJS separately
          'vendor-email': ['@emailjs/browser'],
        },
      },
    },
    // Increase warning threshold slightly since we're splitting
    chunkSizeWarningLimit: 600,
  },
});
