import React from 'react';
import {Link} from 'react-router-dom';

class PingPong extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="pong">
        <div className="top-pong">
          <div className="pong-title">
            <h1>Ping Pong Standings</h1>
          </div>
          <div className="about-navigation border">
            <Link to="/">Home</Link>
          </div>
        </div>

        <div className="pong-container">
          <div className="standings">
            <div className="robin">
              <h1>Robin</h1>
              <h2>17</h2>
            </div>

            <div className="dustin">
              <h1>Dustin</h1>
              <h2>15</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PingPong;
