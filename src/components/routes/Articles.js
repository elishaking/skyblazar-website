import React, { Component } from 'react';
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
        <div className="main container">
          <Navbar white={true} />

          <div className="content">
            <h1>Some things we know</h1>

            <div id="articles">
              {
                articles.map((article) => (
                  <div className="article">
                    <img src={article.source} alt={article.name} />
                    <p><a href={`/articles/${article.name.replace(/ /g, "-")}`}>{article.name}</a></p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
