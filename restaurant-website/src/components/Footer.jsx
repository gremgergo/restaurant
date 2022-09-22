import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
  return (
    <section className='footer'>
      <div>
        <h2>Address</h2>
        <p>Via Salferino, 55/N</p>
        <p>25121 Brescia BS, Italy</p>
      </div>
      <div>
        <h2>Hour</h2>
        <p>Monday - Saturday: 13:00 - 24:00</p>
        <p>Sunday: 13:00 - 18:00</p>
      </div>
      <div>
        <h2>Cotact</h2>
        <h4>Table reservation</h4>
        <p>6980 497 094</p>
        <h4>Corporate events</h4>
        <p>210 7235 006</p>
      </div>
      <div>
        <h2>Social</h2>
        <div>
          <FontAwesomeIcon icon={ faFacebook } />
          <FontAwesomeIcon icon={ faTwitter } /> 
          <FontAwesomeIcon icon={ faInstagram } />
        </div>
      </div>
    </section>
  )
}

export default Footer;