import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <ListItem key={post.id} primaryText={post.title}
                  secondaryText={'Categories: ' + post.categories}
                  containerElement={<Link to={`/posts/${post.id}`}/>}/>
      );
    });
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

        <List>
          {this.renderPosts()}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
