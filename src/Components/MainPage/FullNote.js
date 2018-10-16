import React, { Component } from 'react';

class FullNote extends Component {
  render() {
    return (
      <div className="banner" style={{backgroundColor:'white', opacity:'.7'}}>
       <h4>{this.props.title} Note Title</h4>
       <button>Save & Close</button>
       <p>{this.props.text} Note Text</p>
      </div>
    );
  }
}

export default FullNote;

//how does button rerender back to main container?
