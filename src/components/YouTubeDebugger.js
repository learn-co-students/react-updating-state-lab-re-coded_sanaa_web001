import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(){
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
          }
    }

    handleBitrate = ()=>{
        this.setState((prevState)=>{
            return {
                settings: {
                    ...prevState.settings, bitrate: 12
                },
                
            }
        }, ()=>console.log(this.state))
    }

    handleResolution = ()=>{
        this.setState((prev)=>{
           return { settings: {
               ...prev.settings,
                video: {
                    resolution: '720p'
                }
            }
        }}, ()=> console.log(this.state))
    }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
                <br/>
                <button className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>

            </div>
        )
    }
}
