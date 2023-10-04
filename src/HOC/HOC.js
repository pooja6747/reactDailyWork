import React from 'react'

const HOC = (props) => {
    return (
        <>
        <h2>Red Counter</h2>
        <h4>{props.cmp}</h4>
        </>
    )
}

export default HOC