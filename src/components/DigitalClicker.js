// Code DigitalClicker Component Here
import React, { Component } from 'react';

class  DigitalClicker extends Component{

    constructor(){
        super();
        this.state={
            timesClicked:0
        }
    }
    handleClick=()=>{
        this.setState(currentClicks=>({
            timesClicked:currentClicks.timesClicked+1
        }))
    }
    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;