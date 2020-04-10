import React from 'react'
import UseCounter from './CustomHooks/UseCounter'

function Counter1 (){

  const {count, click} = UseCounter();
  return (
    <div>
      <h1>Counter 1 :- {count}</h1>
      <button onClick={click}>Increment</button>
    </div>
  )
}

export default Counter1