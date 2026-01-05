import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'app',
    remotes: {
      'react-header': 'http://localhost:5001/assets/remoteEntry.js',
      'react-sidemenu': 'http://localhost:5002/assets/remoteEntry.js',
      'react-content': 'http://localhost:5003/assets/remoteEntry.js'
    },
    shared: ['react', 'react-dom'],
  })],
  server:  {
    port: 5000
  },
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
