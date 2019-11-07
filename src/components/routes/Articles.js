import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Articles.scss';
import Navbar from '../layout/Navbar';

import img1 from '../../assets/images/articles/5-reasons-why-you-need-a-website-img.png'

const articles = [
  {
    name: '5 Reasons why your startup needs a professional website',
    source: img1,
    description: '5 Reasons why your startup needs a professional website'
  },
];

export default class Articles extends Component {
  render() {
    return (
      <div className="articles">
        <div className="main">
          <header className="container">
            <Navbar white={true} />
            <h1 id="title">Some things we know</h1>
          </header>

          <div className="container">
            <div className="content">
              <div id="articles">
                {
                  articles.map((article) => (
                    <div className="article">
                      <Link to={`/articles/${article.name.replace(/ /g, "-")}`}>
                        <img src={article.source} alt={article.name} />
                        <p>{article.name}</p>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
