import React, { useState } from 'react'

function UseCounter(initialCount = 0) {

  const [count, setCount] = useState(initialCount);

  const click = () => {
    setCount(count + 1)
  }

  return {
   count, click
  }
}

export default UseCounter