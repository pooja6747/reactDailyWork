import React, { useContext } from 'react'
import { data, data1 } from './Parent'

const ChildC = () => {
    const Fname = useContext(data);
    const Rgender = useContext(data1);
    return (
        <>
<h1>Hi, my name is {Fname}, genderv is {Rgender}</h1>
        </>
    )
}

export default ChildC