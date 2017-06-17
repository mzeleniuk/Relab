import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class WeatherList extends Component {
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
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
              <TableRowColumn>Some Humidity</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>Some Humidity</TableRowColumn>
            </TableRow>
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
