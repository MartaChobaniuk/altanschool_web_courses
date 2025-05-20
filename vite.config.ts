import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/altanschool_web_courses/',
  plugins: [react()],
  server: {
    open: true,
  },
})
