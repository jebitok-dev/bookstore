import React from 'react';
import PropTypes from 'prop-types';

const Book = (book) => {
  const {
    id, title, category, handleRemoveBook,
  } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => handleRemoveBook(book)}>Remove Book</button></td>
    </tr>
  );
/* eslint-disable */

  Book.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  };

  Book.defaultProps = {
    id: '',
    title: '',
    category: '',
  };
};
/* eslint-enable */

export default Book;
