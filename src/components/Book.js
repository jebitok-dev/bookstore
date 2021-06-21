import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = () => {
  const { id, title, category } = useState('');
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
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
