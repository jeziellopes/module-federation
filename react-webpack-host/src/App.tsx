import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from "host/store";
import '@shared/styles/App.css'
import "@shared/styles/global.css";

import { About, Examples } from './components'

function App() {
  return (
    <div className="container">
      <About/>
      <Examples />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)

  


