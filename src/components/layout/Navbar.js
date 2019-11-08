import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../Logo';
import Close from '../icons/Close';

export default function Navbar({ color = "#B9721F" }) {
  const scrollPage = (e) => {
    if (e.target.href.indexOf("#") === -1 || window.location.pathname !== "/") return;

    e.preventDefault();

    const links = document.getElementById("links");
    if (links.style.transform === "translateX(0px)") {
      toggleNavbar();
    }

    const elem = document.getElementById(e.target.href.split("#")[1]);
    window.scrollTo({
      behavior: "smooth",
      top: elem.offsetTop
    })
  };

  const toggleNavbar = () => {
    const links = document.getElementById("links");
    const menuIcon = document.getElementById("menu-icon");

    links.style.transform = links.style.transform === "translateX(0px)" ? "translateX(100%)" : "translateX(0)";
    menuIcon.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <nav>
        <h1 style={{ color: color }}>
          <Logo color={color} />
          <span>Skyblazar</span>
        </h1>

        <ul id="links">
          <li><a style={{ color: color }} onClick={scrollPage} href="/">Home</a></li>
          {/* <li><a onClick={scrollPage} href="#about">About</a></li> */}
          <li><a style={{ color: color }} onClick={scrollPage} href="/#services">Services</a></li>
          <li><a style={{ color: color }} onClick={scrollPage} href="/#projects">Projects</a></li>
          <li><a style={{ color: color }} onClick={scrollPage} href="/#contact">Contact</a></li>
          <li><Link style={{ color: color }} to="/articles">Articles</Link></li>
          {/* <span className="close" onClick={closeNavbar}>
            <Close color="#B9721F" />
          </span> */}
        </ul>

        <div id="menu-icon" onClick={toggleNavbar}>
          <div style={{ backgroundColor: color }} className="line1"></div>
          <div style={{ backgroundColor: color }} className="line2"></div>
          <div style={{ backgroundColor: color }} className="line3"></div>
        </div>
      </nav>
    </div>
  )
}
