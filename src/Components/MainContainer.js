import React, { Component } from 'react';
import Search from './MainPage/Search'
import Note from './MainPage/Note'
import FullNote from './MainPage/FullNote'

class MainContainer extends Component {
  state = {
    selectedNote: null
  }

  selectNote = (note) => {
    this.setState({selectedNote: note})
  }
  
  render() {
  console.log(this.props)
    const notes = this.props.notes
    console.log(this.props.loggedIn)
    return (
      <div>
        {this.props.loggedIn
        ? <div>
          <h4>MainContainer </h4>
          <Search/>
          {notes.map(note => {
          return (
            <div className="" style={{backgroundColor:'white', opacity:'.8'}}>
              <Note note={note} key={note.id} selectNote={this.selectNote}/>
            </div>
          )
        })}
        <FullNote selectedNote={this.selectedNote} />
        </div>
        : null
        }
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