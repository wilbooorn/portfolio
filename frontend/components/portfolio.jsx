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

    <div className="projects">
      <h1 className = "portfolio-title">Projects</h1>
      <div className="projects-container">
        <div className="uncappt">
          <div className="uncappt-left">
            <h2>UNCAPP'T</h2>
            <img src="assets/profile.png" />
          </div>
          <div className="uncappt-right">
            <p className="uncappt-right-top">UNCAPP'T is a full-stack
              web application built with a Ruby
              on Rails back end and a React.js/Redux front end. It is based
              on the beer rating app <strong>Untappd</strong>. It allows
              "checkin" new beers when they try them, and see what beers others
              are drinking around the world.
            </p>
            <p className="uncappt-links">
              You can check out the project live <a href="http://uncappt.com">here</a>
            or see the code <a href="http://www.github.com/wilbooorn/uncappt">here</a>.
            </p>
          </div>
        </div>

        <div className="chowtime">
          <div className="chowtime-left">
            <p className="chowtime-left-top">Chowtime is a mobile application
              built with React Native. It is designed to help users decide
              where to eat by utilizing the Yelp Fusion API to generate a
              random restaurant based on search criteria. It also utilizes
              the Google Maps API to provide directions from the user's
              current geolocation to the restaurant.
            </p>
            <p className="chowtime-links">
              You can check out the demo site <a href="https://wilbooorn.github.io/Chowtime/">here</a>
            or see the code <a href="http://www.github.com/wilbooorn/chowtime">here</a>.
            </p>
          </div>
          <div className="chowtime-right">
            <h2>Chowtime</h2>
            <img src="assets/result.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
