import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="" style={{border: 'solid'}}>
       <h4>Please login:</h4>
       <input type="text" placeholder="username"/>
       <input type="text" placeholder="password"/>
      </div>
    );
  }
}

export default Login;