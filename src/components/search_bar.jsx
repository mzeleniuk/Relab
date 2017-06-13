import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  };

  render() {
    return (
      <div className="search-bar">
        <TextField type="text" fullWidth={true} hintText="I'm looking for..."
                   floatingLabelText="Search for videos" value={this.state.term}
                   onChange={event => this.setState({term: event.target.value})} autoFocus="true"/>
      </div>
    );
  };
}

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default SearchBar;
