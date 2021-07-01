import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;
