import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  countrySelect: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'left'
  },
  searchInput: {
    width: '50%',
    minWidth: 150
  },
  searchButton: {
    margin: 12
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {country: 'UA', term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  };

  onCountryChange = (event, index, value) => this.setState({country: value});

  onInputChange(event) {
    this.setState({term: event.target.value});
  };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.country, this.state.term);
    this.setState({term: ''});
  };

  render() {
    return (
      <form className="city-search-block" onSubmit={this.onFormSubmit}>
        <SelectField floatingLabelText="Country" value={this.state.country} onChange={this.onCountryChange}
                     autoWidth={true} style={styles.countrySelect}>
          {this.props.countries.map((country) => {
            return (
              <MenuItem key={country.code} value={country.code} primaryText={country.name}/>
            )
          })}
        </SelectField>
        <br/>

        <TextField hintText="Type a city name" floatingLabelText="Search for city" style={styles.searchInput}
                   value={this.state.term} onChange={this.onInputChange}/>

        <RaisedButton label="Search" primary={true} style={styles.searchButton} type="submit"/>
      </form>
    );
  };
}

function mapStateToProps(state) {
  return {
    countries: state.countries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
