import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css';
import MenuIcon from './MenuIcon';

function Header() {
  return (
    <div className='header'>
      <nav className='header-link'>
        <p className='header-tel'>6980 497 094</p>
        <NavLink className='home-title' to='/'><h1>Maison Dorée</h1></NavLink>
        
        <button className='book-now'><NavLink to='/booking'>Book now</NavLink></button>
          
        <MenuIcon />
      </nav>
    </div>
  )
}

export default Header