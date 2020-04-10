import React, { useState } from 'react'

function UseStateObject(){
  const [name, change] = useState({firstName: '', lastName: ''})
  return (
    <div>
      <input type='text' value={name.firstName} onChange={(e) => change({...name, firstName: e.target.value})}/>
      <input type='text' value={name.lastName} onChange={(e) => change({...name, lastName: e.target.value})}/>
      <h1>Your first name is {name.firstName}</h1>
      <h1>Your last name is {name.lastName}</h1>
    </div>
  )
}

export default UseStateObject