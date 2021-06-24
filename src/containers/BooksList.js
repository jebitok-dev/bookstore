import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, category, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book.id);
  };

  const handFilterChange = (e) => {
    const filter = e.target.value;
    changeFilter(filter);
  };

  const booksFiltered = category === 'All' ? books : books.filter((book) => book.category === category);
  return (
    <div>
      <CategoryFilter
        handleFilterChange={handFilterChange}
        filter={category}
      />
      <div>
        {booksFiltered.map((book) => (
        /* eslint-disable */
        <Book
          id={book.id}
          key={book.id}
          handleRemoveBook={handleRemoveBook}
          {...book}
        />
        ))}
      </div>
  </div>
);
};
/* eslint-enable */

const mapStateToProps = (state) => ({
  books: state.books.books,
  category: state.books.filter,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any),
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
  category: PropTypes.string,
};

BooksList.defaultProps = {
  books: [],
  removeBook: () => { },
  changeFilter: () => { },
  category: 'All',
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
