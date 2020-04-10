import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_DATA = 'FETCH_DATA';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  records: [],
  errorMsg: ''
}
const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data
  }
}

const fetchError = (data) => {
  return {
    type: FETCH_ERROR,
    payload: data
  }
}

/*const getRequest = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log('res', res);
        dispatch(fetchData(res.data))
      }).catch(e => {
        dispatch(fetchError('Error occurred while calling API'))
    })
  }
}*/
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_DATA:
      return {
        loading: false,
        records: action.payload,
        errorMsg: ''
      }
    case FETCH_ERROR:
      return {
        records: [],
        loading: false,
        errorMsg: action.payload
      }
    default:
      return state
  }
}

function UseReducerDataFetch() {

  const [data,dispatch] = useReducer(reducer, initialState);

  console.log('Data', data);

  useEffect(() => {
    dispatch(fetchRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log('res', res);
        dispatch(fetchData(res.data))
      }).catch(e => {
      dispatch(fetchError('Error occurred while calling API'))
    })
  }, [])

  return (
    <div>
      <h1>Record</h1>
      {
        data.loading? <div> Loading </div>: null
      }
      {
        data.records.map((a) => <div key={a.id}>{a.username}</div>)
      }
      {
        data.errorMsg
      }
    </div>
  )
}

export default UseReducerDataFetch