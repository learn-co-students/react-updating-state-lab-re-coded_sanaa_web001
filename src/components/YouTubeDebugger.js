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
  bitrateSitting = ()=>{
      this.setState({
              settings: {...this.state.settings,
              bitrate:12
          }
      })
  }
  resolutionSitting = ()=>{
      this.setState({
          settings: { ...this.state.settings,
          resolution: '720p'
          }
      });
  };

  render() {
    return (
      <div>
      <button onClick={this.bitrateSitting} className="bitrate">Change Bitrate: {this.state.settings.bitrate}</button>
      <button onClick={this.resolutionSitting} className="resolution">Change Resolution: {this.state.settings.resolution}</button>
        </div>
    );
  }
}

export default YouTubeDebugger;
 
