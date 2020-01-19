// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
    constructor(){
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

    handleBitRateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            video: {
                resolution: `720p`
            }
        }})
    }

    render(){
        return(
        <div>
            <button onClick={this.handleBitRateClick} className={`bitrate`}>change bit rate</button>
            <button onClick={this.handleResolutionClick} className={'resolution'}>change resolution</button>
        </div>
        )
    }
}