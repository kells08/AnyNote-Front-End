import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header" className="skel-panels-fixed">
          <div id="logo">
            <h1><a href="index.html">AnyNote </a></h1>
            <span className="span"> by Kelly Lwakatare</span>
          </div>
          <nav id="nav">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="left-sidebar.html">Login</a></li>
            </ul>
          </nav>
      </div>



      // <div className="" style={{border: 'solid'}}>
      //  <h1>AnyNote</h1>
      //  <p>Welcome, user!</p>
      // </div>
    );
  }
}

export default Header;