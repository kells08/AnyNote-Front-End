import React, { Component } from 'react';

class Note extends Component {
  
  render() {
    console.log(this.props)
    return (
       <div id="extra">
				<div className="container">
					<div className="row no-collapse-1">
            <section className="4u"> <a href="<FullNote/>" className='image featured'>
              <img src='.../images/pic01.jpg' alt="flower"/></a>
							<div className="box" onClick={this.selectNote}>
                <h3>{this.props.note.title}</h3>
                <p>Due Date: {this.props.note.due_date}</p>
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


//link "image featured" will link to FullNote.js once clicked