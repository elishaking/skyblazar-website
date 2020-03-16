import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Articles.scss";

import Navbar from "../components/layout/Navbar";
import articles from "../data/articles";

export default class Articles extends Component {
  render() {
    return (
      <div className="articles">
        <div className="main">
          <header className="container">
            <Navbar color="#fff" />
            <h1 id="title">Some things we know</h1>
          </header>

          <div className="container">
            <div className="content">
              <div id="articles">
                {articles.map(article => (
                  <div className="article">
                    <Link
                      to={`/articles/${article.name
                        .replace(/: /g, "--")
                        .replace(/ /g, "-")}`}
                    >
                      <img src={article.source} alt={article.name} />
                      <p>{article.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
