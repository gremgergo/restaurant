import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
  return (
    <section className='footer'>
      <div className='address'>
        <h2>Address</h2>
        <p>Via Salferino, 55/N</p>
        <p>25121 Brescia BS, Italy</p>
      </div>
      <div className='hour'>
        <h2>Hour</h2>
        <p>Monday - Saturday: 13:00 - 24:00</p>
        <p>Sunday: 13:00 - 18:00</p>
      </div>
      <div className='contact'>
        <h2>Contact</h2>
        <h4>Table reservation</h4>
        <p>6980 497 094</p>
        <h4>Corporate events</h4>
        <p>210 7235 006</p>
      </div>
      <div className='social'>
        <h2>Social</h2>
        <div className='social-icon'>
          <FontAwesomeIcon className='social-icon-each' icon={ faFacebook } />
          <FontAwesomeIcon className='social-icon-each' icon={ faTwitter } /> 
          <FontAwesomeIcon className='social-icon-each' icon={ faInstagram } />
        </div>
      </div>
    </section>
  )
}

export default Footer;