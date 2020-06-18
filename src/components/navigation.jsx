import React, { Component } from 'react';

export default class Navigation extends Component {
  render(){
    return(
        <div>
          <div>
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
              <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                <h1 id="colorlib-logo"><a href="index.html">Jonathan Santos</a></h1>
                <span className="position">Student at the University of Calgary</span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                    <li><a href="#about" data-nav-section="about">About</a></li>
                    <li><a href="#work" data-nav-section="work">Projects</a></li>
                  </ul>
                </div>
              </nav>
              <nav id="colorlib-main-menu">
                <ul>
                  <li><a href="https://www.linkedin.com/in/jonsant0s" target="_blank" rel="noopener referrer"><i className="icon-linkedin2" /></a></li>
                  <li><a href="https://github.com/jonsant0s" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                </ul>
              </nav>
              <div className="colorlib-footer">
                <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
                <ul>
                  <li><a href="#"><i className="icon-facebook2" /></a></li>
                  <li><a href="#"><i className="icon-twitter2" /></a></li>
                  <li><a href="#"><i className="icon-instagram" /></a></li>
                  <li><a href="#"><i className="icon-linkedin2" /></a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
    )
  }
}
