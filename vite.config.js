import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

console.log('INITIALIZING VITE')

export default defineConfig({
  plugins: [
    Vue()
  ]
})
