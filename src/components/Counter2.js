import React from 'react'
import UseCounter from './CustomHooks/UseCounter'

function Counter2 (){

  const {count, click} = UseCounter(10);

  return (
    <div>
      <h1>Counter 2 :- {count}</h1>
      <button onClick={click}>Increment</button>
    </div>
  )
}

export default Counter2