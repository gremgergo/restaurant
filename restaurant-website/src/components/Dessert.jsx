import React from 'react';
import './Dessert.css';
import Header from './Header';
import MovingText from 'react-moving-text';

function Dessert() {
  return (
    <>
    <Header />
    <div className='menu-sub'>
      <MovingText
        className='moving-text'
        type="fadeIn"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease-in"
        iteration="1"
        fillMode="none">
        The dessert menu is on the way...
      </MovingText>
      <MovingText
        className='moving-text'
        type="fadeIn"
        duration="6000ms"
        delay="0s"
        direction="normal"
        timing="ease-in"
        iteration="1"
        fillMode="none">
        Thank you for your patience.
      </MovingText>
    </div> 
  </>
  )
}

export default Dessert