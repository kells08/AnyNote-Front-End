import React, { Component } from 'react';

class FullNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteInputs: {
        title: '',
        due_date: '',
        color: '',
        text: ''
      },
      inputTexts: { 
        title: '',
        due_date: '',
        color: '',
        text: ''
      }, 
      mode: 'view'
    };  

    this.handleChange = this.handleChange.bind(this);
    //this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleChange(e) {
    
    this.setState({inputTexts: {...this.state.inputTexts, [e.target.name]: e.target.value }});
  }

  // handleSave(e) {
  //   this.setState({noteInputs: this.state.inputTexts, mode:'view'})
  // }

  handleEdit() {
    this.setState({mode:'edit'})
  }

  renderInputFields() {
    if(this.state.mode === 'view') {
      return <div></div>
    } else {
      return (
        <div className="" >
          <input name="title" onChange={this.handleChange} placeholder={this.state.noteInputs.title}/>
          <input name="due_date" onChange={this.handleChange} placeholder={this.state.inputTexts.due_date}/>
          <textarea name="text" onChange={this.handleChange} value={this.state.inputTexts.text} placeholder='note text'/>
        </div>
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
        <button>
          Save
        </button>
      );
    }
  }

  //-------------------------

  render() {
    console.log(this.state)
    return (
      <div className="banner" style={{backgroundColor:'white', opacity:'.7'}}>
        <h4>{this.props.selectedNote ? this.props.selectedNote.title : 'None selected'}</h4>
        <p>{this.props.selectedNote ? this.props.selectedNote.text : 'None selected'}</p>
        {this.renderInputFields()}
        {this.renderEditButton()}
      </div>
    );
  } 
}

export default FullNote;

// pseudocode:
// if selectedNote
// render <FullNote/> with edit 
// upon save, return to <MainContainer/>
