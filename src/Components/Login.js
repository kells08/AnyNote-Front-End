import React, { Component } from 'react';

class Login extends Component {

  handleClick = (e) => {
    this.props.login(this.state.username, this.state.password)
  }

  handleData = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="banner" style={{backgroundColor:'white', opacity:'.7'}}>
        <h1>Welcome! </h1>
        <h4>Please login:</h4>
        <input type="text" placeholder="username" onChange={this.handleData} name="username"/>
        <input type="text" placeholder="password" onChange={this.handleData} name="password"/>
        <button type='submit' onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Login;