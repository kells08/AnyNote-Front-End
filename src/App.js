import React, { Component } from 'react';
import Header from './Components/Header'
import Login from './Components/Login'
import MainContainer from './Components/MainContainer'
import FullNote from './Components/FullNote'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <Header/>
        <Login/>
        <MainContainer />
        <FullNote />
      </div>
    );
  }
}

export default App;
