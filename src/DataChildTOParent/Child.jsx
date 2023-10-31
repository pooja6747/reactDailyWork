import React from 'react'

const Child = ({ changeMessage }) => {
    const ClickHandler = () => {
        changeMessage("Goodbye!");
    }
    return (
        <button onClick={ClickHandler}>Show Goodbye</button>
    )
}

export default Child