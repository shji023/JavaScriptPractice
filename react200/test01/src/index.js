
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  //<React.StrictMode>
  // App 컴포넌트는 라우팅 설정 전용이다
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //</React.StrictMode>,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   //<React.StrictMode>
//     <App />,
//   //</React.StrictMode>,
//   document.getElementById('root')
// );
