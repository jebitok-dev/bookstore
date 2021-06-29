import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({
  books, filter, dispatch,
}) => {
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  let booksFiltered = '';

  if (filter === 'All') {
    booksFiltered = books.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        category={book.category}
        handleRemoveBook={handleRemoveBook}
      />
    ));
  } else {
    booksFiltered = books
      .filter((book) => book.category === filter)
      .map((b) => (
        <Book
          key={b.id}
          id={b.id}
          title={b.title}
          category={b.category}
          handleRemoveBook={handleRemoveBook}
        />
      ));
  }

  return (
    <>
      <div>{booksFiltered}</div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })),
  filter: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
  filter: '',
};

export default connect((state) => ({
  books: state.Books,
  filter: state.Filter,
}))(BooksList);
