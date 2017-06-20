import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';

class WeatherForecast extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <Subheader>5 day weather forecast is only available for Ukraine</Subheader>
        </div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default WeatherForecast;
