import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/sass/_Tools.scss';`
      }
    }
  },
  optimizeDeps: {
    exclude: ['three/examples/js/libs/stats.min'],
  },
})
