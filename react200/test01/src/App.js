import React, { Component } from 'react';
import cookie from 'react-cookies';

class App extends Component {
  f1 = () =>{
    cookie.save('tiger',1000);
    cookie.save('lion',2000);
    cookie.save('dog',3000);
  }
  f2 = () =>{
    const value = cookie.load('lion');
    alert(value);
  }
  f3 = () =>{
    cookie.remove('tiger');
  }
  f4 = () =>{
    cookie.save('tiger',4000);
    cookie.save('lion',5000);
    cookie.save('dog',6000);
  }
  render() {
    return (
      <div>
        <button onClick={this.f1}>쿠키 추가</button>
        <button onClick={this.f2}>쿠키 검색</button>
        <button onClick={this.f3}>쿠키 제거</button>
        <button onClick={this.f4}>쿠키 수정</button>
      </div>
    );
  }
}

export default App;