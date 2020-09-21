import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
  this.state ={
      timesClicked: 0
  }
  }
  clicked = () =>{
  this.setState((previousState)=>{
   return {timesClicked: previousState.timesClicked + 1};
  })
  }
  render() {
    return (
      <div>
      <button onClick={this.clicked}>{this.state.timesClicked}</button>
        </div>
    );
  }
}

export default DigitalClicker;
 
