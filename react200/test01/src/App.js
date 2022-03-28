import React,{Component} from 'react';
import './App.css';

class App extends Component {
  f1(){
    let s1 = 'Tiger';
    let s2 = 'Lion';

    console.log(`${s1} ${s2}`);

    let s3 = '무궁화꽃이피었습니다';
    console.log(s3.startsWith('무궁화')); // true
    console.log(s3.includes('무궁화')); // true
    console.log(s3.endsWith('입니다')); // false
  }

  render(){
    console.log('render1');
    return(
      <div>
        <h1>App</h1>
        <button onClick={()=>{
          this.f1();
        }}>버튼</button>
      </div>
    )
  }

}

export default App;