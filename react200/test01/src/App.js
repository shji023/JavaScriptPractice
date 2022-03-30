import React,{Component,useEffect,useState} from 'react';
// 함수 호출에 인수전달이 없다는 전제하에서는 약식 표기법을 사용할 수 있다.
class App extends Component {
  f1(){
    console.log('f1 call');
  };
  f2(){
    console.log('f2 call');
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={()=>{this.f1()}}>버튼1</button>
        {/* 약식호출, 람다를 빼고 ()를 뺌 */}
        <button onClick={this.f2()}>버튼2</button>
      </div>
    );
  }
}

export default App;


// function App() {
//   const[state, setState] = useState('');

//   const handleClick = ()=>{
//     setState('하하');
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={()=>{handleClick()}}>버튼1</button>
//       {/* <Bpp lion={'lion'} tiger={100}/> */}
//     </div>
//   );
// }

// function Bpp ({lion,tiger}){
//   return (
//     <div>
//       <h1>Bpp</h1>
//       <h1>{lion}</h1>
//       <h1>{tiger}</h1>
//     </div>
//   )
// }

// export default App;