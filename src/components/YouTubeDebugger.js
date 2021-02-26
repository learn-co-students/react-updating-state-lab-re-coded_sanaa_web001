// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
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
    render() {
        return (
            <div>
                <button className='bitrate' onClick={() => this.setState({
                    ...this.state, settings: {
                        bitrate: 12,
                        video: {
                            resolution: this.state.settings.video.resolution
                        }
                    }
                })}>bitrate</button>
                <button className='resolution' onClick={() => this.setState({
                    ...this.state, settings: {
                        bitrate: this.state.settings.bitrate,
                        video: {
                            resolution: '720p'
                        }
                    }
                })}>resolution</button>
            </div >
        )
    }
}
