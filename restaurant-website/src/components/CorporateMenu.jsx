import React from 'react';
import { NavLink } from 'react-router-dom';
import salmon from '../img/salmon.jpeg';
import './CorporateMenu.css'

function CorporateMenu() {
  return (
    <div id='corporate-menu'>
        <div className='corporate-left'>
            <h1 className='corporate-title'>corporate events</h1>
            <p className='corporate-article'>Masion dorée hospality comes to you. Whether it is a corporate event, press conference, coffee break, lunch break or your personal private event, choose Maison dorée and enjoy the experience.</p>
            <NavLink to='/corporative-menu'><button className='corporate-button'>corporative menu</button></NavLink>
            <div className='corporate-contact'>
                <div className='corporate-contact-left'>
                    <h6>- Corporate event manager:</h6>
                    <p>Kajetan Zalewski</p>
                </div>
                <div className='corporate-contact-right'>
                    <h6>- Contacts:</h6>
                    <p>kjetan@maisondoree.com</p>
                    <p>210 7235 006</p>
                </div>
            </div>
        </div>
        <div className='corporate-right'>
            <img className='salmon' src={ salmon } alt='salmon' />
        </div>
    </div>
  )
}

export default CorporateMenu