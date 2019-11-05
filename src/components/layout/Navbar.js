import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../Logo';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <h1>
          <Logo />
          <span>Skyblazar</span>
        </h1>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      </nav>
    </div>
  )
}
