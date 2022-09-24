import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>get our newsletter</h1> 
        <p className='newsletter-article'>All new, highlight and promotions at a glance! Sign up for our newsletter now!</p>
        <div className='newsletter-input-sign-up'>
            <input className='newsletter-input' type='email' placeholder='E-mail Address' />
            <button className='sign-up-button'>Sign up</button>
        </div>
    </div>
  )
}

export default Newsletter