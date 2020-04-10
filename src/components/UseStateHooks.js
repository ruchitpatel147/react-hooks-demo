import React, {useState} from 'react'

function UseStateHooks() {

  const [count, setName] = useState({count: 0});

  const incrCount = () => {
    setName((prevState) => ({count: prevState.count + 1}))
  }

  const decrCount = () => {
    setName((prevState) => ({count: prevState.count - 1}))
  }

  const reset = () => {
    setName({count: 0})
  }

  return (
    <div>
      <h1>Hello {count.count}</h1>
      <button onClick={incrCount}>Increment</button>
      <button onClick={decrCount}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>

  )
}

export default UseStateHooks