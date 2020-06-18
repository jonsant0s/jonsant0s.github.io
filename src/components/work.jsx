import React, { Component } from 'react';

export default class Work extends Component {
  render(){
    return(
        <div>
          <section className="colorlib-work" data-section="work">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">My Projects</span>
                  <h2 className="colorlib-heading animate-box">Recent Work</h2>
                </div>
              </div>
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              </div>
              <div className="row">
                <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                  <div className="project" style={{backgroundImage: 'url(images/uScholar.png)'}}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href="https://ujoss-59de3.firebaseapp.com/">uScholar</a></h3>
                        <span>Web Application</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
  }
}
