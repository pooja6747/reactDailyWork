import React, { Component } from 'react'

export default class Errorboundry extends Component {

    state = {
        error: ''
    }

    static getDerivedFromError(error) {
        return {
            error: error
        }
    }

    componentDidCatch(error, info) {
        console.log("error is: ", error)
        console.log("info is: ", info)
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <div>Errorboundry Work..............Something went wrong!!!!!</div>
                    <h1>{this.state.error}</h1>
                </>
            )
        }
        return this.props.children

    }
}
