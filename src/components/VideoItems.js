import React from "react";
import "./VideoItems.css";

const VideoItems = ({ video, onvideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onvideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItems;
