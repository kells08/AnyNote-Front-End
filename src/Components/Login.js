import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="" style={{border: 'solid'}}>
       <p>Please login:</p>
       <input type="text" placeholder="username"/>
       <input type="text" placeholder="password"/>
      </div>
    );
  }
}

export default Login;