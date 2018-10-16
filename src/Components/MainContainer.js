import React, { Component } from 'react';
import Search from './MainPage/Search'
import Note from './MainPage/Note'
import FullNote from './MainPage/FullNote'

class MainContainer extends Component {

  // filterNotes = () => {
  //   const allNotes = this.state.notes
  //   return allNotes.filter( note => {
  //     return note.title.includes(this.state.searchTerm)
  //   })
  // }

  // selectNote = (note) => {
  //   //console.log(note)
  //   let index = this.state.notes.indexOf(note);
  //     if (index > -1) {
  //       this.state.notes.splice(index, 1);
  //     }
  //     this.setState({
  //       selectedNote: this.state.selectedNote
  //     })
  //   //console.log(this.state)
  // }

  // //GET Notes/:id
  // getNotes = () => {
  // const notesUrl = 'http://localhost:3001/notes'
  // fetch(notesUrl)
  //   .then(resp => resp.json())
  //   .then(notes:notes)
  // }
  
  
  render() {
  console.log(this.props)
    const notes = this.props.notes
    return (
      <div>
        {notes.map(note => {
          return (
            <div className="" style={{backgroundColor:'white', opacity:'.8'}}>
              <h4>MainContainer </h4>
              <Search/>
              <Note note={note} key={note.id}/>
              <FullNote/>
            </div>
          )
        })}
      </div>
    )
  }
  
}

export default MainContainer;



// GET note -- duplicate of GET notes on App page?
  // fetch('http://localhost:3001/notes', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //     Authorization: 'Bearer ' + localStorage.token
  //   }})
  //   .then(resp => resp.json())
  //   .then(console.log)