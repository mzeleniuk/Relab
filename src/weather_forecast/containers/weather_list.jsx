import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp);

    return (
      <TableRow key={city}>
        <TableRowColumn>{city}</TableRowColumn>
        <TableRowColumn>
          <Chart data={temperatures} color="#ff5722"/>
        </TableRowColumn>
        <TableRowColumn>Some Pressure</TableRowColumn>
        <TableRowColumn>Some Humidity</TableRowColumn>
      </TableRow>
    );
  }

  render() {
    return (
      <Paper zDepth={4} className="cities-table">
        <Table fixedHeader={true} selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>Temperature</TableHeaderColumn>
              <TableHeaderColumn>Pressure</TableHeaderColumn>
              <TableHeaderColumn>Humidity</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {this.props.weather.map(this.renderWeather)}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
