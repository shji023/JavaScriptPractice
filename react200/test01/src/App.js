import React,{Component} from 'react';
import $ from 'jquery';

class App extends Component {
  f1(e){
    console.log('call');
    let inputText = $('#inputId').val();
    console.log(inputText);
  }
  render() {
    return (
      <div>
        <input id = 'inputId' name='inputName' />
        <button onClick={(e)=>{}}>버튼</button>
        <button onClick={(e)=>{this.f1()}}>버튼</button>
      </div>
    );
  }
}

export default App;