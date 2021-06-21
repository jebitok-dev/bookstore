import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map((book) => (
        /* eslint-disable */
        <Book key={book.id} {...book} />
      ))}
    </table>
  </div>
);
/* eslint-enable */

const mapStateToProps = (state) => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.objectOf,
};

BooksList.defaultProps = {
  books: {},
};

export default connect(mapStateToProps)(BooksList);
