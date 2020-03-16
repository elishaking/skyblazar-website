//@ts-check
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

import Logo from "../Logo";

interface NavbarProps {
  color?: string;
}

export default class Navbar extends Component<NavbarProps> {
  state = {
    mobileOpen: false
  };

  scrollPage = (e: any) => {
    if (e.target.href.indexOf("#") === -1 || window.location.pathname !== "/")
      return;

    e.preventDefault();

    if (this.state.mobileOpen) {
      this.toggleNavbar();
    }

    const elem = document.getElementById(
      e.target.href.split("#")[1]
    ) as HTMLElement;
    window.scrollTo({
      behavior: "smooth",
      top: elem.offsetTop
    });
  };

  toggleNavbar = () => {
    const links = document.getElementById("links") as HTMLElement;
    const menuIcon = document.getElementById("menu-icon") as HTMLElement;

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
            <li>
              <a style={{ color: color }} onClick={scrollPage} href="/">
                Home
              </a>
            </li>
            {/* <li><a onClick={scrollPage} href="#about">About</a></li> */}
            <li>
              <a
                style={{ color: color }}
                onClick={scrollPage}
                href="/#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                style={{ color: color }}
                onClick={scrollPage}
                href="/#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a style={{ color: color }} onClick={scrollPage} href="/#contact">
                Contact
              </a>
            </li>
            <li>
              <Link style={{ color: color }} to="/articles">
                Articles
              </Link>
            </li>
            {/* <span className="close" onClick={closeNavbar}>
            <Close color="#B9721F" />
          </span> */}
            <li>
              <a href="https://facebook.com/skyblazar" className="social">
                <svg
                  id="facebook-app-symbol"
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.5em"
                  height="1em"
                  viewBox="0 0 12.59 24.245"
                >
                  <path
                    id="f_1_"
                    d="M45.462,24.245V13.186h3.71l.557-4.311H45.462V6.124c0-1.248.345-2.1,2.136-2.1H49.88V.169A30.927,30.927,0,0,0,46.555,0c-3.291,0-5.544,2.009-5.544,5.7V8.875H37.29v4.311h3.722V24.245Z"
                    transform="translate(-37.29)"
                    fill="#b9721f"
                  />
                </svg>
              </a>
            </li>
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
