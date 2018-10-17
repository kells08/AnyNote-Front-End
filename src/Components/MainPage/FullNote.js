import React, { Component } from 'react';

class FullNote extends Component {

handleToggleClick = () => {
  this.setState(state => ({
    editSave: !state.editSave
  }))
}

  render() {
    console.log(this.props)
    return (
      <div className="banner" style={{backgroundColor:'white', opacity:'.7'}}>
        <h4>{this.props.title} Note Title</h4>
        <button onClick={this.handleToggleClick}>
          Edit / Save
        </button>
        <p>{this.props.text} Note Text</p>
      </div>
    );
  } //{this.state.editSave ? 'Edit' : 'Save & Close'}
}

export default FullNote;

//how does button rerender back to main container?

//if selectedNote
// render <FullNote/> with edit 
// upon "save & close", return to <MainContainer/>
// toggle button from Edit to Save & Close