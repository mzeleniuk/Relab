import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  minHeight: 80,
  minWidth: 400,
  margin: 20,
  padding: 20,
  textAlign: 'center',
  verticalAlign: 'middle',
  display: 'inline-block',
};

class BookDetails extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div className="book-details">
          <Paper style={style} zDepth={4}>
            <p>Select a book to get started</p>
          </Paper>
        </div>
      );
    }

    return (
      <div className="book-details">
        <Paper style={style} zDepth={4}>
          <p className="text-left">Title: {this.props.book.title}</p>
          <Divider/>
          <p className="text-left">Pages: {this.props.book.pages}</p>
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetails);
