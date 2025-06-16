// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/richman-studio/'  // ваш репо-путь
    : '/',
  plugins: [react()],
})
