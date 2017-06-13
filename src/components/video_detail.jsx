import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

const VideoDetail = ({video}) => {
  if (!video) {
    return (
      <div className="text-center">
        <CircularProgress />
      </div>
    );
  }

  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <Card>
        <CardMedia className="video-container">
          <iframe src={url} title={video.snippet.title} className="embed-item"></iframe>
        </CardMedia>

        <CardTitle title={video.snippet.title}/>

        <CardText>
          {video.snippet.description}
        </CardText>
      </Card>
    </div>
  );
};

export default VideoDetail;
