import React, { Component } from 'react';
import Search from './MainPage/Search'
import Note from './MainPage/Note'
import FullNote from './MainPage/FullNote'

class MainContainer extends Component {
  state = {
    selectedNote: null,
    clicked: false,
    clickedCreate: false,
    notes: [],
    currentNote: {}
  }

  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      const notesUrl = 'http://localhost:3001/notes'
    fetch(notesUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) 
      .then(resp => resp.json())
      .then(response => {
        this.setState ({
         notes: response
        })
      })
    } 
  }

  //if clicked and selectedNote is empty, render blank form
  handleCreate = () => {
    {this.setState({
      clickedCreate: true
    })}
  }

  selectNote = (note) => {
    console.log(note)
    this.setState({selectedNote: note})
  } //setting state of this.props.note.id
  
  render() {
  console.log(this.props)
    const notes = this.state.notes
    console.log(this.props.loggedIn)
    return (
      <div>
        <div>
          <button onClick={this.handleCreate}>Create a new note</button>
          {this.state.clickedCreate ? <FullNote /> : null}
          <Search/>
          {notes.length ? notes.map(note => {
          return (
            <div className="" style={{backgroundColor:'white', opacity:'.7'}}>
              <Note note={note} key={note.id} selectNote={this.selectNote}/>
            </div> //check if this.state.selected is present do full note
          )
        }) : null}
        <FullNote selectedNote={this.state.selectedNote} />
        </div>
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