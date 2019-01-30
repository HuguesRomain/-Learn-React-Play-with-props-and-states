import React, { Fragment } from 'react';


const Membre = ({ name, age, children }) => {
  return(
    <Fragment>
    <h2> {name} : {age} </h2>
    {children ? <p>{ children }</p> : <Fragment />}
    </Fragment>
  )
}

export default Membre