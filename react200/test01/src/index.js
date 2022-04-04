import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { reducers } from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducers);

ReactDOM.render(
  <Provider>
    <App />
    document.getElementByID('root');
  </Provider>
)
reportWebVitals();
