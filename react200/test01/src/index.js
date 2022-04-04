import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { reducers } from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// const store = createStore( 리듀스함수 );
// store => 전역변수를 저장할 공간
const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
