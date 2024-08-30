import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign_in from './pages/Sign_in'
import Sign_up from './pages/Sign_up'
import { createBrowserRouter,RouterProvider ,Outlet } from 'react-router-dom';
import CNavbar from './compents/CNavbar'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<div>< CNavbar/> 
       <div><Outlet /></div>
       </div>),
       children:[
        {
          path:"Sign_in",
          element:<Sign_in/>
        },
        {
          path: "Sign_up",
          element: <Sign_up />
        } 
      ]
    },
  ]);
  return (
    <>
       
       <RouterProvider router={router} />
      
    </>
  )
}

export default App

      
             
