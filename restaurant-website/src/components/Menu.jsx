import React from 'react';
import { NavLink } from 'react-router-dom';
import food from '../img/food.jpeg';
import dessert from '../img/muffin.jpeg';
import drinks from '../img/drinks.jpeg';
import './Menu.css';

function Menu() {
  return (
    <div id='menu'>
        <div className='menu-top'>
            <h1 className='menu-title'>menu</h1>
            <p className='menu-article'>Masion dorée philosophy is based on friends sharing dishes: sampling, tasting, enjoying. The menu changes with season and the kitchen is continually evolving. The menu features: salads, cold dishes, raw, wooden oven, charcoal, casserole, fitters, and dessert.</p>
        </div>
        <div className='menu-bottom'>
            <NavLink className='menu-container' to='/lunch-dinner'>
              <img className='lunch-dinner' src={ food } alt='food' />
              <div className='middle'>
                <div className='menu-name'>Lunch / Dinner</div>
                <div className='menu-name-bottom'>Let's see lunch / dinner</div>
              </div>
              </NavLink>
            <NavLink className='menu-container' to='/dessert'>
              <img className='dessert' src={ dessert } alt='dessert' />
              <div className='middle'>
                <div className='menu-name'>Dessert</div>
                <div className='menu-name-bottom'>Let's see dessert</div>
              </div>
              </NavLink>
            <NavLink className='menu-container' to='/drinks'>
              <img className='drinks' src={ drinks } alt='drinks' />
              <div className='middle'>
                <div className='menu-name'>Drinks</div>
                <div className='menu-name-bottom'>Let's see drinks</div>
              </div>
              </NavLink>
        </div>
    </div>
  )
}

export default Menu