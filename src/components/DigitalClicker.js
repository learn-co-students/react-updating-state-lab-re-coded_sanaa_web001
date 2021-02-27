import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }


  render() {
    return (
      <button onClick={() => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }}>{this.state.timesClicked}</button>
    );
  }
}
