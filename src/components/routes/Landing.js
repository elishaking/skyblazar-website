import React, { Component } from 'react';
import './Landing.scss';

//components
import Navbar from '../layout/Navbar';

// assets
import art from '../../assets/images/art.svg';
import calcen from '../../assets/images/projects/CalcEn.svg'

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

        <div className="services container">
          <h2>WHAT WE DO</h2>


        </div>

        <div className="projects container">
          <h2>RECENT PROJECTS</h2>

          <div className="content">
            <div className="project">
              <div className="image">
                <div>
                  <img src={calcen} alt="CalcEn: Complex Calculator" />
                </div>

                <div className="hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.49" height="18.443" viewBox="0 0 26.49 18.443">
                    <g id="bx-show-alt" transform="translate(-1.946 -5)">
                      <path id="Path_34" data-name="Path 34" d="M15.587,12.952a2.651,2.651,0,0,1-2.635-2.635,2.583,2.583,0,0,1,.353-1.282C13.187,9.026,13.073,9,12.952,9A3.952,3.952,0,1,0,16.9,12.952c0-.121-.026-.234-.036-.353A2.583,2.583,0,0,1,15.587,12.952Z" transform="translate(2.239 1.269)" fill="#fff" />
                      <path id="Path_35" data-name="Path 35" d="M15.191,5A13.815,13.815,0,0,0,2.086,13.805l-.14.416.138.416a13.82,13.82,0,0,0,13.106,8.805A13.815,13.815,0,0,0,28.3,14.638l.14-.416-.138-.416A13.82,13.82,0,0,0,15.191,5Zm0,15.808A11,11,0,0,1,4.749,14.222,11,11,0,0,1,15.191,7.635a11,11,0,0,1,10.441,6.587A11,11,0,0,1,15.191,20.808Z" transform="translate(0 0)" fill="#fff" />
                    </g>
                  </svg>
                </div>
              </div>

              <a className="contributor" href="https://www.linkedin.com/in/elishaking/" rel="noopener noreferrer" target="_blank">
                <small><strong>Contributor: </strong> Elisha King</small>
              </a>

              <a href="https://calcen.skyblazar.com" rel="noopener noreferrer" target="_blank">
                CalcEn: Complex Calculator
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
