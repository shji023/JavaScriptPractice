import React, { Component } from 'react';

const {Provider, Consumer} = React.createContext();

class App extends Component {
  constructor(props){
    super(props);
    this.state={num:0};
  }
  f1=(value)=>{
    this.setState({num:this.state.num+value});
  }
  render() {
    const obj={a:10, b:20};
    const obj2 = {...obj,f1:()=>{}};
    console.log(obj2);
    console.log(this.state);

    const tiger={
      ...this.state,f1:this.f1
    }
    console.log(tiger);
    return (
      <div>
        <h3>{this.state.num}</h3>
        <Provider value={tiger}>
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
        <h3>Cpp</h3>
        <Consumer>
          {
            cv=>
            <button onClick={e=>{cv.f1(10)}}>버튼
              {/* {cv.num} */}
            </button>
          }
        </Consumer>
      </div>
    );
  }
}


export default App;