import React, { useEffect, useState } from 'react'

function UseEffect() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('dsdsds');
      document.title = `You clicked ${count} times`
  }, []);


  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
     <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffect