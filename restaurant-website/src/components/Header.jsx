import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css';
import MenuIcon from './MenuIcon';

function Header() {
  return (
    <div className='header'>
      <nav className='header-link'>
        <p>6980 497 094</p>
        <NavLink className='home-title' to='/'>Maison Dorée</NavLink>
        
        <button className='book-now'><NavLink to='/booking'>Book Now</NavLink></button>
          
        <MenuIcon />
      </nav>
    </div>
  )
}

export default Header