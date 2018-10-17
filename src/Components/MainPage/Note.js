import React, { Component } from 'react';
class Note extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div id="extra">
				<div className="container">
					<div className="row no-collapse-1">
            <section className="4u">
							<div className="box" style={{border:'solid'}} onClick={() => this.props.selectNote(this.props.note)}>
                <h3>{this.props.note.title}</h3>
                <p>Due Date: {this.props.note.due_date} </p>
                <p>Text: {this.props.note.text}</p>
              </div>
						</section>
          </div>
        </div>
      </div>
    );  
  }
}
//<a href="" className="button">Read More</a> 
export default Note;
