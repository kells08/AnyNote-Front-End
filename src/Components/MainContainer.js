import React, { Component } from 'react';
import Search from './MainPage/Search'
import Note from './MainPage/Note'

class MainContainer extends Component {
  render() {
    return (
      <div className="" style={{border: 'solid'}}>
        <h4>MainContainer</h4>
        <Search/>
        <Note/>
      </div>
    );
  }
}

export default MainContainer;
