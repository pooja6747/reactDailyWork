import React, { Component } from 'react'

export default class Demo extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        console.log("constructor : before page loading want to initilize something")
    }

    //user define function
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    ///Mounting - When 1st time component render
    componentDidMount() {
        console.log("componentDidMount : When 1st time component render")
    }

    //updating - componentDidUpdate
    componentDidUpdate(prevprops, prevstate) {
        console.log("Component update")

    }


    // static getDerivedStateFromProps(props) {
    //     console.log("getderivedStateFromProps", props)
    // }


    render() {
        console.log("render : browser understanding transpiler or babel use in the browser bcoz jsx not ubderstand by browser")

        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrement}>CLick me</button>
            </>
        )
    }
}
