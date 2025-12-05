import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.tsx'
import Detail from './components/Detail.tsx'
import App from './App.tsx'


let root:Root | null = null;


function renderApp() {
  root = createRoot(document.getElementById('root')!)
  root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

}

export async function bootstrap(){
  console.log("Micro app bottstrapeed")
}

export async function mount(props:any){
  console.log("Micro app mouted", props)
  renderApp()

}

export async function unmount(){
  console.log('Micro app unmounted')
  if (root){
    root.unmount();
    root = null
  }

}

// If the url i called from the host app, I will call the 3 method bootstrap, mount , unmout
// if not, simply render app

// this is how we now if the page is a microapp or we call right away from the url
if (window.__POWERED_BY_QIANKUN__){
  window['micro-app'] = {bootstrap, mount, unmount}
}
else {
  renderApp() // show it directly : http://localhost:4173/micro-app/
}

const getBasename = () => {
  if (window.__POWERED_BY_QIANKUN__) {
    return '/app'
  }
  else {
    return '/micro-app'
  }
}

/// Create the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/details",
    element:<Detail/>
  },
  {
    path:"*",
    element:<App/>
  }
], {
  basename:getBasename() // a function , either /app or /micro-app
})