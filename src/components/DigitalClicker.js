// Code DigitalClicker Component Here
import React from 'react';
export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  updateTimeClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    });
  };

  render() {
    return(
      <div>
        <h1> times clicked: {this.state.timesClicked} </h1>
        <button onClick={ this.updateTimeClick }>{this.state.timesClicked}</button>
      </div>
    )
  }
}
