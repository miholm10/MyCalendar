import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

//vite.config.ts is the brain of your React + TypeScript build process.It makes development fast, hot-reload instant, and production builds optimized.