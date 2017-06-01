import React from 'react';
import {Link} from 'react-router-dom';


const AboutPage = () => (
  <div className="about-page">
    <div className="top-about">
      <div className="about-name">
        <h1>Robin</h1>
        <h1>Tyler</h1>
        <h1>Wilborn</h1>
      </div>
      <div className="about-navigation">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <a>Resume</a>
      </div>
    </div>

    <div className="about-top-mid">
      <div className="about-me">
        <p>Who the heck am I? Great question! I'm a 20-something year old
          Southern California native (Torrance, to be exact) currently
          living in San Francisco. I attended UC Irvine from 2012-2016
          where I got my Bachelor's in Computer Science. Im a pretty big
          fan of the <span>San Diego</span> Los Angeles Chargers, and a
          good beer, but not necessarily in that order. At one point in
          my life, I ate an entire watermelon (yes, there's a video, yes, I'd
          love to prove it).
        </p>
      </div>
      <div className="snow-pic">
        <img src="https://res.cloudinary.com/dslok1mwv/image/upload/a_360/v1496356831/IMG_0050_cnqkcs.jpg" />
      </div>
    </div>

    <div className="about-bottom-mid">
      <div className="more-about-me">
        <p>
          this is some text. This is some more text
          this is some text. This is some more text
          this is some text. This is some more text
          this is some text. This is some more text
          this is some text. This is some more text
          this is some text. This is some more text
          this is some text. This is some more text
          this is some text. This is some more text
          this is some text. This is some more text
        </p>
      </div>
      <div className="grad-pic">
        <img src="http://res.cloudinary.com/dslok1mwv/image/upload/v1495831957/yww2xuizihf9hno0pmkm.jpg" />
      </div>
    </div>
  </div>
);

export default AboutPage;
