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
  /* eslint-disable */
  return (
    <div className="book-form">
      <form id="bookForm" name="updateTaskForm">
          <input 
            type="text" 
            id="book-title" 
            name="title"
            className="book-title"
            onChange={this.handleChange}
            value={title}
            placeholder="Book Title"
          />
          {/* <br /> */}
          <select 
           className="book-category" 
           id="category" 
           onChange={this.handleChange}
           value={category}
          >
            <option selected>Choose Category</option>
            {categories.map((item) => (
              <option item={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        <input
          type="submit" 
          className="book-submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
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
