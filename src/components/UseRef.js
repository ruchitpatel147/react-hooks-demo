import React, { useRef, useEffect } from 'react'

function UseRef (){

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, [])

  return (
    <div>
      <input type='text' ref={ref}/>
    </div>
  )
}

export default UseRef