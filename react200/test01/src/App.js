import React, { Component } from 'react';
import Bpp from './Bpp';
import Dpp from './Dpp';
class App extends Component {
  render() {
    return (
      <div>
        <h3>App</h3>
        <Bpp/>
        <Dpp />
      </div>
    );
  }
}

export default App;