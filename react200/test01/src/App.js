import React, { Component } from 'react';

class App extends Component {
  // async를 붙이면 이 함수안에는 비동기 함수 호출이 있다라는것을
  f1 = async() => {
    console.log('f1');
    const res = await fetch('http://date.jsontest.com');
    console.log(res);
    const body = await res.json();
    console.log(body.date)
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