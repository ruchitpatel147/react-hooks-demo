import React, { useEffect, useState } from 'react'

function useUpdateDocument () {

  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count+1)
  }

  useEffect(() => {
    document.title = `Count is ${count}`
  }, [count]);

  return {
    count: count,
    clickOne: click
  }
}

export default useUpdateDocument