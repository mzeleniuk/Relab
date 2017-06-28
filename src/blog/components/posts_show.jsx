import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return (
        <div className="text-center">
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className="blog-container">
        <Card>
          <CardHeader title={post.title} subtitle={'Categories: ' + post.categories}/>
          <CardText>{post.content}</CardText>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post}
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);
