import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = ()=> {
    // query전송
    axios.get('/tiger?command=monkey')
    .then(
      res=>{console.log(res.data);}
    )
  };
  f2 = ()=> {
    // 파라미터 전송
    // 하위주소가 아니고 데이터
    // 받는 놈이 해석을 잘해야됨
    axios.post('/tiger/monkey2')
    .then(
      res=>{console.log(res.data);}
    )
  };

  render() {
    return (
      <div>
        <button onClick={this.f1}>버튼1</button>
        <button onClick={this.f2}>버튼2</button>
        <button onClick={this.f3}>버튼3</button>
      </div>
    );
  }
}

export default App;


/*
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [userName, setUserName] = useState('홍길동');
  const [age, setAge] = useState(3000);

  const f1 = async(e)=>{
    e.preventDefault();
    const postData = await axios.post('/users/2',{
      name:userName, 
      age:age
    });
    console.log(postData.data.name);
    console.log(postData.data.age);
  }
  
  const f2 = (e)=>{
    setUserName(e.target.value);
  }

  return (
    <div>
        <h1>App</h1>
        <form onSubmit={f1}>
          <input 
            type="text" 
            value={userName} 
            onChange={f2}>        
          </input>
          <button type='submit'>로그인</button>
        </form>
      </div>
  );
}

export default App;
*/



