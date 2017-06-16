import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
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

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form className="city-search-block" onSubmit={this.onFormSubmit}>
        <TextField hintText="Type a city name" floatingLabelText="Search for city" style={styles.searchInput}
                   value={this.state.term} onChange={this.onInputChange}/>
        <RaisedButton label="Search" primary={true} style={styles.searchButton} type="submit"/>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
