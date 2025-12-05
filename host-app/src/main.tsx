import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { registerMicroApps, start } from 'qiankun'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Define the routes
// eg / -> APp
// everything that starts with /app -> microapp
// 404 case
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/app/*',
    element:<div id="micro-app-container"></div>
  },
  {
    path:"*",
    element:<div>Page not found</div>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
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


start({
  sandbox:{
    strictStyleIsolation:true // Additional setup each microapp run on it's own isolation
  }
})
