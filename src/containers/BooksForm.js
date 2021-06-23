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

  /* eslint-disable */
  return (
    <div>
      <button type="button" className="addBook btn btn-primary" data-toogle="modal" data-target="#exampleModal">
        Add a book!
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add to Bookstore</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="bookForm" name="updateTaskForm">
                <div className="title">
                  <label htmlFor="fname">Title</label>
                  <br />
                  <input type="text" id="fname" name="title" ref={(node) => (this.inputNode = node)} />
                  <br />
                </div>
                <div className="dropdown">
                  <select className="custom-select" id="category" onChange={this.handleChange}>
                    <option selected>Choose Category</option>
                    {renderCategories}
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add a book</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
