
  import { createRoot } from 'react-dom/client'
  import type { Root } from 'react-dom/client'
  import './index.css'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  import Home from './components/Home.tsx'
  import Detail from './components/Detail.tsx'
  import App from './App.tsx'
import { useEffect } from 'react'


  let root: Root | null = null;


  function renderApp(props: MicroAppProps = {}) {
    const container = document.getElementById('root')
    if (container) {
      root = createRoot(container)
      root.render(
        <AppRouter {...props}/>
          ,
      )
    }
  }

  export async function bootstrap() {
    console.log("Micro app bottstrapeed")
  }

  // The data is retieved from mount lifecycle method
  export async function mount(props: MicroAppProps) {
    console.log("Micro app mouted", props)
    // Pass the qiankun props to the component
    renderApp(props)

  }

  export async function unmount() {
    console.log('Micro app unmounted')
    if (root) {
      root.unmount();
      root = null
    }

  }

  // If the url i called from the host app, I will call the 3 method bootstrap, mount , unmout
  // if not, simply render app

  // this is how we now if the page is a microapp or we call right away from the url
  if (window.__POWERED_BY_QIANKUN__) {
    window['micro-app'] = { bootstrap, mount, unmount }
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

  function AppRouter(props:MicroAppProps){

    useEffect(()=>{
      if (props.initialData){
        console.log('Received intial data:', props.initialData.message);
      }

    }, [props]);

    const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/details",
      element: <Detail {...props} />
    },
    {
      path: "*",
      element: <App />
    }
  ], {
    basename: getBasename() // a function , either /app or /micro-app
  })
  return <RouterProvider router={router} />
  }
  