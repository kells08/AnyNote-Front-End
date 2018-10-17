import React, { Component } from 'react';

class FullNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      inputText: '',
      mode: 'view'
    };  //text should be note.text or can it hold ALL the fields?
    //need state for each input? and for each input's field?
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleChange(e) {
    this.setState({inputText: e.target.value})
  }

  handleSave(e) {
    this.setState({text: this.state.inputText, mode:'view'})
  }

  handleEdit() {
    this.setState({mode:'edit'})
  }

  renderInputFields() {
    if(this.state.mode === 'view') {
      return <div></div>
    } else {
      return (
        <p>
          <input 
            onChange={this.handleChange}
            value={this.state.inputText}
          />
        </p>
      )
    }
  }

  renderEditButton() {
    if(this.state.mode === 'view') {
      return (
        <button onClick={this.handleEdit}>
          Edit
        </button>
      );
    } else {
      return (
        <button onClick={this.handleSave}>
          Save
        </button>
      );
    }
  }

  //-------------------------

  render() {
    console.log(this.props)
    return (
      <div className="banner" style={{backgroundColor:'white', opacity:'.7'}}>
        <h4>{this.props.title} Note Title</h4>
        <p>{this.props.text} Note Text</p>
        {this.renderInputFields()}
        {this.renderEditButton()}
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