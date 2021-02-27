// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }
    
    handelBitrate=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate:12
            }
        })
    }

    handelResolution=()=>{

        const video={resolution:"720p"};
        this.setState({
            settings:{
                ...this.state.settings,
                video:{resolution:"720p"}
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handelBitrate} className="bitrate"></button>
                <button onClick={this.handelResolution} className="resolution">  </button>
            </div>
        )
    }
}
