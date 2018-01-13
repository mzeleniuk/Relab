import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <TextField type="text" fullWidth={true} hintText="I'm looking for..."
                   floatingLabelText="Search for videos" value={this.state.term}
                   onChange={event => this.onInputChange(event.target.value)} autoFocus="true"/>
      </div>
    );
  };
}

export default SearchBar;
