import React,{Component} from 'react';
import PropsTypes from 'prop-types';
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Bpp a={10} b={'tiger'} c={true} d ={[0,1,2]} e={{x:10, y:20}} f={()=>{return 99;}}/>
      </div>
      
    );
  }
}

class Bpp extends Component{
  render(){
    let {a, b, c, d, e, f} = this.props;
    return (
      <div>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
        <h1>{d}</h1>
        <h1>{e.x}{e.y}</h1>
        <h1>{f()}</h1>
      </div>
     
    )
  }
}
Bpp.propTypes = {
  a:PropsTypes.number,
  b:PropsTypes.string,
  c:PropsTypes.bool,
  d:PropsTypes.array,
  e:PropsTypes.object,
  f:PropsTypes.func,
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