import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header admin';
import Footer from './Footer';
import './css/new.css';
import LoginForm from './LoginForm';
class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />}/>
        </Routes>
        <Footer />
        <img src={require('./img/layout/logo.jpg')} alt="logo"></img>
      </div>
    );
  }
}

export default App;