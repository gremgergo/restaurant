import React from 'react';
import { NavLink } from 'react-router-dom';
import food from '../img/food.jpeg';
import dessert from '../img/muffin.jpeg';
import drinks from '../img/drinks.jpeg';
import './Menu.css';

function Menu() {
  return (
    <div className='menu'>
        <div className='menu-top'>
            <h1 className='menu-title'>menu</h1>
            <p className='menu-article'>Masion dorée philosophy is based on friends sharing dishes: sampling, tasting, enjoying. The menu changes with season and the kitchen is continually evolving. The menu features: salads, cold dishes, raw, wooden oven, charcoal, casserole, fitters, and dessert.</p>
        </div>
        <div className='menu-bottom'>
            <NavLink to='/lunch-dinner'><img className='lunch-dinner' src={ food } alt='food' /></NavLink>
            <NavLink to='/dessert'><img className='dessert' src={ dessert } alt='dessert' /></NavLink>
            <NavLink to='/drinks'><img className='drinks' src={ drinks } alt='drinks' /></NavLink>
        </div>
    </div>
  )
}

export default Menu