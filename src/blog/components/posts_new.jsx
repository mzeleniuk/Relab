import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/')
      });
  }

  render() {
    const {fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <div className="blog-container">
        <div className="text-center">
          <Subheader>Create a New Post</Subheader>
        </div>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <TextField hintText="Type Post's Title" floatingLabelText="Title" fullWidth={true}
                       errorText={title.touched ? title.error : ''} {...title}/>
          </div>

          <div>
            <TextField hintText="Type Post's Categories" floatingLabelText="Categories" fullWidth={true}
                       errorText={categories.touched ? categories.error : ''} {...categories}/>
          </div>

          <div>
            <TextField multiLine={true} hintText="Type Post's Content" floatingLabelText="Content"
                       errorText={content.touched ? content.error : ''} fullWidth={true} {...content}/>
          </div>

          <div className="form-footer text-right">
            <FlatButton label="Cancel" secondary={true} containerElement={<Link to="/"/>}/>
            <RaisedButton label="Submit" className="m-l-sm pull-right" primary={true} type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a Title';
  }

  if (!values.categories) {
    errors.categories = 'Please enter categories';
  }

  if (!values.content) {
    errors.content = 'Please enter some content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
