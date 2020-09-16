// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };
  handleClickBitrate = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: "1080p",
        },
      },
    });
  };
  handleClickResolution = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        },
      },
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBitrate}>
          {this.state.settings.bitrate}
        </button>

        <button className="resolution" onClick={this.handleClickResolution}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
