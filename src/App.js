import React, { Component } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {

  state = {
    user: {
      name: "",
      username: "",
      password: ""
    },
    notes: [],
    selectedNote: [],
    loggedIn: false,
    currentUser: {}
  }

   //get user info, route on backend /profile and set user
  componentDidMount() {
    //fetch user profile
    const token = localStorage.token;
    fetch('http://localhost:3001/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          this.setState ({
            currentUser: data
          });
        }
      })
    
    //fetch notes
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
  // if (!localStorage.token) {
  //   return null
  //   } 
  // else //if user.id == note.user_id, render notes
    

  login = (username, password) => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        "user": {
          "username": username,
          "password": password
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.token = data.jwt; 
      this.setState({
        currentUser: data.user, 
        loggedIn: true
      })
    })
  }//send user
  
  //does this need to receive username as argument?
  logout = (username) => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    console.log(this.state.notes)
    return (
      <div className="wrapper style1">
        <Header/>
        <Login login={this.login} logout={this.logout} loggedIn={this.state.loggedIn}/>
        <MainContainer notes={this.state.notes} loggedIn={this.state.loggedIn}/>
        <Footer />
      </div>
    )
  }

  // signout = () => {
  // localStorage.clear()
  // }
  
}
export default App;