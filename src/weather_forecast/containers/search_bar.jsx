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
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form className="city-search-block">
        <TextField hintText="Type a city name" floatingLabelText="Search for city" style={styles.searchInput}
                   value={this.state.term} onChange={this.onInputChange}/>
        <RaisedButton label="Search" primary={true} style={styles.searchButton}/>
      </form>
    );
  }
}

export default SearchBar;
