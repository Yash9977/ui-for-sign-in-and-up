import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Form_email() {
  const [email, setemail] = useState(""); 
  const [password, setpassword] = useState(""); 
  const [result, setResult] = useState("");
  function handleSubmit(e) { 
    e.preventDefault(); 
    
    getapi() 
} 
var getapi =async() =>{
  const url = "http://127.0.0.1:8000/student/"  
 const req = await axios.post(url,{email:email,password:password}) 
 console.log(req.data)
}
 
  return (
    <>
      <Form onSubmit={handleSubmit}>
        
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        
      >
        <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
      </FloatingLabel>
      <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
      {result && <div className="mt-3">{result}</div>}
    </>
  );
}

export default Form_email;