import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="copyright">
			<div className="container">
				<div className="copyright" style={{backgroundColor:'white', opacity:'.7'}}>
					<p>Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a></p>
					<ul className="icons">
						<li><a href="www.facebook.com" className="fa fa-facebook"><span>Facebook</span></a></li>
						<li><a href="www.twitter.com" className="fa fa-twitter"><span>Twitter</span></a></li>
					</ul>
				</div>
			</div>
		</div>
    );
  }
}

export default Footer;