import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../Logo';
import Close from '../icons/Close';

export default function Navbar({ white = false }) {
  const scrollPage = (e) => {
    if (e.target.href.indexOf("#") === -1 || window.location.pathname !== "/") return;

    e.preventDefault();

    const elem = document.getElementById(e.target.href.split("#")[1]);
    window.scrollTo({
      behavior: "smooth",
      top: elem.offsetTop
    })
  };

  const toggleNavbar = (e) => {
    const links = document.getElementById("links");
    const menuIcon = document.getElementById("menu-icon");

    links.style.transform = links.style.transform === "translateX(0px)" ? "translateX(100%)" : "translateX(0)";
    menuIcon.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <nav>
        <h1 style={{ color: white && '#fff' }}>
          <Logo white={white} />
          <span>Skyblazar</span>
        </h1>

        <ul id="links">
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="/">Home</a></li>
          {/* <li><a onClick={scrollPage} href="#about">About</a></li> */}
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="/#services">Services</a></li>
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="/#projects">Projects</a></li>
          <li><a style={{ color: white && '#fff' }} onClick={scrollPage} href="/#contact">Contact</a></li>
          <li><Link style={{ color: white && '#fff' }} to="/articles">Articles</Link></li>
          {/* <span className="close" onClick={closeNavbar}>
            <Close color="#B9721F" />
          </span> */}
        </ul>

        <div id="menu-icon" onClick={toggleNavbar}>
          <div style={{ backgroundColor: white && '#fff' }} className="line1"></div>
          <div style={{ backgroundColor: white && '#fff' }} className="line2"></div>
          <div style={{ backgroundColor: white && '#fff' }} className="line3"></div>
        </div>
      </nav>
    </div>
  )
}
