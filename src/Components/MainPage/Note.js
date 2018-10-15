import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
       <div id="extra">
						<div className="container">
							<div className="row no-collapse-1">
    <section className="4u"> <a href="<FullNote/>" className='image featured'><img src='./images/pic01.jpg' alt="flower"/></a>
									<div className="box" onClick={this.selectNote}>
										<p>We don't need any guidelines or formats. All we need to do is just let it flow right out of us. How to paint. That's easy. What to paint. That's much harder. This is a fantastic little painting.</p>
										<a href="#" className="button">Read More</a> 
                  </div>
								</section>
              </div>
            </div>
        </div>
    );  
  }
}

export default Note;


//link "image featured" will link to FullNote.js once clicked