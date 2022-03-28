import React,{Component} from 'react';
import './App.css';

class App extends Component {
  f1(){
    var varName = 'Tiger';
    console.log(varName);

    var varName = 'Lion';
    console.log(varName);

    let letName = 'Tiger';
    console.log(letName);

    //let letName = 'Lion'; err
    console.log(varName);
  }

  render(){
    console.log('render1');
    return(
      <div>
        <h1>App</h1>
        <button onClick={()=>{
          this.f1();
        }}>버튼</button>
      </div>
    )
  }

}

export default App;