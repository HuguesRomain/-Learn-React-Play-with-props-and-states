import React, { Fragment } from 'react'; 

const Button = ({GetAge}) => {
  return(
  <button
  onClick={GetAge}>
    Add year
    </button>
  );
}

export default Button   