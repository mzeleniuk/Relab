import React from 'react';
import {GridTile} from 'material-ui/GridList';

const VideoListItem = ({video, onVideoSelect}) => {
  const ImageUrl = video.snippet.thumbnails.medium.url;

  return (
    <GridTile
      key={video.etag}
      title={video.snippet.title}
      titleBackground="rgba(0, 0, 0, 0.4) none repeat scroll 0% 0%"
      onClick={() => onVideoSelect(video)}
      className="videos-list-item">
        <img src={ImageUrl} alt={video.snippet.title} title={video.snippet.title}/>
    </GridTile>
  );
};

export default VideoListItem;
