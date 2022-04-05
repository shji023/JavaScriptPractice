import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './modules/bpp';
//const store = createStore(리듀서);
const store = createStore(reducers);

ReactDOM.render(
  <Provider store = {store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //<React.StrictMode>
    <App />,
  //</React.StrictMode>,
  document.getElementById('root')
);
*/