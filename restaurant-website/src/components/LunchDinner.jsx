import React from 'react';
import './LunchDinner.css';
import Header from './Header';
import MovingText from 'react-moving-text';

function LunchDinner() {

  return (
    <>
      <Header />
      <div className='lunch-dinner-sub'>
        <MovingText
          className='moving-text'
          type="fadeIn"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none">
          The lunch and dinner menu is on the way...
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

export default LunchDinner