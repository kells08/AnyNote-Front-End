import React, { Component } from 'react';

class Login extends Component {

  handleClick = (e) => {
    this.props.login(this.state.username, this.state.password)
  }

  handleData = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogout = (e) => {
    this.props.logout(this.state.username)
  }//do I need to pass the user info to the logout func?

  handleSignup = () => {

  }

  render() { 
    //console.log(this.props.loggedIn) //on refresh, loggedIn is reset to false
    //console.log(this.props)
    return (
      <div>
        {this.props.loggedIn
        ? <div id="banner">
            <h2>Welcome, {this.state.username}!</h2>
            <button type='submit' class='button small' onClick={this.handleLogout}>Logout</button>
          </div>
        : <div id="banner">
            <h1>Welcome! </h1>
            <h4>Please login:</h4>
            <input type="text" placeholder="username" align="center" onChange={this.handleData} name="username"/>
            <input type="text" placeholder="password" onChange={this.handleData} name="password"/>
            <button type='submit' class='button small' onClick={this.handleClick}>Submit</button>
            <br/><a href='' onClick="handleSignup">No Account? Signup!</a>
          </div>
        }
      </div>
    );
  } 
}

export default Login;
