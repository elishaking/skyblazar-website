import React, { Component } from 'react';
import './Articles.scss';
import Navbar from '../layout/Navbar';

export default class Articles extends Component {
  render() {
    return (
      <div className="articles">
        <div className="main container">
          <Navbar white={true} />
        </div>
      </div>
    )
  }
}
