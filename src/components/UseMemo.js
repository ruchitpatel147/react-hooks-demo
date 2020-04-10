import React, { useState , useMemo} from 'react'

function UseMemo(){
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increCount1 = () => {
    setCount1(count1 + 1)
  }

  const increCount2 = () => {
    setCount2(count2 + 1)
  }

  const isEven = useMemo(() => {
    let i = 0 ;
    while(i< 200000000) i++
    return count1 % 2 === 0;
  }, [count1])

  return (
    <div>
      <button onClick={increCount1}>Count1 is: {count1}</button>
      <span>{isEven ? 'even' : 'odd'}</span><br/>
      <button onClick={increCount2}>Count2 is: {count2}</button>
    </div>
  )
}

export default UseMemo