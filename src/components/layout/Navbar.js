//@ts-check
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../Logo';

export default class Navbar extends Component {
  state = {
    mobileOpen: false
  };

  scrollPage = (e) => {
    if (e.target.href.indexOf("#") === -1 || window.location.pathname !== "/") return;

    e.preventDefault();

    if (this.state.mobileOpen) {
      this.toggleNavbar();
    }

    const elem = document.getElementById(e.target.href.split("#")[1]);
    window.scrollTo({
      behavior: "smooth",
      top: elem.offsetTop
    })
  };

  toggleNavbar = () => {
    const links = document.getElementById("links");
    const menuIcon = document.getElementById("menu-icon");

    // links.style.transform = this.state.mobileOpen ? "translateX(100%)" : "translateX(0)";
    links.classList.toggle("open-nav");
    menuIcon.classList.toggle("open");

    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const color = this.state.mobileOpen ? "#B9721F" : this.props.color;
    const { scrollPage, toggleNavbar } = this;

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
            <div className="social">
              <a href="https://facebook.com/skyblazar">
                <svg id="Group_63" data-name="Group 63" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 61.13 61.13">
                  <g id="facebook" transform="translate(22.101 14.107)">
                    <path id="f_1_" d="M48.385,32.916V17.9h5.037l.756-5.853H48.385V8.314c0-1.694.468-2.851,2.9-2.851h3.1V.229A41.988,41.988,0,0,0,49.869,0C45.4,0,42.342,2.728,42.342,7.739v4.311H37.29V17.9h5.053V32.916Z" transform="translate(-37.29 0)" fill="#b9721f" />
                  </g>
                  <g id="Ellipse_38" data-name="Ellipse 38" transform="translate(0 0)" fill="none" stroke="#b9721f" stroke-width="3">
                    <circle cx="30.565" cy="30.565" r="30.565" stroke="none" />
                    <circle cx="30.565" cy="30.565" r="29.065" fill="none" />
                  </g>
                </svg>
              </a>
            </div>
          </ul>

          <div id="menu-icon" onClick={toggleNavbar}>
            <div style={{ backgroundColor: color }} className="line1"></div>
            <div style={{ backgroundColor: color }} className="line2"></div>
            <div style={{ backgroundColor: color }} className="line3"></div>
          </div>
        </nav>
      </div>
    );
  }
}
