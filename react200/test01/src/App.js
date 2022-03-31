import React, { Component } from 'react';

class App extends Component {
  render() {
    const ar= [
      {
        key:'1',
        value:'호랑이1'
      },
      {
        key:'2',
        value:'호랑이1'
      },
      {
        key:'3',
        value:'호랑이1'
      }
    ]
    const hr = [
      {
        key:'1',
        value:'소나무'
      },
      {
        key:'2',
        value:'콩나물'
      },
      {
        key:'3',
        value:'대나무'
      }
    ]
    return (
      <div>
        <h1>App🎶</h1>
        <ul>
          {ar.map((v)=><li key={v.key}>{v.value}</li>)}
        </ul>
        <Bpp hr={hr}></Bpp>
      </div>
    );
  }
}


function Bpp({hr}) {
  return (
    <div>
      <ul>
          {hr.map((v)=><li key={v.key}>{v.value}</li>)}
        </ul>
    </div>
  );
}

export default App;