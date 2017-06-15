import React from 'react';
import {Link} from 'react-router-dom';


const Portfolio = () => (
  <div className="portfolio">
    <div className="splash-navigation">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <a href="assets/RobinResume.pdf">Resume</a>
    </div>
  </div>
);

export default Portfolio;
