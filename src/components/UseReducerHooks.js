import React, { useReducer, useState } from 'react'

const ADD_CAKE = 'ADD_CAKE'
const REMOVE_CAKE = 'REMOVE_CAKE'

const addCake = () => {
  return {
    type: ADD_CAKE
  }
}
const removeCake = () => {
  return {
    type: REMOVE_CAKE
  }
}

function UseReducerHooks(){
  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_CAKE:
        return {
          count: state.count + 1
        }
      case REMOVE_CAKE:
        return {
          count: state.count - 1
        }
      default:
        return state
    }
  }

  const [data1,dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Number of cakes {data1.count}</h1>
      <button onClick={() => dispatch(addCake())}>Increment</button>
      <button onClick={() => dispatch(removeCake())}>Decrement  </button>
    </div>
  )
}

export default UseReducerHooks