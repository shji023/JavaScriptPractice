import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = ()=> {
    axios.get('/tiger')
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



