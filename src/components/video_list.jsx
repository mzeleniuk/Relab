import React from 'react';
import VideoListItem from './video_list_item';
import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem key={video.etag} video={video}
                     onVideoSelect={props.onVideoSelect}/>
    );
  });

  return (
    <div className="videos-list">
      <GridList cols={5} padding={10}>
        <Subheader>Videos found:</Subheader>
        {videoItems}
      </GridList>
    </div>
  );
};

export default VideoList;
