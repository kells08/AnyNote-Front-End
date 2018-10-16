import React, { Component } from 'react';
import Search from './MainPage/Search'
import Note from './MainPage/Note'
import FullNote from './MainPage/FullNote'

class MainContainer extends Component {
  
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

  // GET Notes/:id
// fetch('http://localhost:3001/notes/4', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.25OtHz18aysiAOZQiMIoDV1ytUKi06JOwGqVmzdPZ1U'
//   }
// }).then(res => res.json()).then()

  render() {
    return (
      <div className="" style={{backgroundColor:'white', opacity:'.8'}}>
        <h4>MainContainer</h4>
        <Search/>
        <Note/>
        <FullNote/>
      </div>
    );
  }

// get note
// fetch('http://localhost:3001/notes', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     Authorization: 'Bearer ' + localStorage.token
//   }})
//   .then(resp => resp.json())
//   .then(console.log)
}

export default MainContainer;
