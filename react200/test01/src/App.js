import React,{Component} from 'react';
import './App.css';

class App extends Component {
  // 2. 생성자
  constructor(props){
    super(props);
    this.state = {};

    console.log('constructor');
  }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps');
    return {};
  }
  render(){
    console.log('render1');
    return(
      <div>
        <h1>App</h1>
      </div>
    )
  }
}

export default App;