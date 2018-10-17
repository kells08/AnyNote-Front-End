import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="copyright">
			<div className="container">
				<div className="copyright" style={{backgroundColor:'white', opacity:'.7', color:'#555555'}}>
					<h4>AnyNote 2018</h4>
					<p>Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a></p>
					<ul className="icons">
						<li><a href="https://github.com/kells08" className="fa fa-github"><span>Github</span></a></li>
						<li><a href="https://twitter.com/kelly_lwakatare" className="fa fa-twitter"><span>Twitter</span></a></li>
					</ul>
				</div>
			</div>
		</div>
    );
  }
}

export default Footer;