import React from 'react';
import {Link} from 'react-router-dom';


const Portfolio = () => (
  <div className="portfolio">
    <div className="top-portfolio">
      <div className="portfolio-name">
        <h1>Portfolio</h1>
      </div>

      <div className="splash-navigation">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="assets/RobinResume.pdf">Resume</a>
      </div>
    </div>
    <h1 className="soon">Coming Soon</h1>
  </div>
);

export default Portfolio;
