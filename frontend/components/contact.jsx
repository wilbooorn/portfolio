import React from 'react';
import {Link} from 'react-router-dom';


const Contact = () => (
  <div className="portfolio">
    <div className="top-portfolio">
      <div className="portfolio-name">
        <h1>Contact</h1>
      </div>

      <div className="splash-navigation">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <a href="assets/RobinResume.pdf">Resume</a>
      </div>
    </div>
  </div>
);

export default Contact;
