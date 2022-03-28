import React,{Component} from 'react';
import './App.css';

class App extends Component {
  // 2. 생성자
  constructor(props){
    super(props);
    this.state = {};

    console.log('constructor');
  }
  shouldComponentUpdate(props,state){
    console.log('shouldComponentUpdate');
    return {};
  }

  render(){
    console.log('render1');
    // this.setState({});
    return(
      <div>
        <h1>App</h1>
        <button onClick={()=>{
          this.setState({});
        }}>버튼</button>
        <button onClick={()=>{
          this.setState({state:this.state+1});
        }}>버튼</button>
      </div>
    )
  }

}

export default App;