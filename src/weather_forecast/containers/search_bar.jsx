import React, {Component} from 'react';
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
  render() {
    return (
      <form className="city-search-block">
        <TextField hintText="Type a city name" floatingLabelText="Search for city" style={styles.searchInput}/>
        <RaisedButton label="Search" primary={true} style={styles.searchButton}/>
      </form>
    );
  }
}

export default SearchBar;
