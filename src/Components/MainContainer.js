import React, { Component } from 'react';
import Search from './MainPage/Search'
import Note from './MainPage/Note'

class MainContainer extends Component {
  render() {
    return (
      <div className="" style={{border: 'solid'}}>
        MainContainer
        <Search/>
        <Note/>
      </div>
    );
  }
}

export default MainContainer;
