import React, { Component } from 'react';
// 전달받은 인수의 첫자는 반드시 대문자이다.
export default function withF1(Hoc){
  return class Cpp extends Component {
    render(){
      return(
        <div>
          <h1>목록1</h1>
          <h1>목록2</h1>
          <h1>목록3</h1>
          <h1>목록4</h1>
          <h1>목록5</h1>
          <Hoc/>
        </div>
      );
    }
  }
}