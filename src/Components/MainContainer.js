import React, { Component } from 'react';
import Search from './MainPage/Search'
import Note from './MainPage/Note'
import FullNote from './MainPage/FullNote'
import NoteForm from './MainPage/NoteForm'

class MainContainer extends Component {
  state = {
    selectedNote: null,
    clicked: false,
    clickedCreate: false,
    notes: [],
    currentNote: null,
    clickedSearch: false
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
  createNote = () => {
    this.setState({
      clickedCreate: true
    })
  }

  saveNewNote = ({ title, due_date, color, text }) => {
      const token = localStorage.token
      fetch('http://localhost:3001/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify ({
        note: { 
          title,
          due_date, // same as due_date: due_date
          color,
          text 
        }
      })})
      .then(resp => resp.json())
      .then(response => {
        console.log(response)
        this.setState ({
          notes: response,
          clickedCreate: false,
          selectedNote: null
        })
      })
  }

  updateAllNotes = allNotes => {
    this.setState({
      currentNote: null,
      selectedNote: null,
      notes: allNotes
    })
  }
  

  selectNote = (note) => {
    console.log(note)
    this.setState({selectedNote: note})
  } //setting state of this.props.note.id

  searchNotes = () => {
    this.setState({clickedSearch: true})
  }

  handleLogout = (e) => {
    this.props.logout(this.state.username)
  }
  
  render(){
    console.log(this.state.notes)
    let notes = this.state.notes.map(note => (
      <div className="" >
        <Note note={note} key={note.id} selectNote={this.selectNote}/>
      </div> 
  ));

    return (
      <div>
        <div>
          <nav id="nav">
            <button className='button small' onClick={this.createNote}>Create a new note</button>
            <button className='button small' onClick={this.searchNotes}>Search your notes</button> 
            <button className='button small' onClick={this.handleLogout} >Logout</button>           
          </nav>
          <br/>
          {this.state.clickedSearch ? <Search /> : null }
          {this.state.clickedCreate ? <NoteForm submitForm={this.saveNewNote} /> : null}
          { notes }
          {this.state.selectedNote ? <FullNote {...this.state.selectedNote} updateAllNotes={this.updateAllNotes} /> : null }
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