import React from 'react';
import PropTypes from 'prop-types';
import circle from '../images/circle.png';
/* eslint-disable react/prop-types */
const Book = ({
  id, title, category, handleClick,
}) => (
  <div className="book-item roboto">
    <div className="book-data">
      <p className="category mont">{category}</p>
      <p className="title mont">{title}</p>
      <p className="author mont">Author Name</p>
      <div className="links">
        <button type="button" className="link">
          Comments
        </button>
        <span className="span" />
        <button
          className="link"
          type="button"
          onClick={() => {
            handleClick({ id, title, category });
          }}
        >
          Remove
        </button>
        <span className="span" />
        <button type="button" className="link">
          Edit
        </button>
      </div>
    </div>
    <div className="reading-progress">
      <img className="oval" alt="circle" src={circle} />
      <div>
        <p className="percent-complete mont">
          {Math.floor(Math.random() * 100)}
          %
        </p>
        <p className="completed mont">Completed</p>
      </div>
    </div>
    <div className="line-2" />
    <div className="chapter-info">
      <p className="current-chapter roboto">CURRENT CHAPTER</p>
      <p className="chapter roboto">
        Chapter
        {Math.floor(Math.random() * 20)}
      </p>
      <button type="button" className="update-progress roboto">
        UPDATE CHAPTER
      </button>
    </div>
  </div>
);

Book.propTypes = {
  handleClick: PropTypes.func,
  book: PropTypes.shape({
    bookId: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};
Book.defaultProps = {
  book: null,
  handleClick: null,
};

export default Book;
