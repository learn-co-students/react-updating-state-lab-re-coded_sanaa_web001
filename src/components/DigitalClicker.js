// Code DigitalClicker Component Here
import React, { Component } from "react";

export class DigitalClicker extends Component {
  state = {
    timesClicked: 0,
  };
  handleClick = () => {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  };
  // The component renders out a button with a label that shows the timesClicked value.
  //  This means that, at the start, your button should just say 0.
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
