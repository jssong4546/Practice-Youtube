import React from 'react';

const VideoListEntry = (props) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img
        className="media-object"
        src={props.data.snippet.thumbnails.default.url}
        alt=""
        style={{ width: '150px', height: '150px' }}
      />
    </div>
    <div className="media-body">
      <div
        className="video-list-entry-title"
        onClick={() => props.handleVideoEntryClick(props.data)}
      >
        {props.data.snippet.title}
      </div>
      <div className="video-list-entry-detail">
        {props.data.snippet.description}
      </div>
    </div>
  </div>
);

export default VideoListEntry;
