import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Books from './reducers/Books';
import './styles/App.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(Books);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
