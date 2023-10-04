import React, { useEffect } from 'react'

const FunctionLifecycle = () => {
    //componentDidMount - mounting
    useEffect(() => {
        console.log("functional componentDidMount");
    })

    //updating
    useEffect(() => {
        console.log("functional updating");

    }, [])

    //unmount
    useEffect(() => {
        return () => {
            console.log("functional compo : remove any item");
        }
    })
    return (
        <div>FunctionLifecycle</div>
    )
}

export default FunctionLifecycle