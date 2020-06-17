import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Skills from './components/skills';
import Education from './components/education';
import Experience from './components/experience';
import Work from './components/work';
import Blog from './components/blog';
import Contact from './components/contact';

class App extends Component {
  render(){
    return(
      <div id= "colorlib-page">
        <div id= "container-wrap">
          <Navigation></Navigation>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Work></Work>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
