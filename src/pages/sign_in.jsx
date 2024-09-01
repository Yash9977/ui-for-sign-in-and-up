import React, { useEffect } from 'react'
import CNavbar from '../compents/CNavbar';
import Form_email from '../compents/Form_email';
import Submit from '../compents/Submit';
import  '../compents/css/submit.css'
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom"; 
import axios from 'axios';

const Sign_in = () => {
  var getapi =async() =>{
    const url = "http://127.0.0.1:8000/student/"  
   const req = await axios.get(url) 
   console.log(req)
  }
   useEffect(() =>{
     getapi()
   },[])
    return (
    <div>
      
       
       <Form_email/>
       {[
        'primary',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          
          <Link to="http://localhost:5173/sign_up">sign up</Link>
         
        </Alert>
      ))}
       <div className='submit'>
       <Submit/>
       </div>
    </div>
  )
}

export default Sign_in
