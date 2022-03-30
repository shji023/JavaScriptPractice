import React,{Component} from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Bpp><h6>호랑이</h6></Bpp>
      </div>
    );
  }
}

class Bpp extends Component{
  render(){
    console.log(this.props.children);
    let {children} = this.props;
    return (
      <div>
        <h1>{children}</h1>
      </div>
     
    )
  }
}

export default App;


// function App(props) {
//   return (
//     <div>
//       <h1>App</h1>
//       <Bpp lion={'lion'} tiger={100}/>
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