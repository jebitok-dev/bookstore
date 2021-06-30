import { combineReducers, createStore } from 'redux';
import Books from './Books';
import Filter from './Filter';

const combinedReducers = combineReducers({
  Books, Filter,
});

export default createStore(combinedReducers);
