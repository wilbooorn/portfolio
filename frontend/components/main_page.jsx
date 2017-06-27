import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';


class MainPage extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className = "main-page">
        <div className="main-content">
          <h1>HI, I'M ROBIN</h1>
          <h3>I'M A SOFTWARE DEVELOPER</h3>
          <div className="splash-icons">
            <a href="https://www.github.com/wilbooorn"><i className="fa fa-github fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/rwilborn/"><i className="fa fa-linkedin-square fa-3x"></i></a>
            <a href="mailto:rtwilborn@gmail.com"><i className="fa fa-envelope fa-3x"></i></a>
          </div>
        </div>
        <div className="splash-navigation">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <a href="assets/RobinResume.pdf">Resume</a>
        </div>

      </div>
    );
  }
}

export default MainPage;
