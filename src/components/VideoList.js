import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos }) => {
  //console.log(videos.length);
  const renderedList = videos.map(video => {
    return <VideoItems video={video} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
