import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { name } from './package.json';

// https://vite.dev/config/
// Server configuration to ensure the mode = production / development
// to specify the port / 4173
// to allow cors so no issue for micro app to communicate with host-app

export default defineConfig({
  plugins: [react()],
   base: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
   build:{
    target:'esnext',
    outDir:'dist'
   },
   server: {
    port:4173,
    cors:true,
    headers:{
      'Access-Control-Allow-Origin':"*"
    }
   },
   define:{
    'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV || 'development')
   }
 
})
