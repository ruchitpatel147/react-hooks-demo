import React from 'react'

function Count(props) {
  console.log(`Count ${props.value}`);
  return (
    <div>
      <h1>count {props.value} is : {props.count}</h1>
    </div>
  )
}

export default React.memo(Count)