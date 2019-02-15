import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/YouTube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    //console.log(youtube);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  numVideos = () => {
    if (this.state.videos.length > 0)
      return `${this.state.videos.length} videos found for your search query`;
    else return "You haven't search any video yet!!";
  };

  render() {
    return (
      <div className="ui container ">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className=" ui header content">{this.numVideos()} </div>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
