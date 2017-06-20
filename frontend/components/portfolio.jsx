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

    <div className="skills">
      <h1 className = "skills-title">Skills</h1>
      <div className="skills-container">
        <div className="skillz">
          <h2>Ruby</h2>
          <img src="assets/icons/ruby.png" />
        </div>
        <div className="skillz">
          <h2>Ruby on Rails</h2>
          <img src="assets/icons/rails.png" />
        </div>
        <div className="skillz">
          <h2>Javascript</h2>
          <img src="assets/icons/js.png" />
        </div>
        <div className="skillz">
          <h2>React.js</h2>
          <img src="assets/icons/react.png" />
        </div>
        <div className="skillz">
          <h2>Redux</h2>
          <img src="assets/icons/redux.png" />
        </div>
        <div className="skillz">
          <h2>React Native</h2>
          <img src="assets/icons/react.png" />
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
