import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'react-sidemenu',
    filename: 'remoteEntry.js',
    exposes: {
        './SideMenu': './src/components/SideMenu/index.tsx',
    },
    shared: ['react'],
  })],
  preview: {
    host: 'localhost',
    port: 5002,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
