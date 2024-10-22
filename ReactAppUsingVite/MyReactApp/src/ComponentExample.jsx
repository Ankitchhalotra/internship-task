import React, { useState } from 'react' 

const ComponentExample = (props) =>{

  return (
    <>

   <div>
    <hr />
    <h1>{props.info.name}</h1>
    <p>College = CDGI</p>
    <p>Course = CSE</p>
    <p>age = {props.info.age}</p>
    <p>Section = A</p>
    </div>
    </>
  )
}

export default ComponentExample