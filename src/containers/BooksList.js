import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book.id);
  };

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
        {books.map((book) => (
        /* eslint-disable */
        <Book
          id={book.id}
          key={book.id}
          handleRemoveBook={handleRemoveBook}
          {...book}
        />
      ))}
    </table>
  </div>
);
};
/* eslint-enable */

const mapStateToProps = (state) => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.objectOf,
  removeBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: {},
  removeBook: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
