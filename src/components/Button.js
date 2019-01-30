import React, { Fragment } from 'react'; 
import "./Button.css"; 

const Button = ({GetAge}) => {
  return(
  <button
  className='GetAge'
  onClick={GetAge}>
    Add 2 years
    </button>
  );
}

export default Button   