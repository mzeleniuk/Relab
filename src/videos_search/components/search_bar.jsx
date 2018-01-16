import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  };

  onInputChange = (term) => {
    this.setState({term});
    this.props.onSearchTermChange(term);
  };

  render() {
    let videos = this.props.videos.map(video => video.snippet.title);

    return (
      <div className="search-bar">
        <AutoComplete hintText="I'm looking for..." floatingLabelText="Search for videos" fullWidth={true}
                      searchText={this.state.term} onUpdateInput={this.onInputChange} dataSource={videos}
                      filter={AutoComplete.noFilter} openOnFocus={true}/>
      </div>
    );
  };
}

export default SearchBar;
