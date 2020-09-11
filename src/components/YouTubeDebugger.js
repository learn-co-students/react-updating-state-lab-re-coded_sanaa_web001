// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component{

    constructor(){
        super();
        this.state={
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
    changeBritrate=()=>{
     this.setState({
         settings:{
             ...this.state.settings,
             bitrate:12
             
         }
     })
    }

    changeResolution=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                 ...this.state.video,
                    resolution:'720p'
                }
                    
                
            }
        })
    }
    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.changeBritrate}>Change Bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
            
            </div>
        )
    }
}

export default YouTubeDebugger;