import React, { useState, useEffect } from 'react'
import useUpdateDocument from './CustomHooks/UpdateDocument'

function CustomHooks() {
  /*const [count, setCount] = useState(0);

  const click = () => {
    setCount(count+1)
  }*/

  let {clickOne, count } = useUpdateDocument();

  /*useEffect(() => {
    document.title = `Count is ${count}`
  }, [count])*/

  return (
    <div>
      <button onClick={clickOne}>Increment {count}</button>
    </div>
  )
}

export default CustomHooks