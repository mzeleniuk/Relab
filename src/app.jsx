import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import VideosSearch from './videos_search/videos_search';
import BooksList from './books_list/books_list';
import WeatherForecast from './weather_forecast/weather_forecast';
import ReactLogo from './logo.svg';

const styles = {
  tabItem: {
    backgroundColor: '#2d2d2d'
  },

  inkBar: {
    backgroundColor: '#61dafb',
    zIndex: '1'
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <img src={ReactLogo} className="react-logo" alt="logo"/>

          <h2>
            Welcome to <span className="project-name">Relab</span> - a playground for&nbsp;
            <a href="https://facebook.github.io/react" className="react-link" target="_blank"
               rel="noopener noreferrer">React</a> Apps
          </h2>
        </div>

        <MuiThemeProvider>
          <Tabs inkBarStyle={styles.inkBar}>
            <Tab label="Videos Search" buttonStyle={styles.tabItem}>
              <div>
                <VideosSearch/>
              </div>
            </Tab>
            <Tab label="Books List" buttonStyle={styles.tabItem}>
              <div>
                <BooksList/>
              </div>
            </Tab>
            <Tab label="Weather Forecast" buttonStyle={styles.tabItem}>
              <div>
                <WeatherForecast/>
              </div>
            </Tab>
            <Tab label="Blog" buttonStyle={styles.tabItem}>
              <div>
                {this.props.children}
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
