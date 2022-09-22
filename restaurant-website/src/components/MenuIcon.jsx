import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import './MenuIcon.css'



function MenuIcon() {
  return (
    <div>
      <button className='menu-button'>
        <FontAwesomeIcon icon={ faEllipsisVertical } />
      </button>
    </div>
  )
}

export default MenuIcon