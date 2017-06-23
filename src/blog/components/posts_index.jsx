import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="blog-container">
        <div className="text-right">
          <RaisedButton label="Add a Post" primary={true}
                        containerElement={<Link to="/posts/new"/>}/>
        </div>

        <div className="text-center">
          <Subheader>List of Posts</Subheader>
        </div>
      </div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIndex);
