import React from 'react';
import BookItemsList from './containers/book_items_list';
import BookDetails from './containers/book_details';

const BooksList = function () {
  return (
    <div className="text-center">
      <BookItemsList/>
      <BookDetails/>
    </div>
  );
};

export default BooksList;
