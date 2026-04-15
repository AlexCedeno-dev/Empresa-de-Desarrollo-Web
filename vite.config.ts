import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // React y Tailwind son necesarios para Make, aunque Tailwind no se use activamente – no los elimines
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ apunta al directorio src
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Tipos de archivo que soportan importación raw. Nunca agregues .css, .tsx o .ts aquí.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
