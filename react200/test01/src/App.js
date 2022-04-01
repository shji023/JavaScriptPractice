import React, { Component } from 'react';

class App extends Component {
  f1 = async() => {
    new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('1'); // 3초 뒤 출력
        resolve(); // then으로 이동 시켜 then이 출력됨
      },3000);
    }).then(()=>{
      new Promise((resolve)=>{
        setTimeout(()=>{
          console.log('2'); // 2초 뒤 출력
          resolve(); // then으로 이동 시켜 then이 출력됨
        },2000);
      })
      .then(()=>{
        new Promise((resolve)=>{
          setTimeout(()=>{
            console.log('3'); // 1초 뒤 출력
            resolve(); // then으로 이동 시켜 then이 출력됨
          },1000);
        })
      })
    })
    console.log('test'); // test먼저 출력 >> 비동기
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