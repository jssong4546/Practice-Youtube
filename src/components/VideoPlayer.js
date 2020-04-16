import React from 'react';

const VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${props.playingNow.id.videoId}`}
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.playingNow.snippet.title}</h3>
      <div>{props.playingNow.snippet.description}</div>
    </div>
  </div>
);

export default VideoPlayer;
