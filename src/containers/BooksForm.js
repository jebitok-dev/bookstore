import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    if (e.target.id === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.id === 'category') {
      this.setState({
        category: e.target.value,
      });
    }
  };

handleSubmit = (e) => {
  e.preventDefault();
  const { dispatch } = this.props;
  dispatch(addBook(this.state));
  this.setState({
    title: '',
    category: '',
  });
}

render() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { title, category } = this.state;

  return (
    <div className="book-form">
      <form>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.handleChange}
          value={title}
          placeholder="Book Title"
        />
        <select
          className="custom-select"
          id="category"
          value={category}
          onChange={this.handleChange}
        >
          <option value="">Choose Category:</option>
          {categories.map((item) => (
            <option item={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="book-submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
}
/* eslint-enable */

BooksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(BooksForm);
