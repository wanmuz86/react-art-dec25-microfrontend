import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { registerMicroApps, start } from 'qiankun'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 1) Code to process the registration of microapp in the host app
registerMicroApps([
  {
    name:'react-app',
    entry:'//localhost:4173/micro-app/',
    container:'#micro-app-container',
    activeRule:'/app' // everything that starts with app will go to microApp
  }
])

start()
