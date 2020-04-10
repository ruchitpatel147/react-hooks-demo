import React, { useState, useEffect } from 'react'

function UseEffectWithEvent() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    console.log('use Effect');
    window.addEventListener('mousemove', position)
  }, []);

  const position = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  }

  return (
    <div>
      <h1>x is : {x} and y is : {y}</h1>
    </div>
  )
}

export default UseEffectWithEvent