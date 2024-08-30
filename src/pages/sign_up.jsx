import React from 'react'
import CNavbar from '../compents/CNavbar';
import Form_email from '../compents/Form_email';
import Submit from '../compents/Submit';
import  '../compents/css/submit.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'; 
 
const Sign_up = () => {
   return (
     <div>
       <div>
       <CNavbar />
       </div>
       <div>
       <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
       </InputGroup>
       <Form_email/>
       </div>
       <div className='submit'>
       <Submit/>
       </div>
     </div>
   )
 }
 
 export default Sign_up
 