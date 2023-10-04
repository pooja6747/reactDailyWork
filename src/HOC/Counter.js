import React, { useState } from 'react'

const Counter = () => {
    const [ count, setCount]=useState(0)
  return (
    <>
    <h3>{count}</h3>
    <button onClick={()=> setCount(count+1)}>UPDATE</button>
    </>
  )
}

export default Counter