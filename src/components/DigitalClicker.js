// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {


   constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  onClick = () => {
    this.setState(prevState => {
        return {
      timesClicked: prevState.timesClicked+1
    }
    })
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.state.timesClicked}</button>
    );
  }
}
// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {


   constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  onClick = () => {
    this.setState(prevState => {
        return {
      timesClicked: prevState.timesClicked+1
    }
    })
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.state.timesClicked}</button>
    );
  }
}
