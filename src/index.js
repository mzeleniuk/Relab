import React from 'react';
import ReactDOM from 'react-dom';
import VideosSearch from './videos_search/videos_search';
import BooksList from './books_list/books_list';
import WeatherForecast from './weather_forecast/weather_forecast';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './root_reducer';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
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

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = function () {
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
        </Tabs>
      </MuiThemeProvider>
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
