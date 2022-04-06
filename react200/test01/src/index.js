// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Main';
// import {Provider} from 'react-redux';
// import store from './store';
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReducer);
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