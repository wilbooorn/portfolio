import React from 'react';
import {Link} from 'react-router-dom';


class AboutPage extends React.Component {
  constructor(props){
    super(props);

    this.resume = this.resume.bind(this);
  }

  resume(e){
    e.preventDefault();
    alert("hello");
  }

  render(){
    return(
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
            <a onClick={this.resume}>Resume</a>
          </div>
        </div>

        <div className="about-content">
          <div className="about-left">
            <div className="about-me">
              <p>Who the heck am I? Great question! I'm a 20-something year old
                Southern California native (Torrance, to be exact) currently
                living in San Francisco. I attended UC Irvine from 2012-2016
                where I got my Bachelor's in Computer Science. Im a pretty big
                fan of the <span>San Diego</span> Los Angeles Chargers, as well as a
                good beer, but not necessarily in that order. At one point in
                my life, I ate an entire watermelon (yes, there's a video, and yes, I'd
                love to prove it). I worked at the Apple Store in Newport
                Beach, CA for about a year and a half, and
                no, I don't know when the next iPhone is coming out. I also
                write software! My stack of choice consists of Ruby on Rails
                on the back, and React.js/Redux on the front. The next project I'll be
                working on will be utilizing React Native, so keep on eye on
                the protfoilio page for that!
              </p>
            </div>
            <div className="grad-pic">
              <img src="http://res.cloudinary.com/dslok1mwv/image/upload/v1495831957/yww2xuizihf9hno0pmkm.jpg" />
            </div>
          </div>

          <div className="about-right">
            <div className="snow-pic">
              <img src="https://res.cloudinary.com/dslok1mwv/image/upload/a_360/v1496356831/IMG_0050_cnqkcs.jpg" />
            </div>
            <div className="more-about-me">
              <p>You're probably wondering how I ended up in San Francisco.
                Let me explain. Through my degree, I learned a lot about
                the fundamentals of computer science, but
                I entered the job search with an unexciting portfolio. I
                needed more. I decided to enroll in App Academy, because, well,
                what did I have to lose?
                Let me just say, it was a pretty great decision. I learned how to take
                all of the foundational aspects of software development I
                learned in college, plus much, much more,
                and bring them all together to build some
                pretty sweet projects from the ground up.
                But most
                importantly, at least to me, I gained the confidence to
                call myself a software engineer.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}




export default AboutPage;
