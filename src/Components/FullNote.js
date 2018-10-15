import React, { Component } from 'react';

class FullNote extends Component {
  render() {
    return (
      <div className="banner" style={{backgroundColor:'white', opacity:'.7'}}>
       <h4>{this.props.title} Note Title</h4>
       <button>Save & Close</button>
       <p>{this.props.text} Parse, collective impact strategy, inclusion bandwidth NGO. Activate; commitment silo; living a fully ethical life bandwidth thought provoking changemaker green space. </p>
      </div>
    );
  }
}

export default FullNote;

//how does button rerender back to main container?
