import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PostsNew extends Component {
  render() {
    const {fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <div className="blog-container">
        <div className="text-center">
          <Subheader>Create a New Post</Subheader>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <TextField type="text" hintText="Type Post's Title"
                       floatingLabelText="Title" fullWidth={true} {...title}/>
          </div>

          <div>
            <TextField type="text" hintText="Type Post's Categories"
                       floatingLabelText="Categories" fullWidth={true} {...categories}/>
          </div>

          <div>
            <TextField type="text" multiLine={true} hintText="Type Post's Content"
                       floatingLabelText="Content" fullWidth={true} {...content}/>
          </div>

          <div className="form-footer text-right">
            <RaisedButton label="Submit" primary={true} type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
