import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';
import {List, ListItem} from 'material-ui/List';

class BookItemsList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <ListItem key={book.title}
                  primaryText={book.title}
                  onClick={() => this.props.selectBook(book)}/>
      );
    });
  }

  render() {
    return (
      <List>
        {this.renderList()}
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItemsList);
