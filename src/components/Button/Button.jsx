import React from 'react';
import './Button.css';

function Button({ background, handleOnClick }) {
   return (
      <button
         className='random-quote-button'
         style={{ background }}
         onClick={handleOnClick}
      >
         <i className='fa-solid fa-shuffle'></i>
      </button>
   );
}

export default Button;
