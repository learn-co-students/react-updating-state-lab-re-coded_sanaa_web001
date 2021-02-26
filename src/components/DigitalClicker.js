// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }
    render() {
        return (
            <div>
                <label>times clicked:</label>
                <button onClick={() => this.setState({ timesClicked: this.state.timesClicked + 1 })}>{this.state.timesClicked}</button>

            </div>
        )
    }
}
