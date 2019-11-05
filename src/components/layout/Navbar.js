import React from 'react';
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
      </nav>
    </div>
  )
}
