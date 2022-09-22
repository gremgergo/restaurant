import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>get our newsletter</h1> 
        <p className='newsletter-article'>All new, highlight and promotions at a glance! Sign up for our newsletter now!</p>
        <div className='newsletter-input'>
            <input type='email' placeholder='E-mail Adress' />
            <button className='sign-up-button'>sign up</button>
        </div>
    </div>
  )
}

export default Newsletter