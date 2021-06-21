import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const renderCategories = categories.map((item) => (
    <option key={uuidv4()}>{item}</option>
  ));

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
              <div className="dropdown">
                <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Choose Category</option>
                  {renderCategories}
                </select>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add a book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksForm;
