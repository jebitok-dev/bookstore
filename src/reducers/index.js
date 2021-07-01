import { combineReducers, createStore } from 'redux';
import Books from './Books';
import Filter from './Filter';

export default createStore(combineReducers({
  Books, Filter,
}));
