import React, { createContext } from 'react'
import ChildA from './ChildA'

const data = createContext();
const data1 = createContext();


const Parent = () => {

    const name = "XYZ"
    const gender = "hh"
    return (
        <data.Provider value={name}>
            <data1.Provider value={gender}>
                <ChildA />
            </data1.Provider>

        </data.Provider>

    )
}

export default Parent
export { data, data1 }