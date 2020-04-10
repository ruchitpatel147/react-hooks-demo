import React from 'react'

function Button(props) {
  console.log(`Button ${props.value}`);
  return (
    <div>
      <button onClick={props.click} >{props.value}</button>
    </div>
  )
}

export default React.memo(Button)