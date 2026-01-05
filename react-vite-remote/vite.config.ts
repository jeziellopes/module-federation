import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'remote',
    filename: 'remoteEntry.js',
    exposes: {
      './Content': './src/components/Content/index.tsx',
      './Header': './src/components/Header/index.tsx',
      './SideMenu': './src/components/SideMenu/index.tsx',
    },
    shared: ['react', 'react-dom'],
  })],
  preview: {
    host: 'localhost',
    port: 5003,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
