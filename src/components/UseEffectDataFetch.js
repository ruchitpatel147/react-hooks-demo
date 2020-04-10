import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectDataFetch() {

  const [data, setData] = useState({items: [], errorMsg: ''})

  useEffect(() => {
    console.log('sdas');
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData({items: res.data, errorMsg: ''}))
      .catch(e => setData({items: [], errorMsg: 'Error occurred while fetching data'}))
  },[])

  return (
    <div>
      <h1>Data</h1>
      {
        data.items.map((a) => <div key={a.id}>{a.username}</div>)
      }
      {
        data.errorMsg
      }
    </div>
  )
}

export default UseEffectDataFetch