import React, { Fragment } from 'react';


const Membre = ({ name, age, children, hideName }) => {
  return(
    <Fragment>
    <h2 style={{
      backgroundColor: age > 40 ? 'red' : 'green', 
      color: 'white'}}> 
      {name} : {age} </h2>
      <button 
      onClick={hideName}
      className='GetAge'>X</button>
    {children ? <p>{ children }</p> : <Fragment />}
    </Fragment>
  )
}

export default Membre