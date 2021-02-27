// Code DigitalClicker Component Here

import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            timesClicked:0
        }
    }
    
    handelAdd=()=>{
        this.setState(previousState=>{
            return{
                timesClicked:previousState.timesClicked+1
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handelAdd}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
