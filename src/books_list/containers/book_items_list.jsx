import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';

class BookItemsList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <ListItem key={book.title} primaryText={book.title} />
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

export default connect(mapStateToProps)(BookItemsList);
