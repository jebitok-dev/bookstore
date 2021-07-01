/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import circle from '../images/circle.png';

const Book = ({
  id, title, category, handleClick,
}) => (
  <div className="book-item d-flex roboto">
    <div className="book-data">
      <p className="category mont">{category}</p>
      <p className="title mont">{title}</p>
      <p className="author font">Author: </p>
      <div className="links center d-flex">
        <button type="button" className="link font">
          Comments
        </button>
        <span className="span" />
        <button
          className="link font"
          type="button"
          onClick={() => {
            handleClick({ id, title, category });
          }}
        >
          Remove
        </button>
        <span className="span" />
        <button type="button" className="link font">
          Edit
        </button>
      </div>
    </div>
    <div className="reading-progress d-flex">
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
      <p className="current-chapter font roboto">CURRENT CHAPTER</p>
      <p className="chapter font roboto">
        Chapter
        {Math.floor(Math.random() * 20)}
      </p>
      <button type="button" className="update-progress font roboto">
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
