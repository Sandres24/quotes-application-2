import React, { useState } from 'react';
import './QuoteBox.css';
import quotes from '../../sample/quotes.json';
import Button from '../Button/Button';
import { randomColor, randomNumber } from '../../helpers/randomGenerators';

function QuoteBox() {
   const [index, setIndex] = useState(randomNumber({ limit: quotes.length }));
   const color = randomColor();

   document.body.style.background = color;

   const handleChangeQuote = () =>
      setIndex(randomNumber({ limit: quotes.length }));

   return (
      <div className='quote-box' style={{ color }}>
         <div className='quote-sign open-quote'>
            <i className='fa-solid fa-quote-left'></i>
         </div>
         <blockquote className='quote-text'>
            <span className='quote-cite'>{quotes[index].quote}</span>
            <cite className='quote-author'>
               <small>{quotes[index].author}</small>
            </cite>
         </blockquote>
         <div className='quote-sign close-quote'>
            <i className='fa-solid fa-quote-right'></i>
         </div>

         <Button background={color} handleOnClick={handleChangeQuote} />
      </div>
   );
}

export default QuoteBox;
