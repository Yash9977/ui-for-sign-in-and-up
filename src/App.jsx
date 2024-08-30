import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CNavbar from './compents/CNavbar';
import Form_email from './compents/Form_email';
import Submit from './compents/submit';
import  './compents/css/submit.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
       <CNavbar />
       </div>
       <div>
       <Form_email/>
       </div>
       <div className='submit'>
       <Submit/>
       </div>
      
      
    </>
  )
}

export default App

      
             
