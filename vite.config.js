import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // Ensures correct asset paths for Plesk
  plugins: [react()],
})
