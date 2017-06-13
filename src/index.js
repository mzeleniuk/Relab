import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ReactLogo from './logo.svg';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'One More Soul to the Call'}, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <div className="app-header">
          <img src={ReactLogo} className="react-logo" alt="logo"/>
          <h2>Welcome to Relab</h2>
        </div>

        <div>
          <MuiThemeProvider>
            <SearchBar />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <VideoList videos={this.state.videos}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
