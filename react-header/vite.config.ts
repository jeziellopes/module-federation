import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'react-header',
    filename: 'remoteEntry.js',
    exposes: {
        './Header': './src/components/Header/index.tsx',
    },
    shared: ['react'],
  })],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
})
