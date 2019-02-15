import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos, onvideoSelect }) => {
  //console.log(videos.length);
  const renderedList = videos.map(video => {
    return (
      <VideoItems
        onvideoSelect={onvideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
