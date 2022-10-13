import React from 'react';
import './Newsletter.css';
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';


function Newsletter() {
  const form = useRef();
  const [ open, setOpen ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('md_booking', 'template_c6xzxpp', form.current, 'ijZhsEJs3fx7-7umv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();

    };
    
    useEffect(() => {
        setTimeout(() => {
        setOpen(false);
        sendEmail();
      }, 3000)
    }, [open])

  return (
    <div className='newsletter'>
        <h1>get our newsletter</h1> 
        <p className='newsletter-article'>All new, highlight and promotions at a glance! Sign up for our newsletter now!</p>
        <form 
        className='newsletter-input-sign-up' 
        ref={ form } 
        onSubmit={ sendEmail } > 
          <input className='newsletter-name' type='text' name='name' placeholder='Your name' required />
          <input className='newsletter-email' type='email' name='email' placeholder='E-mail Address' required />
          <button onClick={() => {setOpen(!open)}} className='sign-up-button' type='submit'>Sign up</button>
        </form>
          <Collapse in={ open }>
            <Alert severity="success"  id='alert-newspaper'>
            Thank you for your subscription
            </Alert>
          </Collapse>
    </div>
  )
}

export default Newsletter