import React, { Component } from 'react';
import './Landing.scss';

//components
import Navbar from '../layout/Navbar';

// assets
import art from '../../assets/images/art.svg';

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="home container">
          <Navbar />

          <div className="content">
            <div className="left">
              <h1>
                We build stunning websites, web apps and mobile apps
              </h1>

              <p>
                We are dedicated to giving your brand by building a unique and compelling digital presence
              </p>

              <a href="#contact">Start a Project</a>
            </div>

            <div className="right">
              <img src={art} alt="Web/App Design and Development" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
