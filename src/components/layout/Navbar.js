import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../Logo';

export default function Navbar({ white = false }) {
  const scrollPage = (e) => {
    if (e.target.href.indexOf("#") === -1) return;

    e.preventDefault();

    const elem = document.getElementById(e.target.href.split("#")[1]);
    window.scrollTo({
      behavior: "smooth",
      top: elem.offsetTop
    })
  };

  return (
    <div className="navbar">
      <nav>
        <h1 style={{ color: white && '#fff' }}>
          <Logo />
          <span>Skyblazar</span>
        </h1>

        <ul>
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="/">Home</a></li>
          {/* <li><a onClick={scrollPage} href="#about">About</a></li> */}
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="#services">Services</a></li>
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="#projects">Projects</a></li>
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="#contact">Contact</a></li>
          <li><Link style={{ color: white && '#fff' }} to="/articles">Articles</Link></li>
        </ul>

        <div id="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  )
}
