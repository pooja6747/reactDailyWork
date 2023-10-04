import React, { createContext } from 'react'
import ChildA from './ChildA'

let data = createContext();
let data1 = createContext();
const Parent = () => {
  const name = "sona";
  const gender = "female"
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>

      </data.Provider>

    </>
  )
}

export default Parent
export { data ,data1}