import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  const stringId = 'category';
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const renderCategories = categories.map((item, id) => (
    <option key={uuidv4()} id={stringId + id.toString()} value={item}>{item}</option>
  ));
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
          <br />
          <select 
           className="book-category" 
           id="category" 
           onChange={this.handleChange}
           value={category}
          >
            <option selected>Choose Category</option>
            {renderCategories}
          </select>
        <input
          type="submit" 
          className="book-submit" 
          onClick={this.handleSubmit}
        />
      </form>
    </div>
  );
}
}
/* eslint-enable */

BooksForm.propTypes = {
  dispatch: PropTypes.func,
};

BooksForm.defaultProps = {
  dispatch: null,
};

export default connect(null)(BooksForm);
