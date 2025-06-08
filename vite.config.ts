import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/richman-studio/', // 🔥 ОБЯЗАТЕЛЬНО
  plugins: [react()],
})