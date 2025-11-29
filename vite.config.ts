import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fastFoodCatalog/',
  build: {
    outDir: 'docs', // خروجی build بره تو پوشه docs
  },
})
