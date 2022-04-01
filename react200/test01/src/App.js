import React, { Component } from 'react';

class App extends Component {
  f1=()=>{
    console.log('f1');
    const response = fetch('http://date.jsontest.com');
    // 결과는 pending : 보류
    // 정상적으로 결과값을 받은 상태가 아니다
    // fetch가 비동기 상태이기 때문에

    console.log(response);

    // 얻지 못한 데이터를 얻기 위한 시도
    // exception이 터진다.
    const body = response.json();
    
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