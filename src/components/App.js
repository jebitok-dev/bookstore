import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
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
