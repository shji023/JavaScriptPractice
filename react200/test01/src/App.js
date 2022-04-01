import React, { Component } from 'react';

class App extends Component {
  f1=()=>{
    console.log('f1');
    // response는 Promise를 얻는다.
    // Promise.then() 함수를 사용할 수 있다. => 비동기로 작업되는것을 동기로 
    // const response = fetch('http://date.jsontest.com');
    // response.then();
    fetch('http://date.jsontest.com')
    .then((response)=>{
      // console.log(response);

      response.json()
      .then((body)=>{
        console.log(body.date);
      })
    })
    
  }
  render() {
    return (
      <div>
        <h2>호랑이</h2>
        <button onClick={this.f1}>버튼1</button>
      </div>
    );
  }
}

export default App;