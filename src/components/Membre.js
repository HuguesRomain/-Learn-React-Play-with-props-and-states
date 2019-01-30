import React, { Fragment } from 'react';


const Membre = ({ name, age, children }) => {
  return(
    <Fragment>
    <h2 style={{
      backgroundColor: age > 40 ? 'red' : 'green', 
      color: 'white'}}> 
      {name} : {age} </h2>
    {children ? <p>{ children }</p> : <Fragment />}
    </Fragment>
  )
}

export default Membre