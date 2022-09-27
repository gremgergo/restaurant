import React from 'react';
import { FaCaretUp } from 'react-icons/fa';
import './ScrollUpBtn.css';
import { useState, useEffect } from 'react';

function ScrollUpBtn() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
  return (
    <div className='to-top-btn'>
        {" "}
        {showTopBtn && (
            <FaCaretUp
                className='to-top-btn-icon'
                onClick={goToTop}
            />
        )}{" "}
    </div>
  )
}

export default ScrollUpBtn