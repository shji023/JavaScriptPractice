import React,{Component} from 'react';
import './App.css';

class App extends Component {
  // 1. 필드
  num = 10;

  constructor(props){
    super(props);
    this.state = {};

    console.log('constructor');
  }
  f1(){

  }
  render(){
    console.log('render1');
    return(
      <div>
        <h1>App</h1>
        <Bpp />
      </div>
    )
  }
}

class Bpp extends Component {
  constructor(props){
    super(props);
    this.state = {};

    console.log('Bpp constructor');
  }
  render() {
    console.log('render2');
    return (
      <div>
        
      </div>
    );
  }
}


export default App;