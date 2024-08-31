import React from 'react'
import CNavbar from '../compents/CNavbar';
import Form_email from '../compents/Form_email';
import Submit from '../compents/Submit';
import  '../compents/css/submit.css'


const Sign_in = () => {
  
    return (
    <div>
      
       
       <Form_email/>
       
       <div className='submit'>
       <Submit/>
       </div>
    </div>
  )
}

export default Sign_in
