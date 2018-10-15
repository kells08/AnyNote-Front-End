import React, { Component } from 'react';
import Header from './Components/Header'
import Login from './Components/Login'
import MainContainer from './Components/MainContainer'
import FullNote from './Components/FullNote'
import Footer from './Components/Footer'

// import {users} from '../anynote-back-end/db/seeds'
// import {notes} from '../anynote-back-end/db/seeds'
import './App.css';

class App extends Component {

  state = {
    notes: [],
    selectedNote: []
  }

  filterNotes = () => {
    const allNotes = this.state.notes
    return allNotes.filter( note => {
      return note.title.includes(this.state.searchTerm)
    })
  }

  selectNote = (note) => {
    //console.log(note)
    let index = this.state.notes.indexOf(note);
      if (index > -1) {
        this.state.notes.splice(index, 1);
      }
      this.setState({
        selectedNote: this.state.selectedNote
      })
    //console.log(this.state)
  }

  // componentDidMount() {
  //   fetch('notes')
  //     .then(resp => resp.json())
  //     .then(console.log)
  // }

  render() {
    return (
      <div className="wrapper style1">
        <Header/>
        <Login/>
        <MainContainer />
        <FullNote />
        <Footer />
      </div>
    );
  }
}

export default App;
