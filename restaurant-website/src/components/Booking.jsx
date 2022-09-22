import React from 'react';
import Layout from './Layout';
import './Booking.css';


function Booking() {
  return (
    <Layout>
      <h1 className='booking-title'>maison dorée table reservation</h1>
      <form className='booking'>
        <div className='booking-container'>
          <div className='booking-date-time'>
            <div className='booking-date'>
              <label htmlFor='date'>date</label>
              <input type='date' name='date' className='date' />
            </div>
            <div className='booking-time'>
              <label htmlFor='time'>time</label>
              <input type='time' name='time' className='time' />
            </div>
          </div>
          <label htmlFor='number'>number of people</label>
          <input type='number' name='number' className='booking-number' />
          <div className='details'>
            <div className='booking-name'>
              <div className='booking-first-name'>
                <label htmlFor='first-name'>first name</label>
                <input type='text' name='first-name' className='name' />
              </div>
              <div className='booking-lat-name'>
                <label htmlFor='last-name'>last name</label>
                <input type='text' name='last-name' className='name' />
              </div>
            </div>
            <div className='booking-contact'>
              <div className='booking-email'>
                <label htmlFor='email'>e-mail</label>
                <input type='email' name='email' className='email' />
              </div>
              <div className='booking-tel'>
                <label htmlFor='tel'>telephone</label>
                <input type='tel' name='tel' className='tel' />
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