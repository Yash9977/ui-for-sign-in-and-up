import React,{useEffect} from 'react'
import CNavbar from '../compents/CNavbar';
import Form_email from '../compents/Form_email';
import Submit from '../compents/Submit';
import  '../compents/css/submit.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'; 
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom"; 
import axios from 'axios';

const Sign_up = () => {
  var getapi =async() =>{
    const url = "http://127.0.0.1:8000/Generics_View/"  
   const req = await axios.get(url) 
   console.log(req.data)
  }
   useEffect(() =>{
     getapi()
   },[]) 
  return (
     <div>
       
       <div>
       <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
       </InputGroup>
       <Form_email/>
       </div>
       <div>
       <>
      {[
        'primary',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          
          <Link to="http://localhost:5173/sign_in">sign in</Link>
         
        </Alert>
      ))}
     </>
       </div>
       
     </div>
   )
 }
 
 export default Sign_up
 