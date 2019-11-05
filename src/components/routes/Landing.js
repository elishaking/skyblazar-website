import React, { Component } from 'react';
import Navbar from '../layout/Navbar';

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <Navbar />

        <div className="home">
          <div className="left">
            <h1>
              VP
            </h1>
          </div>

          <div className="right">
            Art
          </div>
        </div>
      </div>
    )
  }
}
