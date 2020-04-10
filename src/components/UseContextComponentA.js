import React, { useContext } from 'react'
import {hello} from './../App'

function UseContextComponentA(){

  const user = useContext(hello);
  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  )
}

export default UseContextComponentA