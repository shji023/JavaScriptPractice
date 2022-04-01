import React, { Component } from 'react';

class App extends Component {
  f1 = async() => {
    await new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('1'); // 3초 뒤 출력
        resolve(); // then으로 이동 시켜 then이 출력됨
      },3000);
    });
    await new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('2'); // 2초 뒤 출력
        resolve(); // then으로 이동 시켜 then이 출력됨
      },2000);
    })
    await new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('3'); // 1초 뒤 출력
        resolve(); // then으로 이동 시켜 then이 출력됨
      },1000);
    })
    console.log('test'); // test먼저 출력 >> 비동기
  }

  myFetch = (num, ms) => {
    new Promise((resolve)=>{
      setTimeout(()=>{
        console.log(num); 
      },ms);
    });
  }
  f6 = async()=>{
    await this.myFetch(1, 3000);
    await this.myFetch(2, 2000);
    await this.myFetch(3, 1000);
  }
  f7 = async()=>{
    const response = await fetch(
      'http://date.jsontest.com',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:{a:'react', b:200}
      }
    );
    const body = await response.json();
    console.log(body.date);
  }
  render() {
    return (
      <div>
        <h2>호랑이</h2>
        <button onClick={this.f7}>버튼1</button>
      </div>
    );
  }
}

export default App;