import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <Title 
        />
        <Video 
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
