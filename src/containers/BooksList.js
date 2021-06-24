import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

/* eslint-disable react/prop-types */

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book.id);
  };

  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
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
    <div>
      <CategoryFilter
        handleFilterChange={handleFilterChange}
      />
      <div className="books-container">
        {booksFiltered.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            handleRemoveBook={handleRemoveBook}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...book}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.books,
  category: state.books.filter,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any),
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  removeBook: () => { },
  changeFilter: () => { },
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
