import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    darkMode: 'class', // التبديل عبر الفئة
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-text': '#e4e4e4',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})


// tailwind.config.js
