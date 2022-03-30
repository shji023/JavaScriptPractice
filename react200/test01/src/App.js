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

  render() {
    let {num, tiger} = this.state;
    return (
      <div>
        <h3>{this.state.num}</h3>
        <h3>{this.state.tiger}</h3>
        <h3>{num}</h3>
        <h3>{tiger}</h3>
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