import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = ()=>{
      axios.post('/api/Swtool?type=list',{})
      .then((res)=>{
          console.log(res.data);
      })
  }

  render() {
      return (
          <div>
              <h3>App</h3>
              <button onClick={ this.f1 }>버튼1</button>
          </div>
      );
  }
}

export default App;