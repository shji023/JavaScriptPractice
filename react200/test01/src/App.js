import React, { Component } from 'react';
import BppContainer from './containers/BppContainer';

class App extends Component {
  render() {
    return (
      <div>
        <BppContainer/>
      </div>
    );
  }
}


export default App;

// 컴포넌트: Bpp.js, Cpp.js >> components 폴더에서 관리
// 리듀스: bpp.js, cpp.js >> modules, reduces 폴더에서 관리
// 커넥트: BppContainer.js, CppContainer.js >> containers 폴더에서 관리