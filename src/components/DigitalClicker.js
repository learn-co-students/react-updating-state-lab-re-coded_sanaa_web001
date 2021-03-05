// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    handleclick = () => {
        this.setState(prevState => {
            return {
            timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleclick} >{this.state.timesClicked}</button>
            </div>
        )
    }
}
