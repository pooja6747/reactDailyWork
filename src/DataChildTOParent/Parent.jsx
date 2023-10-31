import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [message, setMessage] = useState(12333);

    const changeMessage = (newMessage) => {
        setMessage(newMessage);
    }

    if(message !== String){
        throw new Error("wrong!!!!!!!!!!")
    }

    return (
        <>
            <label>{message}</label>
            <Child changeMessage={changeMessage} />
        </>
    )
}

export default Parent