import React, {Component} from 'react';
import SearchBar from './containers/search_bar';

class WeatherForecast extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

export default WeatherForecast;
