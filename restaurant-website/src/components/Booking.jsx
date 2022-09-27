import React from 'react';
import Layout from './Layout';
import './Booking.css';


function Booking() {
  return (
    <Layout>
      <h1 className='booking-title'>Maison Dorée table reservation</h1>
      <form className='booking'>
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
          </div>
        </div>
        <button type='submit'>Book Now</button>
      </form>
    </Layout>
  )
}

export default Booking