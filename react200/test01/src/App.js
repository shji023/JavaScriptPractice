import React,{Component,useEffect,useState} from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Bpp tiger="호랑이"></Bpp>
      </div>
    );
  }
}

class Bpp extends Component {
  constructor(props){
    super(props);
    this.state={
      num : 10,
    };
  }
  f1(){
    console.log('f1');
    this.state.num = 20;

  }
  f2(){
    console.log('f2');
    this.setState({
      num:30,
    })
  }
  f3(){
    console.log(this.state.num);
  }
  render() {
    console.log('render call');
    return (
      <div>
        <button onClick={()=>{this.f1()}}>버튼1</button>
        <button onClick={()=>{this.f2()}}>버튼2</button>
        <button onClick={()=>{this.f3()}}>버튼3</button>
        <h3>{this.state.num}</h3>
      </div>
    );
  }
}


export default App;


// function App() {
//   const[state, setState] = useState('');
//   useEffect(()=>{
//     setState('하하');
//   },[]);
  
//   return (
//     <div>
//       <h1>{state}</h1>
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