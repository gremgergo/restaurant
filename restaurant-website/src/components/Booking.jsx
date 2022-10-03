import React, { useState } from 'react';
import Layout from './Layout';
import './Booking.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';


function Booking() {
  const form = useRef();
  const [status, setStatus] = useState(undefined);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Test_Gmail', 'template_woizd24', form.current, 'ijZhsEJs3fx7-7umv')
      .then((result) => {
          console.log(result.text);
          setStatus({ type: 'success'});
      }, (error) => {
          console.log(error.text);
          setStatus({ type: 'error', error});
      });
      form.current.reset();
  };


  return (

    <Layout>

      <h1 className='booking-title'>Maison Dorée table reservation</h1>
      <>
        {status?.type === 'success' && <Alert severity="success" color="info">
      This is a success alert — check it out!
      </Alert>}
        {status?.type === 'error' && <Alert severity="error" color="info">
      This is a success alert — check it out!
      </Alert>}
      </>
      
      <form className='booking' ref={ form } onSubmit={ sendEmail } >
        <div className='booking-container'>
          <div className='booking-date-time-number'>
            <div className='booking-date'>
              <label htmlFor='date'>date</label>
              <input type='date' name='date' className='date' />
            </div>
            <div className='booking-time'>
              <label htmlFor='time'>time</label>
              <input type='time' name='time' className='time' />
            </div>
            <div className='booking-number'>
              <label htmlFor='number'>number of people</label>
              <input type='number' name='number' className='number' />
            </div>
          </div>
          <div className='details'>
            <div className='booking-name'>
              <div className='booking-first-name'>
                <label htmlFor='first-name'>first name</label>
                <input type='text' name='first-name' className='name' placeholder='e.g.: John' />
              </div>
              <div className='booking-last-name'>
                <label htmlFor='last-name'>last name</label>
                <input type='text' name='last-name' className='name' placeholder='e.g.: Doe'/>
              </div>
            </div>
            <div className='booking-contact'>
              <div className='booking-email'>
                <label htmlFor='email'>e-mail</label>
                <input type='email' name='email' className='email' placeholder='e.g.: john.doe@maisondoree.com' required=''/>
              </div>
              <div className='booking-tel'>
                <label htmlFor='tel'>telephone</label>
                <input type='tel' name='tel' className='tel' placeholder='e.g.: 123-456-789' required=''/>
              </div>
            </div>
            <div className='booking-comment'>
              <label htmlFor='comment'>comment</label>
              <textarea name='comment' className='comment' cols="30" rows="10" placeholder='Share anything with us..'></textarea>
            </div>
          </div>
        </div>
        <button type='submit' value='send'>Book Now</button>
      </form>

    </Layout>

  )
}

export default Booking