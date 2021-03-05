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

    bitrate = () => {
        this.setState(prevState => {
            return {
                settings: {
                ...prevState.settings,
                bitrate: 12
                }
            }
        })
    }

    resolution = () => {
        this.setState(prevState => {
            return {
                settings:{
                    ...prevState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrate} >Bitrate</button>
                <button className="resolution" onClick={this.resolution} >Resolution</button>
            </div>
        )
    }
}
