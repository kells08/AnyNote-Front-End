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

  componentDidMount() {
  //LOGIN POST //get user info, route on backend /profile and set user
  // if (!localStorage.token) {
  //   return null
  //   } 
  // else //if user.id == note.user_id, render notes
  }

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
  

  render() {
    return (
      <div className="wrapper style1">
        <Header/>
        <Login login={this.login}/>
        <MainContainer />
        <Footer />
      </div>
    )
  }

  // signout = () => {
  // localStorage.clear()
  // }
  
}
export default App;