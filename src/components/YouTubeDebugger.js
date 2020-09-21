// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
 
constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }
   changeBir = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  changeReso = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });}
  
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBir}>
          bitrate change 
        </button>
        <button className="resolution" onClick={this.changeReso}>
          resolution change 
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;