import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class VideosSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('ReactJS');
  }

  videoSearch(term) {
    YTSearch({key: process.env.REACT_APP_YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 500);

    return (
      <div>
        <div>
          <MuiThemeProvider>
            <SearchBar onSearchTermChange={videoSearch} videos={this.state.videos}/>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <VideoList videos={this.state.videos}
                       onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <VideoDetail video={this.state.selectedVideo}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default VideosSearch;
