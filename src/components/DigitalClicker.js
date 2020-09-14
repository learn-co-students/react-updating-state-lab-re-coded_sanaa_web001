// Code DigitalClicker Component Here
import React, { Component } from "react";
export default class DigitalClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState((prev) => {
      return { timesClicked: prev.timesClicked + 1 };
    });
  };
  render() {
    return (
      <button onClick={this.handleClick} name="count">
        {this.state.timesClicked}
      </button>
    );
  }
}