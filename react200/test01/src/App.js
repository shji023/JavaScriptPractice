import React, { Component } from 'react';

const {Provider, Consumer} = React.createContext();

class App extends Component {
  render() {
    return (
      <div>
        <Provider value='호랑이'>
          <Bpp />
        </Provider>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <Cpp />
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {
            //cv => <h3>{cv}</h3>
            cv => <h3>{`result:${cv}`}</h3>
          }
        </Consumer>
        <h3>Cpp</h3>
      </div>
    );
  }
}

export default App;