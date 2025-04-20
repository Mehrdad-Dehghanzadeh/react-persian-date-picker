import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@components': resolve(__dirname, 'src/components')
    }
  },

  plugins: [react()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-persian-date-picker',
      fileName: 'index'
    },

    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],

      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    }
  }
})
