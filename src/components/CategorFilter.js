import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const categories = ['CATEGORIES', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const booksLink = 'BOOKS';

const renderCategories = categories.map((item) => (
  <option key={uuidv4()} value={item}>{item}</option>
));

const CategoryFilter = ({ filter = 'All', handleFilterChange }) => (
  <div className="panel-pg">
    <div className="second-panel">
      <h3 className="Bookstore">Bookstore CSM</h3>
      <h3 className="BOOKS">{booksLink}</h3>
      <div className="categories">
        <select
          id="inputGroupSelect01"
          value={filter}
          onChange={handleFilterChange}
          className="CATEGORIES"
        >
          {renderCategories}
        </select>
      </div>
    </div>
  </div>
);

CategoryFilter.defaultProps = {
  addBook: '',
};

export default CategoryFilter;
