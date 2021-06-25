import React from 'react';
import PropTypes from 'prop-types';

const Book = (book) => {
  const {
    id, title, category, handleRemoveBook,
  } = book;
  return (
    <div className="book-item roboto">
      <div className="book-data">
        <p className="category mont">{category}</p>
        <p className="title mont">{title}</p>
        <p className="author">Author</p>
        <div>
          <button
            type="button"
            className="link"
          >
            Comments
          </button>
          <span className="span" />
          <button
            type="button"
            className="link"
            onClick={() => {
              handleRemoveBook({ book, title, category });
            }}
          >
            Remove
            </button>
            <span className="span" />
          <button
            type="button"
            className="link"
          >
            Edit
          </button>
        </div>
        <div>
          <div className="reading-in-progress">
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
              chapter{Math.floor(Math.random() * 20)}
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
          id: PropTypes.number,
        title: PropTypes.string,
          category: PropTypes.string,
        }),
};

Book.defaultProps = {
          book: null,
        handleClick: null,
};
        
export default Book;
