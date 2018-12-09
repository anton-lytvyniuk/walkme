import YouTube from 'react-youtube';
import React, { Component } from 'react';

class VideoPlayer extends Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        const { videoId } = this.props;

        if (videoId)
            return (
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={this._onReady}
                />
            );
        return <div></div>
    }
}

export default VideoPlayer;