import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
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
          <CardActions>
            <FlatButton label="Back to Index" primary={true} containerElement={<Link to="/"/>}/>
            <FlatButton label="Delete Post" secondary={true} className="pull-right"
                        onClick={this.onDeleteClick.bind(this)}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
