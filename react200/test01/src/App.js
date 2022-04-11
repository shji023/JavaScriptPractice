import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header admin';
import Footer from './Footer';
import './css/new.css';
import LoginForm from './LoginForm';
import { debounce } from 'lodash';
class App extends Component {
  f1 = debounce(()=>{
    console.log('debounce');
  },1000); 
  
  f2 = debounce(()=>{
    console.log('debounce');
  },1000); 
  
  render() {
    return (
      <div>
        {/* <Header />
        <Routes>
          <Route path="/" element={<LoginForm />}/>
        </Routes>
        <Footer />
        <img src={require('./img/layout/logo.jpg')} alt="logo"></img> */}
        <button onClick={this.f1}>버튼</button>
        <input type='text' onChange={this.f2}/>
      </div>
    );
  }
}

export default App;